"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgTransferResponse = exports.MsgTransfer = exports.MsgAttestTokenResponse = exports.MsgAttestToken = exports.MsgExecuteVAAResponse = exports.MsgExecuteVAA = exports.MsgExecuteGovernanceVAAResponse = exports.MsgExecuteGovernanceVAA = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../cosmos/base/v1beta1/coin");
exports.protobufPackage = "certusone.wormholechain.tokenbridge";
const baseMsgExecuteGovernanceVAA = { creator: "" };
exports.MsgExecuteGovernanceVAA = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.vaa.length !== 0) {
            writer.uint32(18).bytes(message.vaa);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExecuteGovernanceVAA,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.vaa = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgExecuteGovernanceVAA,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.vaa !== undefined && object.vaa !== null) {
            message.vaa = bytesFromBase64(object.vaa);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.vaa !== undefined &&
            (obj.vaa = base64FromBytes(message.vaa !== undefined ? message.vaa : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgExecuteGovernanceVAA,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.vaa !== undefined && object.vaa !== null) {
            message.vaa = object.vaa;
        }
        else {
            message.vaa = new Uint8Array();
        }
        return message;
    },
};
const baseMsgExecuteGovernanceVAAResponse = {};
exports.MsgExecuteGovernanceVAAResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExecuteGovernanceVAAResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgExecuteGovernanceVAAResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgExecuteGovernanceVAAResponse,
        };
        return message;
    },
};
const baseMsgExecuteVAA = { creator: "" };
exports.MsgExecuteVAA = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.vaa.length !== 0) {
            writer.uint32(18).bytes(message.vaa);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExecuteVAA };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.vaa = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgExecuteVAA };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.vaa !== undefined && object.vaa !== null) {
            message.vaa = bytesFromBase64(object.vaa);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.vaa !== undefined &&
            (obj.vaa = base64FromBytes(message.vaa !== undefined ? message.vaa : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExecuteVAA };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.vaa !== undefined && object.vaa !== null) {
            message.vaa = object.vaa;
        }
        else {
            message.vaa = new Uint8Array();
        }
        return message;
    },
};
const baseMsgExecuteVAAResponse = {};
exports.MsgExecuteVAAResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExecuteVAAResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgExecuteVAAResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgExecuteVAAResponse };
        return message;
    },
};
const baseMsgAttestToken = { creator: "", denom: "" };
exports.MsgAttestToken = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAttestToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAttestToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAttestToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseMsgAttestTokenResponse = {};
exports.MsgAttestTokenResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAttestTokenResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgAttestTokenResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAttestTokenResponse };
        return message;
    },
};
const baseMsgTransfer = { creator: "", toChain: 0, fee: "" };
exports.MsgTransfer = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.toChain !== 0) {
            writer.uint32(24).uint32(message.toChain);
        }
        if (message.toAddress.length !== 0) {
            writer.uint32(34).bytes(message.toAddress);
        }
        if (message.fee !== "") {
            writer.uint32(42).string(message.fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransfer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.toChain = reader.uint32();
                    break;
                case 4:
                    message.toAddress = reader.bytes();
                    break;
                case 5:
                    message.fee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgTransfer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.toChain !== undefined && object.toChain !== null) {
            message.toChain = Number(object.toChain);
        }
        else {
            message.toChain = 0;
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = bytesFromBase64(object.toAddress);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.toChain !== undefined && (obj.toChain = message.toChain);
        message.toAddress !== undefined &&
            (obj.toAddress = base64FromBytes(message.toAddress !== undefined ? message.toAddress : new Uint8Array()));
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgTransfer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.toChain !== undefined && object.toChain !== null) {
            message.toChain = object.toChain;
        }
        else {
            message.toChain = 0;
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = object.toAddress;
        }
        else {
            message.toAddress = new Uint8Array();
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = "";
        }
        return message;
    },
};
const baseMsgTransferResponse = {};
exports.MsgTransferResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransferResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgTransferResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgTransferResponse };
        return message;
    },
};
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    ExecuteGovernanceVAA(request) {
        const data = exports.MsgExecuteGovernanceVAA.encode(request).finish();
        const promise = this.rpc.request("certusone.wormholechain.tokenbridge.Msg", "ExecuteGovernanceVAA", data);
        return promise.then((data) => exports.MsgExecuteGovernanceVAAResponse.decode(new minimal_1.Reader(data)));
    }
    ExecuteVAA(request) {
        const data = exports.MsgExecuteVAA.encode(request).finish();
        const promise = this.rpc.request("certusone.wormholechain.tokenbridge.Msg", "ExecuteVAA", data);
        return promise.then((data) => exports.MsgExecuteVAAResponse.decode(new minimal_1.Reader(data)));
    }
    AttestToken(request) {
        const data = exports.MsgAttestToken.encode(request).finish();
        const promise = this.rpc.request("certusone.wormholechain.tokenbridge.Msg", "AttestToken", data);
        return promise.then((data) => exports.MsgAttestTokenResponse.decode(new minimal_1.Reader(data)));
    }
    Transfer(request) {
        const data = exports.MsgTransfer.encode(request).finish();
        const promise = this.rpc.request("certusone.wormholechain.tokenbridge.Msg", "Transfer", data);
        return promise.then((data) => exports.MsgTransferResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
