require("dotenv").config({ path: ".env" });
const {
  AccountId,
  PrivateKey,
  Client,
  ContractId,
  ContractCallQuery,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  ContractInfoQuery,
  Hbar,
} = require("@hashgraph/sdk");
const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8545");

// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID)
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY)

async function queryContractInfo(contractName, contractAddress) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying " + contractName + " contract info, contract address: " + contractAddress + ", contractId " + contractId)

  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  const query = new ContractInfoQuery().setContractId(contractId);

  //Sign the query with the client operator private key and submit to a Hedera network
  const info = await query.execute(client);
  console.log("contract info for " + contractName + ": %o", info);
}

async function queryChainId(contractName, contractAddress, jsonFile) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying " + contractName + " chainId, contract address: " + contractAddress + ", contractId " + contractId)

  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  const json = require(jsonFile);
  const param = encodeFunctionCall("chainId", [], json.abi);

  const result = await new ContractCallQuery()
    .setContractId(contractId)
    .setGas(100000)
    .setFunctionParameters(param)
    .execute(client);

  console.log("chainId: " + decodeFunctionResult("chainId", result.bytes, json.abi)[0])
}

//////////////////////////////////// Wormhole specific stuff

async function queryWormholeStuff(contractAddress) {
  const client = Client.forTestnet().setOperator(operatorId, operatorKey);
  const json = require("../build/contracts/Getters.json");

  const gsidx = await getCurrentGuardianSetIndex(client, contractAddress, json)
  await getGuardianSetExpiry(client, contractAddress, json, gsidx)
  await getGovernanceContract(client, contractAddress, json)

  // Not sure why this is failing:
  // await getGuardianSet(client, contractAddress, json, gsidx)
}

async function getCurrentGuardianSetIndex(client, contractAddress, json) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying guardian set index, contract address: " + contractAddress + ", contractId " + contractId)

  const param = encodeFunctionCall("getCurrentGuardianSetIndex", [], json.abi);

  const result = await new ContractCallQuery()
    .setContractId(contractId)
    .setGas(100000)
    .setFunctionParameters(param)
    .execute(client);

  const gsidx = decodeFunctionResult("getCurrentGuardianSetIndex", result.bytes, json.abi)[0]
  console.log("current guardian set index: " + gsidx)
  return parseInt(gsidx)
}

async function getGuardianSetExpiry(client, contractAddress, json) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying guardian set expiry, contract address: " + contractAddress + ", contractId " + contractId)

  const param = encodeFunctionCall("getGuardianSetExpiry", [], json.abi);

  const result = await new ContractCallQuery()
    .setContractId(contractId)
    .setGas(100000)
    .setFunctionParameters(param)
    .execute(client);

  console.log("current guardian set expiry: " + decodeFunctionResult("getGuardianSetExpiry", result.bytes, json.abi)[0])
}

async function getGuardianSet(client, contractAddress, json, gsidx) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying guardian set for index " + gsidx + ", contract address: " + contractAddress + ", contractId " + contractId)

  const param = encodeFunctionCall("getGuardianSet", [ gsidx ], json.abi);

  console.log("Making call, param: %o", param)
  const result = await new ContractCallQuery()
    .setContractId(contractId)
    .setQueryPayment(new Hbar(20))
    .setGas(500000000)
    .setFunctionParameters(param)
    .execute(client);

  console.log("Back from call")
  console.log("guardian set: " + decodeFunctionResult("getGuardianSet", result.bytes, json.abi)[0])
}

async function getGovernanceContract(client, contractAddress, json) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying governance contract, contract address: " + contractAddress + ", contractId " + contractId)

  const param = encodeFunctionCall("governanceContract", [], json.abi);

  const result = await new ContractCallQuery()
    .setContractId(contractId)
    .setGas(100000)
    .setFunctionParameters(param)
    .execute(client);

  console.log("governance contract: " + decodeFunctionResult("governanceContract", result.bytes, json.abi)[0])
}

//////////////////////////////////// Bridge specific stuff

async function queryBridgeContract(contractName, contractAddress, chainId, jsonFile) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Querying bridge contract from " + contractName + ", contract address: " + contractAddress + ", contractId " + contractId + ", chainId " + chainId)

  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  const json = require(jsonFile);
  const param = encodeFunctionCall("bridgeContracts", [ chainId ], json.abi);

  const result = await new ContractCallQuery()
    .setContractId(contractId)
    .setGas(100000)
    .setFunctionParameters(param)
    .execute(client);

  console.log("bridgeContract[" + chainId + "]: " + decodeFunctionResult("bridgeContracts", result.bytes, json.abi)[0])  
}

async function registerChain(contractName, contractAddress, vaa, jsonFile) {
  const contractId = ContractId.fromEvmAddress(0, 0, contractAddress.substring(2));
  console.log("Registering chain on " + contractName + ", contract address: " + contractAddress + ", contractId " + contractId)

  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  const json = require(jsonFile);
  const param = encodeFunctionCall("registerChain", [ vaa ], json.abi);

  const txResponse = await new ContractExecuteTransaction()
    .setContractId(contractId)
    .setGas(1000000)
    .setFunctionParameters(param)
    // .setFunction("registerChain", new ContractFunctionParameters().addString(vaa))
    .execute(client);


  //Request the receipt of the transaction
  const receipt = await txResponse.getReceipt(client);

  console.log("registerChain txResponse: %o", txResponse)  
  console.log("registerChain receipt: %o", receipt)  

  //Get the transaction consensus status
  const transactionStatus = receipt.status;

  console.log("The transaction consensus status is " + transactionStatus);    
}

function encodeFunctionCall(functionName, parameters, abi) {
  const functionAbi = abi.find((func) => func.name === functionName && func.type === "function");
  const encodedParametersHex = web3.eth.abi.encodeFunctionCall(functionAbi, parameters).slice(2);
  return Buffer.from(encodedParametersHex, "hex");
}

function decodeFunctionResult(functionName, resultAsBytes, abi) {
  const functionAbi = abi.find((func) => func.name === functionName);
  const functionParameters = functionAbi.outputs;
  const resultHex = "0x".concat(Buffer.from(resultAsBytes).toString("hex"));
  const result = web3.eth.abi.decodeParameters(functionParameters, resultHex);
  return result;
}

async function main() {
  // await queryContractInfo("Wormhole", "0x00000000000000000000000000000000020cea83")
  // await queryContractInfo("TokenBridge", "0x00000000000000000000000000000000020ceb06")
  // await queryContractInfo("NFTBridge", "0x00000000000000000000000000000000020ceb0e")
  // await queryChainId("Wormhole", "0x00000000000000000000000000000000020cea83", "../build/contracts/Getters.json")
  // await queryChainId("TokenBridge", "0x00000000000000000000000000000000020ceb06")
  // await queryChainId("NFTBridge", "0x00000000000000000000000000000000020ceb0e")
  const VAA12 = "0x01000000000100595f3b02b450ea71724c09a4b1a071f67eafb1471e0bd0d03d506e11ceedc81d788dd57dc81927cb74970ad6389e369d0589682d176eff033fe140dae1035155000000000100000001000100000000000000000000000000000000000000000000000000000000000000040000000002a49e7a00000000000000000000000000000000000000000000546f6b656e427269646765010000000c000000000000000000000000eba00cbe08992edd08ed7793e07ad6063c807004"
  // const VAA13 = "0x0100000000010018f4c45a9e8e0b6767d84bef689987dcdf86190500b92c82aa67df532a5719451b5a1897c342ae4fb851fc84c090624ab3070b485f54a07b9cf9e7645069c8cf010000000100000001000100000000000000000000000000000000000000000000000000000000000000040000000004df8a7400000000000000000000000000000000000000000000546f6b656e427269646765010000000d000000000000000000000000c7a13be098720840dea132d860fdfa030884b09a"
  // const VAA14 = "0x010000000001008a8e90d7053e7f2056a637de9cf525e949a2a8834b9c3a8ac05b6106dd83756443493fcc75a88f4c6fcd9cf1121a7b5f51807f8a9e3e63cebdd47904f30de70d000000000100000001000100000000000000000000000000000000000000000000000000000000000000040000000001b0920b00000000000000000000000000000000000000000000546f6b656e427269646765010000000e00000000000000000000000005ca6037ec51f8b712ed2e6fa72219feae74e153"
  // const VAA16 = "0x010000000001000f89d8382c4e3cc006f47cacbdc3778dc4538735beb4b3b16f1298ae5d3343b76a5a7f219cf164cb3d825d835171657853a5a6737d01e34b3cd185f7359ae981010000000100000001000100000000000000000000000000000000000000000000000000000000000000040000000005c65ed800000000000000000000000000000000000000000000546f6b656e4272696467650100000010000000000000000000000000bc976d4b9d57e57c3ca52e1fd136c45ff7955a96"
  //await registerChain("TokenBridge", "0x00000000000000000000000000000000020ceb06", VAA12, "../build/contracts/BridgeGovernance.json")
  await queryBridgeContract("TokenBridge", "0x00000000000000000000000000000000020ceb06", 12, "../build/contracts/BridgeGetters.json")
  await queryBridgeContract("TokenBridge", "0x00000000000000000000000000000000020ceb06", 13, "../build/contracts/BridgeGetters.json")
  await queryBridgeContract("TokenBridge", "0x00000000000000000000000000000000020ceb06", 14, "../build/contracts/BridgeGetters.json")
  await queryBridgeContract("TokenBridge", "0x00000000000000000000000000000000020ceb06", 16, "../build/contracts/BridgeGetters.json")
  await queryWormholeStuff("0x00000000000000000000000000000000020cea83")
  console.log("All done.") 
}

main()

/*
Registering chain on TokenBridge, contract address: 0x00000000000000000000000000000000020ceb06, contractId 0.0.00000000000000000000000000000000020ceb06
registerChain txResponse: TransactionResponse {
  nodeId: AccountId {
    shard: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
    realm: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
    num: Long { low: 5, high: 0, unsigned: false, [__isLong__]: true },
    aliasKey: null,
    _checksum: null,
    [checksum]: [Getter]
  },

  // A random transaction ID looks like this: 0.0.34399286@1651776732.394128697. Before the @ is the accountId. After the @ is the timestamp.
  //0xfa0b871ea37ececc004ac2ebfd895628955e4da96b79821ef558d231e63d22d1041a208526543f34ad4671ee46e3b0bc
  transactionHash: <Buffer fa 0b 87 1e a3 7e ce cc 00 4a c2 eb fd 89 56 28 95 5e 4d a9 6b 79 82 1e f5 58 d2 31 e6 3d 22 d1 04 1a 20 85 26 54 3f 34 ad 46 71 ee 46 e3 b0 bc>,
  transactionId: TransactionId {
    accountId: AccountId {
      shard: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
      realm: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
      num: Long {
        low: 34399286,
        high: 0,
        unsigned: false,
        [__isLong__]: true
      },
      aliasKey: null,
      _checksum: null,
      [checksum]: [Getter]
    },
    validStart: Timestamp {
      seconds: Long {
        low: 1651777038,
        high: 0,
        unsigned: false,
        [__isLong__]: true
      },
      nanos: Long {
        low: 876614469,
        high: 0,
        unsigned: false,
        [__isLong__]: true
      }
    },
    scheduled: false,
    nonce: null
  }
}
registerChain receipt: TransactionReceipt {
  status: Status { _code: 22 },
  accountId: null,
  fileId: null,
  contractId: ContractId {
    shard: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
    realm: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
    num: Long {
      low: 34401030,
      high: 0,
      unsigned: false,
      [__isLong__]: true
    },
    evmAddress: null,
    _checksum: null,
    [checksum]: [Getter]
  },
  topicId: null,
  tokenId: null,
  scheduleId: null,
  exchangeRate: ExchangeRate {
    hbars: 30000,
    cents: 411265,
    expirationTime: 2022-05-05T19:00:00.000Z,
    exchangeRateInCents: 13.708833333333333
  },
  topicSequenceNumber: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
  topicRunningHash: Uint8Array(0) [
    [BYTES_PER_ELEMENT]: 1,
    [length]: 0,
    [byteLength]: 0,
    [byteOffset]: 0,
    [buffer]: ArrayBuffer { byteLength: 0 }
  ],
  totalSupply: Long { low: 0, high: 0, unsigned: false, [__isLong__]: true },
  scheduledTransactionId: null,
  serials: [ [length]: 0 ],
  duplicates: [ [length]: 0 ],
  children: [ [length]: 0 ]
}
The transaction consensus status is 22 // Of all the stupidity, 22 is success.
*/
