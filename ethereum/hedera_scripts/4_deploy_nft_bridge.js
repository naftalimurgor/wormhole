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
  const NFTImplementation = require("../build/contracts/NFTImplementation.json");
  const NFTImplementationAddress = await deploy("NFTImplementation", NFTImplementation.bytecode, 100000, new ContractFunctionParameters());

  const NFTBridgeSetup = require("../build/contracts/NFTBridgeSetup.json");
  const NFTBridgeSetupAddress = await deploy("NFTBridgeSetup", NFTBridgeSetup.bytecode, 100000, new ContractFunctionParameters());
  
  const NFTBridgeImplementation = require("../build/contracts/NFTBridgeImplementation.json");
  const NFTBridgeImplementationAddress = await deploy("NFTBridgeImplementation", NFTBridgeImplementation.bytecode, 100000, new ContractFunctionParameters());

  console.log("generating setup initialization data...");

  const setup = new web3.eth.Contract(NFTBridgeSetup.abi, NFTBridgeSetupAddress);
  const initData = setup.methods.setup(
    NFTBridgeImplementationAddress,
      chainId,
      WORMHOLE_ADDRESS,
      governanceChainId,
      governanceContract,
      NFTImplementationAddress
  ).encodeABI();

  const NFTBridgeEntrypoint = require("../build/contracts/NFTBridgeEntrypoint.json");
  const params = new ContractFunctionParameters()
    .addAddress(NFTBridgeSetupAddress)
    .addBytes(new Uint8Array(Buffer.from(initData.substring(2), "hex")));

  await deploy("NFTBridgeEntrypoint", NFTBridgeEntrypoint.bytecode, 200000, params);
  console.log("NFT Bridge deploy complete")
}

main();
