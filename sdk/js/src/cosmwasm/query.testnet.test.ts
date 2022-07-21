import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ChainGrpcWasmApi } from "@injectivelabs/sdk-ts";
import { expect, test } from "@jest/globals";
import { CONTRACTS } from "..";

test.skip("testnet - injective contract is own admin", async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
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
  const network = getNetworkInfo(Network.TestnetK8s);
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
  const network = getNetworkInfo(Network.TestnetK8s);
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
