import { getNetworkInfo, Network } from "@injectivelabs/networks";
import {
  ChainGrpcWasmApi,
  ChainRestAuthApi,
  DEFAULT_STD_FEE,
  privateKeyToPublicKeyBase64,
} from "@injectivelabs/sdk-ts";
import { createTransaction, TxGrpcClient } from "@injectivelabs/tx-ts";
import { PrivateKey } from "@injectivelabs/sdk-ts/dist/local";
import { expect, test } from "@jest/globals";
import {
  attestFromAlgorand,
  attestFromInjective,
  CHAIN_ID_ALGORAND,
  CHAIN_ID_INJECTIVE,
  CONTRACTS,
  createWrappedOnInjective,
  getEmitterAddressAlgorand,
  getForeignAssetInjective,
  getSignedVAAWithRetry,
  parseSequenceFromLogAlgorand,
  safeBigIntToNumber,
  textToUint8Array,
  tryNativeToHexString,
  tryNativeToUint8Array,
} from "..";
import { CLUSTER } from "../token_bridge/__tests__/consts";
import algosdk, {
  Account,
  Algodv2,
  makeApplicationCallTxnFromObject,
  mnemonicToSecretKey,
  OnApplicationComplete,
  waitForConfirmation,
} from "algosdk";
import {
  getBalances,
  signSendAndConfirmAlgorand,
} from "../algorand/__tests__/testHelpers";
import { _parseVAAAlgorand } from "../algorand";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";

function getEndPoint() {
  return CLUSTER === "mainnet" ? Network.MainnetK8s : Network.TestnetK8s;
}

test.skip("testnet - injective contract is own admin", async () => {
  const network = getNetworkInfo(getEndPoint());
  const client = new ChainGrpcWasmApi(network.sentryGrpcApi);
  const coreQueryResult = await client.fetchContractInfo(
    CONTRACTS.TESTNET.injective.core
  );
  expect(coreQueryResult?.admin).toEqual(CONTRACTS.TESTNET.injective.core);
  const tbQueryResult = await client.fetchContractInfo(
    CONTRACTS.TESTNET.injective.token_bridge
  );
  expect(tbQueryResult?.admin).toEqual(
    CONTRACTS.TESTNET.injective.token_bridge
  );
});
test.skip("testnet - injective query guardian_set_info", async () => {
  const network = getNetworkInfo(getEndPoint());
  const client = new ChainGrpcWasmApi(network.sentryGrpcApi);
  // https://k8s.testnet.lcd.injective.network/cosmwasm/wasm/v1/contract/inj1xx3aupmgv3ce537c0yce8zzd3sz567syuyedpg/smart/eyJndWFyZGlhbl9zZXRfaW5mbyI6e319
  const queryResult = await client.fetchSmartContractState(
    CONTRACTS.TESTNET.injective.core,
    Buffer.from('{"guardian_set_info":{}}').toString("base64")
  );
  let result: any = null;
  if (typeof queryResult.data === "string") {
    result = JSON.parse(
      Buffer.from(queryResult.data, "base64").toString("utf-8")
    );
  }
  expect(result?.guardian_set_index).toEqual(0);
  expect(result?.addresses.length).toEqual(1);
});
test.skip("testnet - injective query state", async () => {
  const network = getNetworkInfo(getEndPoint());
  const client = new ChainGrpcWasmApi(network.sentryGrpcApi);
  const queryResult = await client.fetchSmartContractState(
    CONTRACTS.TESTNET.injective.core,
    Buffer.from('{"get_state":{}}').toString("base64")
  );
  let result: any = null;
  if (typeof queryResult.data === "string") {
    result = JSON.parse(
      Buffer.from(queryResult.data, "base64").toString("utf-8")
    );
  }
  expect(result?.fee?.denom).toEqual("inj");
  expect(result?.fee?.amount).toEqual("0");
});
test.skip("testnet - injective query token bridge", async () => {
  const network = getNetworkInfo(getEndPoint());
  const client = new ChainGrpcWasmApi(network.sentryGrpcApi);
  const ateArray = tryNativeToUint8Array(
    "inj13772jvadyx4j0hrlfh4jzk0v39k8uyfxrfs540",
    "injective"
  );
  const queryResult = await client.fetchSmartContractState(
    CONTRACTS.TESTNET.injective.token_bridge,
    Buffer.from(
      '{"wrapped_registry":{"chain": 19, "address": ' +
        tryNativeToHexString(
          "inj13772jvadyx4j0hrlfh4jzk0v39k8uyfxrfs540",
          "injective"
        ) +
        "}}"
    ).toString("base64")
  );
  let result: any = null;
  if (typeof queryResult.data === "string") {
    result = JSON.parse(
      Buffer.from(queryResult.data, "base64").toString("utf-8")
    );
    console.log("result", result);
  }
});
test.skip("testnet - injective attest native asset", async () => {
  const tba = CONTRACTS.TESTNET.injective.token_bridge;
  const wallet = "inj180rl9ezc4389t72pc3vvlkxxs5d9jx60w9eeu3";
  const result = await attestFromInjective(tba, wallet, "inj");
  console.log("result", result.params.msg);
  console.log("token", JSON.stringify(result.params.msg));
  console.log("json", result.toJSON());
  const walletPKHash =
    "b4870dd5af532c9b01bca76666be16ab511aa8b659c473264f22ec5ce8381d02";
  const walletPK = PrivateKey.fromPrivateKey(walletPKHash);
  const walletInjAddr = walletPK.toBech32();
  const walletPublicKey = privateKeyToPublicKeyBase64(
    Buffer.from(walletPKHash, "hex")
  );
  const network = getNetworkInfo(getEndPoint());
  console.log("getting account details for", walletInjAddr);
  /** Account Details **/
  const accountDetails = await new ChainRestAuthApi(
    network.sentryHttpApi
  ).fetchAccount(walletInjAddr);
  console.log("creating transaction...");
  const { signBytes, txRaw } = createTransaction({
    message: result.toDirectSign(),
    memo: "",
    fee: DEFAULT_STD_FEE,
    pubKey: Buffer.from(walletPublicKey).toString("base64"),
    sequence: parseInt(accountDetails.account.base_account.sequence, 10),
    accountNumber: parseInt(
      accountDetails.account.base_account.account_number,
      10
    ),
    chainId: network.chainId,
  });
  console.log("signing transacion...");
  /** Sign transaction */
  const signature = await walletPK.sign(signBytes);

  console.log("Appending signatures...");
  /** Append Signatures */
  txRaw.setSignaturesList([signature]);
  const txService = new TxGrpcClient({
    txRaw,
    endpoint: network.sentryGrpcApi,
  });

  console.log("Simulating transaction...");
  /** Simulate transaction */
  const simulationResponse = await txService.simulate();
  console.log(
    `Transaction simulation response: ${JSON.stringify(
      simulationResponse.gasInfo
    )}`
  );

  /** Broadcast transaction */
  const txResponse = await txService.broadcast();
  console.log(
    `Broadcasted transaction hash: ${JSON.stringify(txResponse.txhash)}`
  );

  // expect(result?.fee?.denom).toEqual("inj");
  // expect(result?.fee?.amount).toEqual("0");
});
test.skip("testnet - injective attest foreign asset", async () => {
  const tba = CONTRACTS.TESTNET.injective.token_bridge;
  const wallet = "inj180rl9ezc4389t72pc3vvlkxxs5d9jx60w9eeu3";
  const foreignAssetAddress = "inj13772jvadyx4j0hrlfh4jzk0v39k8uyfxrfs540";
  const result = await attestFromInjective(tba, wallet, foreignAssetAddress);
  console.log("token", JSON.stringify(result.params.msg));
  console.log("json", result.toJSON());
  const walletPKHash =
    "b4870dd5af532c9b01bca76666be16ab511aa8b659c473264f22ec5ce8381d02";
  const walletPK = PrivateKey.fromPrivateKey(walletPKHash);
  const walletInjAddr = walletPK.toBech32();
  const walletPublicKey = privateKeyToPublicKeyBase64(
    Buffer.from(walletPKHash, "hex")
  );
  const network = getNetworkInfo(getEndPoint());
  /** Account Details **/
  const accountDetails = await new ChainRestAuthApi(
    network.sentryHttpApi
  ).fetchAccount(walletInjAddr);
  const { signBytes, txRaw } = createTransaction({
    message: result.toDirectSign(),
    memo: "",
    fee: DEFAULT_STD_FEE,
    pubKey: Buffer.from(walletPublicKey).toString("base64"),
    sequence: parseInt(accountDetails.account.base_account.sequence, 10),
    accountNumber: parseInt(
      accountDetails.account.base_account.account_number,
      10
    ),
    chainId: network.chainId,
  });
  /** Sign transaction */
  const signature = await walletPK.sign(signBytes);

  /** Append Signatures */
  txRaw.setSignaturesList([signature]);
  const txService = new TxGrpcClient({
    txRaw,
    endpoint: network.sentryGrpcApi,
  });

  /** Simulate transaction */
  const simulationResponse = await txService.simulate();
  console.log(
    `Transaction simulation response: ${JSON.stringify(
      simulationResponse.gasInfo
    )}`
  );

  /** Broadcast transaction */
  const txResponse = await txService.broadcast();
  console.log(
    `Broadcasted transaction hash: ${JSON.stringify(txResponse.txhash)}`
  );

  // expect(result?.fee?.denom).toEqual("inj");
  // expect(result?.fee?.amount).toEqual("0");
});
test.skip("testnet - injective get foreign asset", async () => {
  const tba = CONTRACTS.TESTNET.injective.token_bridge;
  const foreignAssetAddress = "inj13772jvadyx4j0hrlfh4jzk0v39k8uyfxrfs540";
  const ateArray = tryNativeToUint8Array(foreignAssetAddress, "injective");
  const result = await getForeignAssetInjective(
    tba,
    CHAIN_ID_INJECTIVE,
    ateArray
  );
  console.log("result", result);

  // expect(result?.fee?.denom).toEqual("inj");
  // expect(result?.fee?.amount).toEqual("0");
});
test.skip("testnet - injective create a vaa", async () => {
  try {
    const algodToken = "";
    const algodServer = "https://testnet-api.algonode.cloud";
    const algodPort = "";
    const algodClient = new Algodv2(algodToken, algodServer, algodPort);

    console.log("Doing Algorand part......");
    console.log("Creating wallet...");
    const algoWallet: Account = mnemonicToSecretKey(
      "pave few gravity lawsuit account category like sight beauty base picnic speed shadow tuna retreat develop air stem claw leader clay decide pencil abandon music"
    );

    console.log("wallet", algoWallet);

    const accountInfo = await algodClient
      .accountInformation(algoWallet.addr)
      .do();
    console.log("accountInfo", accountInfo);
    // Asset Index of native ALGO is 0
    const AlgoIndex = BigInt(0);
    const CoreID = BigInt(86525623); // Testnet
    const TokenBridgeID = BigInt(86525641); // Testnet
    const b = await getBalances(algodClient, algoWallet.addr);
    console.log("balances", b);
    const txs = await attestFromAlgorand(
      algodClient,
      TokenBridgeID,
      CoreID,
      algoWallet.addr,
      AlgoIndex
    );
    console.log("txs", txs);

    const result = await signSendAndConfirmAlgorand(
      algodClient,
      txs,
      algoWallet
    );
    console.log("result", result);

    const sn = parseSequenceFromLogAlgorand(result);
    console.log("sn", sn);

    // Now, try to send a NOP
    const suggParams: algosdk.SuggestedParams = await algodClient
      .getTransactionParams()
      .do();
    const nopTxn = makeApplicationCallTxnFromObject({
      from: algoWallet.addr,
      appIndex: safeBigIntToNumber(TokenBridgeID),
      onComplete: OnApplicationComplete.NoOpOC,
      appArgs: [textToUint8Array("nop")],
      suggestedParams: suggParams,
    });
    const resp = await algodClient
      .sendRawTransaction(nopTxn.signTxn(algoWallet.sk))
      .do();
    await waitForConfirmation(algodClient, resp.txId, 4);
    // End of NOP

    // Start of Injective side
    console.log("Start doing the Injective part......");
    const rpc: string[] = ["https://wormhole-v2-testnet-api.certus.one"];
    const emitterAddr = getEmitterAddressAlgorand(BigInt(86525641));
    const { vaaBytes } = await getSignedVAAWithRetry(
      rpc,
      CHAIN_ID_ALGORAND,
      emitterAddr,
      sn,
      { transport: NodeHttpTransport() }
    );
    const pvaa = _parseVAAAlgorand(vaaBytes);
    console.log("parsed vaa", pvaa);

    const tba = CONTRACTS.TESTNET.injective.token_bridge;
    const walletPKHash =
      "b4870dd5af532c9b01bca76666be16ab511aa8b659c473264f22ec5ce8381d02";
    const walletPK = PrivateKey.fromPrivateKey(walletPKHash);
    const walletInjAddr = walletPK.toBech32();
    const walletPublicKey = privateKeyToPublicKeyBase64(
      Buffer.from(walletPKHash, "hex")
    );
    const network = getNetworkInfo(Network.TestnetK8s);
    console.log("Getting account details...");
    const accountDetails = await new ChainRestAuthApi(
      network.sentryHttpApi
    ).fetchAccount(walletInjAddr);
    console.log("createWrappedOnInjective...");
    const msg = await createWrappedOnInjective(tba, walletInjAddr, vaaBytes);
    console.log("cr", msg);
    console.log("submit_vaa", JSON.stringify(msg.params.msg));
    /** Prepare the Transaction **/
    console.log("create transaction...");
    const { signBytes, txRaw } = createTransaction({
      message: msg.toDirectSign(),
      memo: "",
      fee: DEFAULT_STD_FEE,
      pubKey: Buffer.from(walletPublicKey).toString("base64"),
      sequence: parseInt(accountDetails.account.base_account.sequence, 10),
      accountNumber: parseInt(
        accountDetails.account.base_account.account_number,
        10
      ),
      chainId: network.chainId,
    });
    console.log("txRaw", txRaw);

    console.log("sign transaction...");
    /** Sign transaction */
    const signature = await walletPK.sign(signBytes);

    /** Append Signatures */
    txRaw.setSignaturesList([signature]);

    const txService = new TxGrpcClient({
      txRaw,
      endpoint: network.sentryGrpcApi,
    });

    console.log("simulate transaction...");
    /** Simulate transaction */
    const simulationResponse = await txService.simulate();
    console.log(
      `Transaction simulation response: ${JSON.stringify(
        simulationResponse.gasInfo
      )}`
    );

    console.log("broadcast transaction...");
    /** Broadcast transaction */
    const txResponse = await txService.broadcast();
    console.log("txResponse", txResponse);

    if (txResponse.code !== 0) {
      console.log(`Transaction failed: ${txResponse.rawLog}`);
    } else {
      console.log(
        `Broadcasted transaction hash: ${JSON.stringify(txResponse.txhash)}`
      );
    }
  } catch (e) {
    console.error(e);
  }

  // expect(result?.fee?.denom).toEqual("inj");
  // expect(result?.fee?.amount).toEqual("0");
});
