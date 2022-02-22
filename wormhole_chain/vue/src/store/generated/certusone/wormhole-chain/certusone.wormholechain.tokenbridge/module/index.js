// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExecuteGovernanceVAA } from "./types/tokenbridge/tx";
import { MsgAttestToken } from "./types/tokenbridge/tx";
import { MsgTransfer } from "./types/tokenbridge/tx";
import { MsgExecuteVAA } from "./types/tokenbridge/tx";
const types = [
    ["/certusone.wormholechain.tokenbridge.MsgExecuteGovernanceVAA", MsgExecuteGovernanceVAA],
    ["/certusone.wormholechain.tokenbridge.MsgAttestToken", MsgAttestToken],
    ["/certusone.wormholechain.tokenbridge.MsgTransfer", MsgTransfer],
    ["/certusone.wormholechain.tokenbridge.MsgExecuteVAA", MsgExecuteVAA],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgExecuteGovernanceVAA: (data) => ({ typeUrl: "/certusone.wormholechain.tokenbridge.MsgExecuteGovernanceVAA", value: MsgExecuteGovernanceVAA.fromPartial(data) }),
        msgAttestToken: (data) => ({ typeUrl: "/certusone.wormholechain.tokenbridge.MsgAttestToken", value: MsgAttestToken.fromPartial(data) }),
        msgTransfer: (data) => ({ typeUrl: "/certusone.wormholechain.tokenbridge.MsgTransfer", value: MsgTransfer.fromPartial(data) }),
        msgExecuteVAA: (data) => ({ typeUrl: "/certusone.wormholechain.tokenbridge.MsgExecuteVAA", value: MsgExecuteVAA.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
