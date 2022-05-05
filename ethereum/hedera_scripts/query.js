require("dotenv").config({ path: ".env" });
const { hethers } = require('@hashgraph/hethers');

const {
  AccountId,
  PrivateKey,
//   Client,
//   ContractId,
//   ContractCallQuery,
//   ContractInfoQuery,
} = require("@hashgraph/sdk");
const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8545");

const fs = require("fs");

// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID)
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY)

// async function queryContractInfo(contractName, contractAddress) {
//   const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
//   console.log("Querying " + contractName + " contract info, contract address: " + contractAddress + ", contractId " + contractId)

//   const client = Client.forTestnet().setOperator(operatorId, operatorKey);

//   const query = new ContractInfoQuery().setContractId(contractId);

//   //Sign the query with the client operator private key and submit to a Hedera network
//   const info = await query.execute(client);
//   console.log("contract info for " + contractName + ": %o", info);
// }

async function queryChainId(contractName, contractAddress) {
  const provider = hethers.providers.getDefaultProvider('testnet');
  console.log("Balance from provider: " + hethers.utils.formatHbar((await provider.getBalance('0.0.34399286')).toString()) + " hbar")  

  const eoaAccount = {
    account: operatorId,
    privateKey: `0x${operatorKey.toStringRaw()}`, // Convert private key to short format using .toStringRaw()
  };

  const wallet = new hethers.Wallet(eoaAccount, provider);
  const walletAddress = hethers.utils.getAddressFromAccount(operatorId);
  console.log(`Balance from wallet:   ${hethers.utils.formatHbar((await wallet.getBalance(walletAddress)).toString())} hbar`);

  const BridgeGetters = require("../build/contracts/BridgeGetters.json");
  const abi = BridgeGetters.abi;

  // From example here: https://docs.hedera.com/hethers/application-programming-interface/contract-interaction/example-erc-20-contract
  // const abi = [
  //   "function chainId() public view returns (uint16)",
  // ];

  // By connecting with a provider rather than a signer, we are in read only mode.
  const contract = new hethers.Contract(contractAddress, abi, wallet);

  console.log("getting chainId")
  const tx = await contract.chainId();
  console.log("back from call")
  const result = await tx.wait();
  console.log("chainId: %o", result)


  // const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  // console.log("Querying " + contractName + " chainId, contract address: " + contractAddress + ", contractId " + contractId)

  // const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  // const result = await new ContractCallQuery()
  //   .setContractId(contractId)
  //   .setGas(100000)
  //   .setFunction("chainId")
  //   .execute(client);

  // console.log("chainId: " + result.getUint256(0).toString())
  // console.log("result: %o", result)
}

// async function queryBridgeContract(contractName, contractAddress, chainId) {
//   const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
//   console.log("Querying bridge contract from " + contractName + ", contract address: " + contractAddress + ", contractId " + contractId + ", chainId " + chainId)

//   const client = Client.forTestnet().setOperator(operatorId, operatorKey);

//   param = new Uint8Array(32)
//   param[31] = chainId

//   const result = await new ContractCallQuery()
//     .setContractId(contractId)
//     .setGas(100000)
//     .setFunction("bridgeContracts")
//     .setFunctionParameters(param)
//     .execute(client);

//   console.log("bridgeContract: %o", result)

//   //   const contractCall = await new ContractCallQuery()
//   //     .setContractId(contractId)
//   //     .setFunctionParameters(functionCallAsUint8Array)
//   //     .setQueryPayment(new Hbar(2))
//   //     .setGas(100000)
//   //     .execute(client);
  
//   // const abi = require(abiFile);
//   // let abi = JSON.parse(fs.readFileSync(abiFile, 'utf8'));

//   // const functionCallAsUint8Array = encodeFunctionCall("chainId", [], abi);
// }

// function encodeFunctionCall(functionName, parameters, abi) {
//   const functionAbi = abi.find((func) => func.name === functionName && func.type === "function");
//   const encodedParametersHex = web3.eth.abi.encodeFunctionCall(functionAbi, parameters).slice(2);
//   return Buffer.from(encodedParametersHex, "hex");
// }

async function main() {
  // await queryContractInfo("Wormhole", "0x00000000000000000000000000000000020cea83")
  // await queryContractInfo("TokenBridge", "0x00000000000000000000000000000000020ceb06")
  // await queryContractInfo("NFTBridge", "0x00000000000000000000000000000000020ceb0e")
  // await queryChainId("Wormhole", "0x00000000000000000000000000000000020cea83")
  await queryChainId("TokenBridge", "0x00000000000000000000000000000000020ceb04")
  // await queryChainId("NFTBridge", "0x00000000000000000000000000000000020ceb0e") 
  // await queryBridgeContract("TokenBridge", "0x00000000000000000000000000000000020ceb06", 1)
  console.log("All done.") 
}

main()
