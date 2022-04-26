export const TEST_WALLET_MNEMONIC_1 =
  "notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius";
export const TEST_WALLET_MNEMONIC_2 =
  "maple pudding enjoy pole real rabbit soft make square city wrestle area aisle dwarf spike voice over still post lend genius bitter exit shoot";

export const TEST_WALLET_ADDRESS_1 =
  "wormhole1cyyzpxplxdzkeea7kwsydadg87357qna3zg3tq";
export const TEST_WALLET_ADDRESS_2 =
  "wormhole1wqwywkce50mg6077huy4j9y8lt80943ks5udzr";

export const DEVNET_GUARDIAN_PUBLIC_KEY =
  "0xbeFA429d57cD18b7F8A4d91A2da9AB4AF05d0FBe";
export const DEVNET_GUARDIAN_PRIVATE_KEY =
  "cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0";
export const DEVNET_GUARDIAN2_PUBLIC_KEY =
  "0xa75a14f140c22d691bb0b19b4a51fae5b77f9d89";
export const DEVNET_GUARDIAN2_PRIVATE_KEY =
  "bfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0";

//This assume guardian 1 uses test wallet 1.
export const GUARDIAN_VALIDATOR_VALADDR =
  "wormholevaloper1cyyzpxplxdzkeea7kwsydadg87357qna87hzv8";
export const GUARDIAN_VALIDATOR2_VALADDR = "";

export const GUARDIAN_VALIDATOR_BASE64_VALADDR = "wQggmD8zRWznvrOgRvWoP6NPAn0=";

//This is a VAA in hex which is for guardian set 2, where Guardian 2 is the only active guardian.
export const GUARDIAN2_UPGRADE_VAA = "";

export const NODE_URL = "http://localhost:1317";
export const TENDERMINT_URL = "http://localhost:26657";
//export const FAUCET_URL = "http://localhost:4500";

export const HOLE_DENOM = "uhole";
export const ADDRESS_PREFIX = "wormhole";
export const OPERATOR_PREFIX = "wormholevaloper";

export const DEVNET_SOLT = "2WDq7wSs9zYrpx2kbHDA4RUTRch2CCTP6ZWaH4GNfnQQ";

//This is a transfer for 100 SOLT to Chain ID 2,
//And recipient address wormhole1cyyzpxplxdzkeea7kwsydadg87357qna3zg3tq, which should be TEST_WALLET_1
// Will need to update this with the real chain ID
export const TEST_TRANSFER_VAA_1 =
  "01000000000100167fddaf3b94aa48975829abfa0f52b6f48ad97f67a6d62c928ad5159964471d3b3f465077aa08dc5311f3adbc92e76d6e7a2c114cad4a09297cd150336520b100000000006ea5bc5b0001c69a1b1a65dd336bf1df6a77afb501fc25db7fc0938cb08595a9ef473265cb4f1f428ee55b7e3c0d2001000000000000000000000000000000000000000000000000002386f26fc10000165809739240a0ac03b98440fe8985548e3aa683cd0d4d9df5b5659669faa3010001000000000000000000000000c10820983f33456ce7beb3a046f5a83fa34f027d0c200000000000000000000000000000000000000000000000000000000000000000";
export const TEST_TRANSFER_VAA_2 =
  "0100000000010003319407d687b0e337905d85e6bb23ca3cb04167c49e6585e5c6f2d5da4b1d5739e865bcf38e3ae8ba5bc9c967b3477a33df0ce659e9879f488dc3ccf176fb5e0000000000166994180001c69a1b1a65dd336bf1df6a77afb501fc25db7fc0938cb08595a9ef473265cb4f0151c0cccf71c9ea200100000000000000000000000000000000000000000000000000470de4df820000165809739240a0ac03b98440fe8985548e3aa683cd0d4d9df5b5659669faa3010001000000000000000000000000701c475b19a3f68d3fdebf09591487facef2d6360c200000000000000000000000000000000000000000000000000000000000000000";
export const TEST_TRANSFER_VAA_3 =
  "01000000010100938362116fc18edca1adec84515c7a62387cff995e65d0833696f911284a539e068a3097af551683bd07c92a5d5df53f8b7b2cce10a8ccf7fe136344815d995f010000000063a9016c0001c69a1b1a65dd336bf1df6a77afb501fc25db7fc0938cb08595a9ef473265cb4fcaa15701f441c06620010000000000000000000000000000000000000000000000000027147114878000165809739240a0ac03b98440fe8985548e3aa683cd0d4d9df5b5659669faa3010001000000000000000000000000c10820983f33456ce7beb3a046f5a83fa34f027d0c200000000000000000000000000000000000000000000000000000000000000000";
export const TEST_TRANSFER_VAA_4 =
  "01000000010100cf6d0dac8dd15eb86f185bf9ebf53f7a15424b35adbc6a50c352e2b91c15a298411f79f5a7ed9989db4bf79c50d5d278182b73789dbb825d2a7e4c0a4c15d81601000000008c3bd8230001c69a1b1a65dd336bf1df6a77afb501fc25db7fc0938cb08595a9ef473265cb4f19d8398119b1418e2001000000000000000000000000000000000000000000000000004a9b6384488000165809739240a0ac03b98440fe8985548e3aa683cd0d4d9df5b5659669faa3010001000000000000000000000000701c475b19a3f68d3fdebf09591487facef2d6360c200000000000000000000000000000000000000000000000000000000000000000";

export const UPGRADE_GUARDIAN_SET_VAA =
  "0100000000010035a5da3648df687185296528e404d101f5a20f4f8915d94046e0e4243f6b443d12d5899f50a8b83fe77c9970c08f458068f7f48555b6fb11269d959d3372a7fd000000000044e2ef4d000100000000000000000000000000000000000000000000000000000000000000044604178071f1a5962000000000000000000000000000000000000000000000000000000000436f72650200000000000101a75a14f140c22d691bb0b19b4a51fae5b77f9d89";

export const TILTNET_GUARDIAN_PUBKEY = "vvpCnVfNGLf4pNkaLamrSvBdD74=";
export const TILTNET_GUARDIAN_PRIVATE_KEY =
  "cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0"; //0x

export const VALIDATOR2_TENDERMINT_KEY =
  "Zcujkt1sXRWWLfhgxLAm/Q+ioLn4wFim0OnGPLlCG0I=";
