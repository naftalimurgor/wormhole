var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
//@ts-nocheck
/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Config } from "../tokenbridge/config";
import { ReplayProtection } from "../tokenbridge/replay_protection";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { ChainRegistration } from "../tokenbridge/chain_registration";
import { CoinMetaRollbackProtection } from "../tokenbridge/coin_meta_rollback_protection";
export var protobufPackage = "certusone.wormholechain.tokenbridge";
var baseQueryGetConfigRequest = {};
export var QueryGetConfigRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetConfigRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseQueryGetConfigRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseQueryGetConfigRequest);
        return message;
    },
};
var baseQueryGetConfigResponse = {};
export var QueryGetConfigResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.Config !== undefined) {
            Config.encode(message.Config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetConfigResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Config = Config.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetConfigResponse);
        if (object.Config !== undefined && object.Config !== null) {
            message.Config = Config.fromJSON(object.Config);
        }
        else {
            message.Config = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.Config !== undefined &&
            (obj.Config = message.Config ? Config.toJSON(message.Config) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetConfigResponse);
        if (object.Config !== undefined && object.Config !== null) {
            message.Config = Config.fromPartial(object.Config);
        }
        else {
            message.Config = undefined;
        }
        return message;
    },
};
var baseQueryGetReplayProtectionRequest = { index: "" };
export var QueryGetReplayProtectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetReplayProtectionRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetReplayProtectionRequest);
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetReplayProtectionRequest);
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
var baseQueryGetReplayProtectionResponse = {};
export var QueryGetReplayProtectionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.replayProtection !== undefined) {
            ReplayProtection.encode(message.replayProtection, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetReplayProtectionResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replayProtection = ReplayProtection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetReplayProtectionResponse);
        if (object.replayProtection !== undefined &&
            object.replayProtection !== null) {
            message.replayProtection = ReplayProtection.fromJSON(object.replayProtection);
        }
        else {
            message.replayProtection = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.replayProtection !== undefined &&
            (obj.replayProtection = message.replayProtection
                ? ReplayProtection.toJSON(message.replayProtection)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetReplayProtectionResponse);
        if (object.replayProtection !== undefined &&
            object.replayProtection !== null) {
            message.replayProtection = ReplayProtection.fromPartial(object.replayProtection);
        }
        else {
            message.replayProtection = undefined;
        }
        return message;
    },
};
var baseQueryAllReplayProtectionRequest = {};
export var QueryAllReplayProtectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryAllReplayProtectionRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryAllReplayProtectionRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryAllReplayProtectionRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryAllReplayProtectionResponse = {};
export var QueryAllReplayProtectionResponse = {
    encode: function (message, writer) {
        var e_1, _a;
        if (writer === void 0) { writer = Writer.create(); }
        try {
            for (var _b = __values(message.replayProtection), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                ReplayProtection.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryAllReplayProtectionResponse);
        message.replayProtection = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replayProtection.push(ReplayProtection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var e_2, _a;
        var message = __assign({}, baseQueryAllReplayProtectionResponse);
        message.replayProtection = [];
        if (object.replayProtection !== undefined &&
            object.replayProtection !== null) {
            try {
                for (var _b = __values(object.replayProtection), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.replayProtection.push(ReplayProtection.fromJSON(e));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.replayProtection) {
            obj.replayProtection = message.replayProtection.map(function (e) {
                return e ? ReplayProtection.toJSON(e) : undefined;
            });
        }
        else {
            obj.replayProtection = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var e_3, _a;
        var message = __assign({}, baseQueryAllReplayProtectionResponse);
        message.replayProtection = [];
        if (object.replayProtection !== undefined &&
            object.replayProtection !== null) {
            try {
                for (var _b = __values(object.replayProtection), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.replayProtection.push(ReplayProtection.fromPartial(e));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryGetChainRegistrationRequest = { chainID: 0 };
export var QueryGetChainRegistrationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.chainID !== 0) {
            writer.uint32(8).uint32(message.chainID);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetChainRegistrationRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetChainRegistrationRequest);
        if (object.chainID !== undefined && object.chainID !== null) {
            message.chainID = Number(object.chainID);
        }
        else {
            message.chainID = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.chainID !== undefined && (obj.chainID = message.chainID);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetChainRegistrationRequest);
        if (object.chainID !== undefined && object.chainID !== null) {
            message.chainID = object.chainID;
        }
        else {
            message.chainID = 0;
        }
        return message;
    },
};
var baseQueryGetChainRegistrationResponse = {};
export var QueryGetChainRegistrationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.chainRegistration !== undefined) {
            ChainRegistration.encode(message.chainRegistration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetChainRegistrationResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainRegistration = ChainRegistration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetChainRegistrationResponse);
        if (object.chainRegistration !== undefined &&
            object.chainRegistration !== null) {
            message.chainRegistration = ChainRegistration.fromJSON(object.chainRegistration);
        }
        else {
            message.chainRegistration = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.chainRegistration !== undefined &&
            (obj.chainRegistration = message.chainRegistration
                ? ChainRegistration.toJSON(message.chainRegistration)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetChainRegistrationResponse);
        if (object.chainRegistration !== undefined &&
            object.chainRegistration !== null) {
            message.chainRegistration = ChainRegistration.fromPartial(object.chainRegistration);
        }
        else {
            message.chainRegistration = undefined;
        }
        return message;
    },
};
var baseQueryAllChainRegistrationRequest = {};
export var QueryAllChainRegistrationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryAllChainRegistrationRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryAllChainRegistrationRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryAllChainRegistrationRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryAllChainRegistrationResponse = {};
export var QueryAllChainRegistrationResponse = {
    encode: function (message, writer) {
        var e_4, _a;
        if (writer === void 0) { writer = Writer.create(); }
        try {
            for (var _b = __values(message.chainRegistration), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                ChainRegistration.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryAllChainRegistrationResponse);
        message.chainRegistration = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainRegistration.push(ChainRegistration.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var e_5, _a;
        var message = __assign({}, baseQueryAllChainRegistrationResponse);
        message.chainRegistration = [];
        if (object.chainRegistration !== undefined &&
            object.chainRegistration !== null) {
            try {
                for (var _b = __values(object.chainRegistration), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.chainRegistration.push(ChainRegistration.fromJSON(e));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.chainRegistration) {
            obj.chainRegistration = message.chainRegistration.map(function (e) {
                return e ? ChainRegistration.toJSON(e) : undefined;
            });
        }
        else {
            obj.chainRegistration = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var e_6, _a;
        var message = __assign({}, baseQueryAllChainRegistrationResponse);
        message.chainRegistration = [];
        if (object.chainRegistration !== undefined &&
            object.chainRegistration !== null) {
            try {
                for (var _b = __values(object.chainRegistration), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.chainRegistration.push(ChainRegistration.fromPartial(e));
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryGetCoinMetaRollbackProtectionRequest = { index: "" };
export var QueryGetCoinMetaRollbackProtectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetCoinMetaRollbackProtectionRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetCoinMetaRollbackProtectionRequest);
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetCoinMetaRollbackProtectionRequest);
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
var baseQueryGetCoinMetaRollbackProtectionResponse = {};
export var QueryGetCoinMetaRollbackProtectionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.coinMetaRollbackProtection !== undefined) {
            CoinMetaRollbackProtection.encode(message.coinMetaRollbackProtection, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryGetCoinMetaRollbackProtectionResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coinMetaRollbackProtection = CoinMetaRollbackProtection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryGetCoinMetaRollbackProtectionResponse);
        if (object.coinMetaRollbackProtection !== undefined &&
            object.coinMetaRollbackProtection !== null) {
            message.coinMetaRollbackProtection = CoinMetaRollbackProtection.fromJSON(object.coinMetaRollbackProtection);
        }
        else {
            message.coinMetaRollbackProtection = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.coinMetaRollbackProtection !== undefined &&
            (obj.coinMetaRollbackProtection = message.coinMetaRollbackProtection
                ? CoinMetaRollbackProtection.toJSON(message.coinMetaRollbackProtection)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryGetCoinMetaRollbackProtectionResponse);
        if (object.coinMetaRollbackProtection !== undefined &&
            object.coinMetaRollbackProtection !== null) {
            message.coinMetaRollbackProtection = CoinMetaRollbackProtection.fromPartial(object.coinMetaRollbackProtection);
        }
        else {
            message.coinMetaRollbackProtection = undefined;
        }
        return message;
    },
};
var baseQueryAllCoinMetaRollbackProtectionRequest = {};
export var QueryAllCoinMetaRollbackProtectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = Writer.create(); }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryAllCoinMetaRollbackProtectionRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryAllCoinMetaRollbackProtectionRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryAllCoinMetaRollbackProtectionRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryAllCoinMetaRollbackProtectionResponse = {};
export var QueryAllCoinMetaRollbackProtectionResponse = {
    encode: function (message, writer) {
        var e_7, _a;
        if (writer === void 0) { writer = Writer.create(); }
        try {
            for (var _b = __values(message.coinMetaRollbackProtection), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                CoinMetaRollbackProtection.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryAllCoinMetaRollbackProtectionResponse);
        message.coinMetaRollbackProtection = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coinMetaRollbackProtection.push(CoinMetaRollbackProtection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var e_8, _a;
        var message = __assign({}, baseQueryAllCoinMetaRollbackProtectionResponse);
        message.coinMetaRollbackProtection = [];
        if (object.coinMetaRollbackProtection !== undefined &&
            object.coinMetaRollbackProtection !== null) {
            try {
                for (var _b = __values(object.coinMetaRollbackProtection), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.coinMetaRollbackProtection.push(CoinMetaRollbackProtection.fromJSON(e));
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.coinMetaRollbackProtection) {
            obj.coinMetaRollbackProtection = message.coinMetaRollbackProtection.map(function (e) { return (e ? CoinMetaRollbackProtection.toJSON(e) : undefined); });
        }
        else {
            obj.coinMetaRollbackProtection = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var e_9, _a;
        var message = __assign({}, baseQueryAllCoinMetaRollbackProtectionResponse);
        message.coinMetaRollbackProtection = [];
        if (object.coinMetaRollbackProtection !== undefined &&
            object.coinMetaRollbackProtection !== null) {
            try {
                for (var _b = __values(object.coinMetaRollbackProtection), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.coinMetaRollbackProtection.push(CoinMetaRollbackProtection.fromPartial(e));
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
    }
    QueryClientImpl.prototype.Config = function (request) {
        var data = QueryGetConfigRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "Config", data);
        return promise.then(function (data) {
            return QueryGetConfigResponse.decode(new Reader(data));
        });
    };
    QueryClientImpl.prototype.ReplayProtection = function (request) {
        var data = QueryGetReplayProtectionRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "ReplayProtection", data);
        return promise.then(function (data) {
            return QueryGetReplayProtectionResponse.decode(new Reader(data));
        });
    };
    QueryClientImpl.prototype.ReplayProtectionAll = function (request) {
        var data = QueryAllReplayProtectionRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "ReplayProtectionAll", data);
        return promise.then(function (data) {
            return QueryAllReplayProtectionResponse.decode(new Reader(data));
        });
    };
    QueryClientImpl.prototype.ChainRegistration = function (request) {
        var data = QueryGetChainRegistrationRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "ChainRegistration", data);
        return promise.then(function (data) {
            return QueryGetChainRegistrationResponse.decode(new Reader(data));
        });
    };
    QueryClientImpl.prototype.ChainRegistrationAll = function (request) {
        var data = QueryAllChainRegistrationRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "ChainRegistrationAll", data);
        return promise.then(function (data) {
            return QueryAllChainRegistrationResponse.decode(new Reader(data));
        });
    };
    QueryClientImpl.prototype.CoinMetaRollbackProtection = function (request) {
        var data = QueryGetCoinMetaRollbackProtectionRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "CoinMetaRollbackProtection", data);
        return promise.then(function (data) {
            return QueryGetCoinMetaRollbackProtectionResponse.decode(new Reader(data));
        });
    };
    QueryClientImpl.prototype.CoinMetaRollbackProtectionAll = function (request) {
        var data = QueryAllCoinMetaRollbackProtectionRequest.encode(request).finish();
        var promise = this.rpc.request("certusone.wormholechain.tokenbridge.Query", "CoinMetaRollbackProtectionAll", data);
        return promise.then(function (data) {
            return QueryAllCoinMetaRollbackProtectionResponse.decode(new Reader(data));
        });
    };
    return QueryClientImpl;
}());
export { QueryClientImpl };