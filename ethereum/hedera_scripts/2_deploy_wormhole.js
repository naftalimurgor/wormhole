require("dotenv").config({ path: ".env" });
const {
  AccountId,
  PrivateKey,
  Client,
  ContractId,
  FileAppendTransaction,
  FileCreateTransaction,
  ContractCreateTransaction,
  ContractFunctionParameters,
  ContractExecuteTransaction,
  ContractCallQuery,
  Hbar,
} = require("@hashgraph/sdk");
const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8545");

// CONFIG
const initialSigners = JSON.parse(process.env.INIT_SIGNERS);
const chainId = process.env.INIT_CHAIN_ID;
const governanceChainId = process.env.INIT_GOV_CHAIN_ID;
const governanceContract = process.env.INIT_GOV_CONTRACT; // bytes32

const MAX_FILE_SIZE = 2000;
const MAX_FILE_SIZE_HEX_STR = MAX_FILE_SIZE * 2;

// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

// TODO: use ContractCreateFlow
// https://docs.hedera.com/guides/docs/sdks/smart-contracts/create-a-smart-contract#methods
async function deploy(contractBytecode, constructorFunctionParameters) {
  // Create a file on Hedera and store the bytecode
  nChunks = Math.ceil(contractBytecode.length / MAX_FILE_SIZE_HEX_STR);
  let bytecodeFileId;
  for (let i = 0; i < nChunks; i++) {
    console.log(`Uploading Chunk ${i + 1} of ${nChunks}`);
    const chunkStr = contractBytecode.substring(
      MAX_FILE_SIZE_HEX_STR * i,
      MAX_FILE_SIZE_HEX_STR * (i + 1)
    );
    if (i == 0) {
      const fileCreateTx = new FileCreateTransaction()
        .setContents(chunkStr)
        .setKeys([operatorKey])
        .setMaxTransactionFee(new Hbar(0.75))
        .freezeWith(client);
      const fileCreateSign = await fileCreateTx.sign(operatorKey);
      const fileCreateSubmit = await fileCreateSign.execute(client);
      const fileCreateRx = await fileCreateSubmit.getReceipt(client);
      bytecodeFileId = fileCreateRx.fileId;
    } else {
      const fileAppendTx = new FileAppendTransaction()
        .setFileId(bytecodeFileId)
        .setContents(chunkStr)
        .setMaxTransactionFee(new Hbar(0.75))
        .freezeWith(client);
      const fileAppendSign = await fileAppendTx.sign(operatorKey);
      const fileAppendSubmit = await fileAppendSign.execute(client);
      const fileAppendRx = await fileAppendSubmit.getReceipt(client);
    }
  }

  console.log(`- The bytecode file ID is: ${bytecodeFileId} \n`);

  // Instantiate the smart contract
  const contractInstantiateTx = new ContractCreateTransaction()
    .setBytecodeFileId(bytecodeFileId)
    .setGas(1000000)
    .setConstructorParameters(constructorFunctionParameters);
  const contractInstantiateSubmit = await contractInstantiateTx.execute(client);
  const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(
    client
  );
  const contractId = contractInstantiateRx.contractId;
  const contractAddress = contractId.toSolidityAddress();
  console.log(`- The smart contract ID is: ${contractId} \n`);
  console.log(
    `- The smart contract ID in Solidity format is: ${contractAddress} \n`
  );
  return "0x" + contractAddress;
}

async function main() {
  console.log("Deploying Setup...");
  const Setup = require("../build/contracts/Setup.json");
  const setupAddress = await deploy(
    Setup.bytecode,
    new ContractFunctionParameters()
  );
  //   const setupAddress = "0x00000000000000000000000000000000020ce586";

  console.log("Deploying Implementation...");
  const Implementation = require("../build/contracts/Implementation.json");
  const implementationAddress = await deploy(
    Implementation.bytecode,
    new ContractFunctionParameters()
  );
  //   const implementationAddress = "0x00000000000000000000000000000000020ce617";

  console.log("Generating Setup Initialization Data...");
  const setup = new web3.eth.Contract(Setup.abi, setupAddress);
  const initData = setup.methods
    .setup(
      implementationAddress,
      initialSigners,
      chainId,
      governanceChainId,
      governanceContract
    )
    .encodeABI();

  console.log("Deploying Wormhole...");
  const Wormhole = require("../build/contracts/Wormhole.json");
  const params = new ContractFunctionParameters()
    .addAddress(setupAddress)
    .addBytes(new Uint8Array(Buffer.from(initData.substring(2), "hex")));
  const wormholeAddress = await deploy(Wormhole.bytecode, params);
  //   const wormholeAddress = "0x00000000000000000000000000000000020ce638";

  // Query the contract to check changes in state variable
  const contractQueryTx = new ContractCallQuery()
    .setContractId(
      ContractId.fromEvmAddress(0, 0, wormholeAddress.substring(2))
    )
    .setGas(100000)
    .setFunction("chainId");
  const contractQuerySubmit = await contractQueryTx.execute(client);
  console.log("Query Result:");
  console.log(contractQuerySubmit);
}
main();
