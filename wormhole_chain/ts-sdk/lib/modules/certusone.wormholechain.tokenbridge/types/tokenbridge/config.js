"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "certusone.wormholechain.tokenbridge";
const baseConfig = {};
exports.Config = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfig };
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
        const message = { ...baseConfig };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseConfig };
        return message;
    },
};
