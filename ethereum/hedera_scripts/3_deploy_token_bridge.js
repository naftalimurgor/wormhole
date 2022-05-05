require("dotenv").config({ path: ".env" });
const {
  AccountId,
  PrivateKey,
  Client,
  ContractId,
  ContractCreateFlow,
  ContractFunctionParameters,
  ContractCallQuery,
} = require("@hashgraph/sdk");
const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8545");

// CONFIG
const chainId = process.env.BRIDGE_INIT_CHAIN_ID;
const governanceChainId = process.env.BRIDGE_INIT_GOV_CHAIN_ID;
const governanceContract = process.env.BRIDGE_INIT_GOV_CONTRACT; // bytes32
const WETH = process.env.BRIDGE_INIT_WETH;
const WORMHOLE_ADDRESS = process.env.WORMHOLE_ADDRESS;

// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

// Based on example for ContractCreateFlow from https://docs.hedera.com/guides/docs/sdks/smart-contracts/create-a-smart-contract#methods
async function deploy(contractName, contractBytecode, gas, constructorFunctionParameters) {
  console.log("deploying " + contractName + ", gas: " + gas + ", byteCodeLen: " + contractBytecode.length)

  //Create the transaction
  const contractCreate = new ContractCreateFlow()
      .setGas(gas)
      .setBytecode(contractBytecode)
      .setConstructorParameters(constructorFunctionParameters)

  //Sign the transaction with the client operator key and submit to a Hedera network
  const txResponse = contractCreate.execute(client)

  //Get the receipt of the transaction
  const receipt = (await txResponse).getReceipt(client)

  //Get the new contract ID
  const contractId = (await receipt).contractId
  const contractAddress = "0x" + contractId.toSolidityAddress()

  console.log("deployed " + contractName + ", contractId: " + contractId + ", contractAddress: " + contractAddress)
  return contractAddress
}

async function main() {
  const TokenImplementation = require("../build/contracts/TokenImplementation.json");
  const TokenImplementationAddress = await deploy("TokenImplementation", TokenImplementation.bytecode, 100000, new ContractFunctionParameters());

  const BridgeSetup = require("../build/contracts/BridgeSetup.json");
  const BridgeSetupAddress = await deploy("BridgeSetup", BridgeSetup.bytecode, 100000, new ContractFunctionParameters());
  
  const BridgeImplementation = require("../build/contracts/BridgeImplementation.json");
  const BridgeImplementationAddress = await deploy("BridgeImplementation", BridgeImplementation.bytecode, 100000, new ContractFunctionParameters());

  console.log("generating setup initialization data...");

  const setup = new web3.eth.Contract(BridgeSetup.abi, BridgeSetupAddress);
  const initData = setup.methods.setup(
      BridgeImplementationAddress,
      chainId,
      WORMHOLE_ADDRESS,
      governanceChainId,
      governanceContract,
      TokenImplementationAddress,
      WETH
  ).encodeABI();

  const TokenBridge = require("../build/contracts/TokenBridge.json");
  const params = new ContractFunctionParameters()
    .addAddress(BridgeSetupAddress)
    .addBytes(new Uint8Array(Buffer.from(initData.substring(2), "hex")));

  await deploy("TokenBridge", TokenBridge.bytecode, 200000, params);
  console.log("TokenBridge deploy complete")
}

main();
