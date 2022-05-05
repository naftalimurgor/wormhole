require("dotenv").config({ path: ".env" });
const {
  AccountId,
  PrivateKey,
  Client,
  ContractId,
  ContractCallQuery,
  ContractInfoQuery,
} = require("@hashgraph/sdk");
const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8545");

// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID)
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY)

async function main() {
  
  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  const wormholeAddress = "0x00000000000000000000000000000000020ce91b";
  const num = parseInt(wormholeAddress.substring(2), 16);
  console.log("num: " + num);
  const contractId = ContractId.fromEvmAddress(0, 0, wormholeAddress.substring(2));
  // const contractId = ContractId.fromString("0.0.34400539");

  console.log("executing query for address " + wormholeAddress + ", contractId " + contractId);

  const query = new ContractInfoQuery()
    .setContractId(contractId);
  console.log("querying contract info");

  //Sign the query with the client operator private key and submit to a Hedera network
  const info = await query.execute(client);
  console.log("contract info: %o", info);

  const contractQueryTx = new ContractCallQuery()
    .setContractId(contractId)
    .setGas(100000)
    .setFunction("chainId");

  console.log("Getting chainId")
  const contractQuerySubmit = await contractQueryTx.execute(client)
  console.log("chainId: " + contractQuerySubmit.getUint256(0).toString())
}

main();
