"use strict";(self.webpackChunktest_ui=self.webpackChunktest_ui||[]).push([[348],{38348:function(e,n,r){var t,_={};_.__wbindgen_placeholder__=e.exports;var o,i=r(94498),a=i.TextDecoder,c=i.TextEncoder,l=new a("utf-8",{ignoreBOM:!0,fatal:!0});function u(){return 0===o.byteLength&&(o=new Uint8Array(t.memory.buffer)),o}function s(e,n){return l.decode(u().subarray(e,e+n))}l.decode();var d=new Array(32).fill(void 0);d.push(void 0,null,!0,!1);var f=d.length;function g(e){f===d.length&&d.push(d.length+1);var n=f;return f=d[n],d[n]=e,n}function p(e){return d[e]}function b(e){var n=p(e);return function(e){e<36||(d[e]=f,f=e)}(e),n}var w,h,y=0,v=new c("utf-8"),m="function"===typeof v.encodeInto?function(e,n){return v.encodeInto(e,n)}:function(e,n){var r=v.encode(e);return n.set(r),{read:e.length,written:r.length}};function x(e,n,r){if(void 0===r){var t=v.encode(e),_=n(t.length);return u().subarray(_,_+t.length).set(t),y=t.length,_}for(var o=e.length,i=n(o),a=u(),c=0;c<o;c++){var l=e.charCodeAt(c);if(l>127)break;a[i+c]=l}if(c!==o){0!==c&&(e=e.slice(c)),i=r(i,o,o=c+3*e.length);var s=u().subarray(i+c,i+o);c+=m(e,s).written}return y=c,i}function A(e){return void 0===e||null===e}function k(){return 0===w.byteLength&&(w=new Int32Array(t.memory.buffer)),w}function C(e){var n=typeof e;if("number"==n||"boolean"==n||null==e)return""+e;if("string"==n)return'"'+e+'"';if("symbol"==n){var r=e.description;return null==r?"Symbol":"Symbol("+r+")"}if("function"==n){var t=e.name;return"string"==typeof t&&t.length>0?"Function("+t+")":"Function"}if(Array.isArray(e)){var _=e.length,o="[";_>0&&(o+=C(e[0]));for(var i=1;i<_;i++)o+=", "+C(e[i]);return o+="]"}var a,c=/\[object ([^\]]+)\]/.exec(toString.call(e));if(!(c.length>1))return toString.call(e);if("Object"==(a=c[1]))try{return"Object("+JSON.stringify(e)+")"}catch(l){return"Object"}return e instanceof Error?e.name+": "+e.message+"\n"+e.stack:a}var S,j=new Uint32Array(2),O=new BigUint64Array(j.buffer);function W(e,n){return u().subarray(e/1,e/1+n)}function N(e,n){if(!(e instanceof n))throw new Error("expected instance of "+n.name);return e.ptr}function I(e,n){for(var r=n(4*e.length),_=(0===S.byteLength&&(S=new Uint32Array(t.memory.buffer)),S),o=0;o<e.length;o++)_[r/4+o]=g(e[o]);return y=e.length,r}function U(e,n){try{return e.apply(this,n)}catch(r){t.__wbindgen_exn_store(g(r))}}e.exports.add_liquidity=function(e,n,r,_,o,i){var a=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y,l=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),u=y,s=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),d=y,f=x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=y,p=x(o,t.__wbindgen_malloc,t.__wbindgen_realloc),w=y;O[0]=i;var h=j[0],v=j[1];return b(t.add_liquidity(a,c,l,u,s,d,f,g,p,w,h,v))},e.exports.remove_liquidity=function(e,n,r,_,o,i){var a=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y,l=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),u=y,s=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),d=y,f=x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=y,p=x(o,t.__wbindgen_malloc,t.__wbindgen_realloc),w=y;O[0]=i;var h=j[0],v=j[1];return b(t.remove_liquidity(a,c,l,u,s,d,f,g,p,w,h,v))},e.exports.claim_shares=function(e,n,r,_,o,i){var a=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y,l=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),u=y,s=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),d=y,f=x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=y,p=x(o,t.__wbindgen_malloc,t.__wbindgen_realloc),w=y;O[0]=i;var h=j[0],v=j[1];return b(t.claim_shares(a,c,l,u,s,d,f,g,p,w,h,v))},e.exports.create_pool=function(e,n,r,_){var o=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=y,a=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y,l=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),u=y,s=x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),d=y;return b(t.create_pool(o,i,a,c,l,u,s,d))},e.exports.migrate_tokens=function(e,n,r,_,o,i){var a=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y,l=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),u=y,s=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),d=y,f=x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),g=y,p=x(o,t.__wbindgen_malloc,t.__wbindgen_realloc),w=y;O[0]=i;var h=j[0],v=j[1];return b(t.migrate_tokens(a,c,l,u,s,d,f,g,p,w,h,v))},e.exports.pool_address=function(e,n,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=y,a=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y,l=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),u=y;t.pool_address(_,o,i,a,c,l,u);var s=k()[_/4+0],d=k()[_/4+1],f=W(s,d).slice();return t.__wbindgen_free(s,1*d),f}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.authority_address=function(e){try{var n=t.__wbindgen_add_to_stack_pointer(-16),r=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),_=y;t.authority_address(n,r,_);var o=k()[n/4+0],i=k()[n/4+1],a=W(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.share_mint_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=y,i=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=y;t.share_mint_address(r,_,o,i,a);var c=k()[r/4+0],l=k()[r/4+1],u=W(c,l).slice();return t.__wbindgen_free(c,1*l),u}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.from_custody_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=y,i=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=y;t.from_custody_address(r,_,o,i,a);var c=k()[r/4+0],l=k()[r/4+1],u=W(c,l).slice();return t.__wbindgen_free(c,1*l),u}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.to_custody_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=x(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=y,i=x(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=y;t.to_custody_address(r,_,o,i,a);var c=k()[r/4+0],l=k()[r/4+1],u=W(c,l).slice();return t.__wbindgen_free(c,1*l),u}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.parse_pool=function(e){var n=function(e,n){var r=n(1*e.length);return u().set(e,r/1),y=e.length,r}(e,t.__wbindgen_malloc),r=y;return b(t.parse_pool(n,r))},e.exports.init=function(){t.init()};var q=function(){function e(n){try{var r=t.__wbindgen_add_to_stack_pointer(-16);t.hash_constructor(r,g(n));var _=k()[r/4+0],o=k()[r/4+1];if(k()[r/4+2])throw b(o);return e.__wrap(_)}finally{t.__wbindgen_add_to_stack_pointer(16)}}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_hash_free(e)},e.prototype.toString=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toString(e,this.ptr);var n=k()[e/4+0],r=k()[e/4+1];return s(n,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(n,r)}},e.prototype.equals=function(n){return N(n,e),0!==t.hash_equals(this.ptr,n.ptr)},e.prototype.toBytes=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toBytes(e,this.ptr);var n=k()[e/4+0],r=k()[e/4+1],_=W(n,r).slice();return t.__wbindgen_free(n,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},e}();e.exports.Hash=q;var E=function(){function e(){}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_instruction_free(e)},e}();e.exports.Instruction=E;var P=function(){function e(){var n=t.instructions_constructor();return e.__wrap(n)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_instructions_free(e)},e.prototype.push=function(e){N(e,E);var n=e.ptr;e.ptr=0,t.instructions_push(this.ptr,n)},e}();e.exports.Instructions=P;var B=function(){function e(){}return e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_message_free(e)},Object.defineProperty(e.prototype,"recent_blockhash",{get:function(){var e=t.__wbg_get_message_recent_blockhash(this.ptr);return q.__wrap(e)},set:function(e){N(e,q);var n=e.ptr;e.ptr=0,t.__wbg_set_message_recent_blockhash(this.ptr,n)},enumerable:!1,configurable:!0}),e}();e.exports.Message=B;var T=function(){function e(n){try{var r=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_constructor(r,g(n));var _=k()[r/4+0],o=k()[r/4+1];if(k()[r/4+2])throw b(o);return e.__wrap(_)}finally{t.__wbindgen_add_to_stack_pointer(16)}}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_pubkey_free(e)},e.prototype.toString=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toString(e,this.ptr);var n=k()[e/4+0],r=k()[e/4+1];return s(n,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(n,r)}},e.prototype.isOnCurve=function(){return 0!==t.pubkey_isOnCurve(this.ptr)},e.prototype.equals=function(n){return N(n,e),0!==t.pubkey_equals(this.ptr,n.ptr)},e.prototype.toBytes=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toBytes(e,this.ptr);var n=k()[e/4+0],r=k()[e/4+1],_=W(n,r).slice();return t.__wbindgen_free(n,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.createWithSeed=function(n,r,_){try{var o=t.__wbindgen_add_to_stack_pointer(-16);N(n,e);var i=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=y;N(_,e),t.pubkey_createWithSeed(o,n.ptr,i,a,_.ptr);var c=k()[o/4+0],l=k()[o/4+1];if(k()[o/4+2])throw b(l);return e.__wrap(c)}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.createProgramAddress=function(n,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=I(n,t.__wbindgen_malloc),i=y;N(r,e),t.pubkey_createProgramAddress(_,o,i,r.ptr);var a=k()[_/4+0],c=k()[_/4+1];if(k()[_/4+2])throw b(c);return e.__wrap(a)}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.findProgramAddress=function(n,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=I(n,t.__wbindgen_malloc),i=y;N(r,e),t.pubkey_findProgramAddress(_,o,i,r.ptr);var a=k()[_/4+0],c=k()[_/4+1];if(k()[_/4+2])throw b(c);return b(a)}finally{t.__wbindgen_add_to_stack_pointer(16)}},e}();e.exports.Pubkey=T;var F=function(){function e(){}return e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_systeminstruction_free(e)},e.createAccount=function(e,n,r,_,o){N(e,T),N(n,T),O[0]=r;var i=j[0],a=j[1];O[0]=_;var c=j[0],l=j[1];N(o,T);var u=t.systeminstruction_createAccount(e.ptr,n.ptr,i,a,c,l,o.ptr);return E.__wrap(u)},e.createAccountWithSeed=function(e,n,r,_,o,i,a){N(e,T),N(n,T),N(r,T);var c=x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),l=y;O[0]=o;var u=j[0],s=j[1];O[0]=i;var d=j[0],f=j[1];N(a,T);var g=t.systeminstruction_createAccountWithSeed(e.ptr,n.ptr,r.ptr,c,l,u,s,d,f,a.ptr);return E.__wrap(g)},e.assign=function(e,n){N(e,T),N(n,T);var r=t.systeminstruction_assign(e.ptr,n.ptr);return E.__wrap(r)},e.assignWithSeed=function(e,n,r,_){N(e,T),N(n,T);var o=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),i=y;N(_,T);var a=t.systeminstruction_assignWithSeed(e.ptr,n.ptr,o,i,_.ptr);return E.__wrap(a)},e.transfer=function(e,n,r){N(e,T),N(n,T),O[0]=r;var _=j[0],o=j[1],i=t.systeminstruction_transfer(e.ptr,n.ptr,_,o);return E.__wrap(i)},e.transferWithSeed=function(e,n,r,_,o,i){N(e,T),N(n,T);var a=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),c=y;N(_,T),N(o,T),O[0]=i;var l=j[0],u=j[1],s=t.systeminstruction_transferWithSeed(e.ptr,n.ptr,a,c,_.ptr,o.ptr,l,u);return E.__wrap(s)},e.allocate=function(e,n){N(e,T),O[0]=n;var r=j[0],_=j[1],o=t.systeminstruction_allocate(e.ptr,r,_);return E.__wrap(o)},e.allocateWithSeed=function(e,n,r,_,o){N(e,T),N(n,T);var i=x(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=y;O[0]=_;var c=j[0],l=j[1];N(o,T);var u=t.systeminstruction_allocateWithSeed(e.ptr,n.ptr,i,a,c,l,o.ptr);return E.__wrap(u)},e.createNonceAccount=function(e,n,r,_){N(e,T),N(n,T),N(r,T),O[0]=_;var o=j[0],i=j[1];return b(t.systeminstruction_createNonceAccount(e.ptr,n.ptr,r.ptr,o,i))},e.advanceNonceAccount=function(e,n){N(e,T),N(n,T);var r=t.systeminstruction_advanceNonceAccount(e.ptr,n.ptr);return E.__wrap(r)},e.withdrawNonceAccount=function(e,n,r,_){N(e,T),N(n,T),N(r,T),O[0]=_;var o=j[0],i=j[1],a=t.systeminstruction_withdrawNonceAccount(e.ptr,n.ptr,r.ptr,o,i);return E.__wrap(a)},e.authorizeNonceAccount=function(e,n,r){N(e,T),N(n,T),N(r,T);var _=t.systeminstruction_authorizeNonceAccount(e.ptr,n.ptr,r.ptr);return E.__wrap(_)},e}();e.exports.SystemInstruction=F,e.exports.__wbindgen_json_parse=function(e,n){return g(JSON.parse(s(e,n)))},e.exports.__wbg_instruction_new=function(e){return g(E.__wrap(e))},e.exports.__wbindgen_object_drop_ref=function(e){b(e)},e.exports.__wbindgen_string_new=function(e,n){return g(s(e,n))},e.exports.__wbg_pubkey_new=function(e){return g(T.__wrap(e))},e.exports.__wbindgen_string_get=function(e,n){var r=p(n),_="string"===typeof r?r:void 0,o=A(_)?0:x(_,t.__wbindgen_malloc,t.__wbindgen_realloc),i=y;k()[e/4+1]=i,k()[e/4+0]=o},e.exports.__wbindgen_is_undefined=function(e){return void 0===p(e)},e.exports.__wbindgen_number_get=function(e,n){var r=p(n),_="number"===typeof r?r:void 0;(0===h.byteLength&&(h=new Float64Array(t.memory.buffer)),h)[e/8+1]=A(_)?0:_,k()[e/4+0]=!A(_)},e.exports.__wbindgen_number_new=function(e){return g(e)},e.exports.__wbg_debug_68178c61250ae699=function(e){console.debug(p(e))},e.exports.__wbg_error_e2677af4c7f31a14=function(e){console.error(p(e))},e.exports.__wbg_info_2fe3b57d78190c6d=function(e){console.info(p(e))},e.exports.__wbg_log_7761a8b8a8c1864e=function(e){console.log(p(e))},e.exports.__wbg_warn_8b29c6b80217b0e4=function(e){console.warn(p(e))},e.exports.__wbg_new_693216e109162396=function(){return g(new Error)},e.exports.__wbg_stack_0ddaca5d1abfb52f=function(e,n){var r=x(p(n).stack,t.__wbindgen_malloc,t.__wbindgen_realloc),_=y;k()[e/4+1]=_,k()[e/4+0]=r},e.exports.__wbg_error_09919627ac0992f5=function(e,n){try{console.error(s(e,n))}finally{t.__wbindgen_free(e,n)}},e.exports.__wbg_new_2ab697f1555e0dbc=function(){return g(new Array)},e.exports.__wbindgen_is_function=function(e){return"function"===typeof p(e)},e.exports.__wbindgen_is_object=function(e){var n=p(e);return"object"===typeof n&&null!==n},e.exports.__wbg_next_0e1ee6203bc0f8ed=function(e){return g(p(e).next)},e.exports.__wbg_next_9ef803116340cdc1=function(){return U((function(e){return g(p(e).next())}),arguments)},e.exports.__wbg_done_2a1e30464aae6a4d=function(e){return p(e).done},e.exports.__wbg_value_a495c29471c31da6=function(e){return g(p(e).value)},e.exports.__wbg_iterator_6ac6eb1e020f18e3=function(){return g(Symbol.iterator)},e.exports.__wbg_get_89247d3aeaa38cc5=function(){return U((function(e,n){return g(Reflect.get(p(e),p(n)))}),arguments)},e.exports.__wbg_call_4573f605ca4b5f10=function(){return U((function(e,n){return g(p(e).call(p(n)))}),arguments)},e.exports.__wbg_newwithlength_51bd08aed34ec6a3=function(e){return g(new Array(e>>>0))},e.exports.__wbg_set_c1d04f8b45a036e7=function(e,n,r){p(e)[n>>>0]=b(r)},e.exports.__wbg_isArray_628aca8c24017cde=function(e){return Array.isArray(p(e))},e.exports.__wbg_push_811c8b08bf4ff9d5=function(e,n){return p(e).push(p(n))},e.exports.__wbg_values_644ed6c9e45c1e38=function(e){return g(p(e).values())},e.exports.__wbg_buffer_de1150f91b23aa89=function(e){return g(p(e).buffer)},e.exports.__wbg_new_97cf52648830a70d=function(e){return g(new Uint8Array(p(e)))},e.exports.__wbg_set_a0172b213e2469e9=function(e,n,r){p(e).set(p(n),r>>>0)},e.exports.__wbg_length_e09c0b925ab8de5d=function(e){return p(e).length},e.exports.__wbg_instanceof_Uint8Array_fd17ec67c77de602=function(e){return p(e)instanceof Uint8Array},e.exports.__wbindgen_debug_string=function(e,n){var r=x(C(p(n)),t.__wbindgen_malloc,t.__wbindgen_realloc),_=y;k()[e/4+1]=_,k()[e/4+0]=r},e.exports.__wbindgen_throw=function(e,n){throw new Error(s(e,n))},e.exports.__wbindgen_memory=function(){return g(t.memory)};var L=r(53774).join("/","wormhole_migration_bg.wasm"),z=r(99474).readFileSync(L),J=new WebAssembly.Module(z),M=new WebAssembly.Instance(J,_);t=M.exports,e.exports.__wasm=t,h=new Float64Array(t.memory.buffer),w=new Int32Array(t.memory.buffer),S=new Uint32Array(t.memory.buffer),o=new Uint8Array(t.memory.buffer)},53774:function(e,n,r){var t=r(54501);function _(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,n){for(var r,t="",_=0,o=-1,i=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===i);else if(o!==a-1&&2===i){if(t.length<2||2!==_||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){-1===c?(t="",_=0):_=(t=t.slice(0,c)).length-1-t.lastIndexOf("/"),o=a,i=0;continue}}else if(2===t.length||1===t.length){t="",_=0,o=a,i=0;continue}n&&(t.length>0?t+="/..":t="..",_=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),_=a-o-1;o=a,i=0}else 46===r&&-1!==i?++i:i=-1}return t}var i={resolve:function(){for(var e,n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a;i>=0?a=arguments[i]:(void 0===e&&(e=t.cwd()),a=e),_(a),0!==a.length&&(n=a+"/"+n,r=47===a.charCodeAt(0))}return n=o(n,!r),r?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(_(e),0===e.length)return".";var n=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=o(e,!n)).length||n||(e="."),e.length>0&&r&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return _(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var r=arguments[n];_(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,n){if(_(e),_(n),e===n)return"";if((e=i.resolve(e))===(n=i.resolve(n)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var t=e.length,o=t-r,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var c=n.length-a,l=o<c?o:c,u=-1,s=0;s<=l;++s){if(s===l){if(c>l){if(47===n.charCodeAt(a+s))return n.slice(a+s+1);if(0===s)return n.slice(a+s)}else o>l&&(47===e.charCodeAt(r+s)?u=s:0===s&&(u=0));break}var d=e.charCodeAt(r+s);if(d!==n.charCodeAt(a+s))break;47===d&&(u=s)}var f="";for(s=r+u+1;s<=t;++s)s!==t&&47!==e.charCodeAt(s)||(0===f.length?f+="..":f+="/..");return f.length>0?f+n.slice(a+u):(a+=u,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(_(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,t=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(n=e.charCodeAt(i))){if(!o){t=i;break}}else o=!1;return-1===t?r?"/":".":r&&1===t?"//":e.slice(0,t)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');_(e);var r,t=0,o=-1,i=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47===l){if(!i){t=r+1;break}}else-1===c&&(i=!1,c=r+1),a>=0&&(l===n.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=c))}return t===o?o=c:-1===o&&(o=e.length),e.slice(t,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!i){t=r+1;break}}else-1===o&&(i=!1,o=r+1);return-1===o?"":e.slice(t,o)},extname:function(e){_(e);for(var n=-1,r=0,t=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===t&&(o=!1,t=a+1),46===c?-1===n?n=a:1!==i&&(i=1):-1!==n&&(i=-1);else if(!o){r=a+1;break}}return-1===n||-1===t||0===i||1===i&&n===t-1&&n===r+1?"":e.slice(n,t)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,n){var r=n.dir||n.root,t=n.base||(n.name||"")+(n.ext||"");return r?r===n.root?r+t:r+e+t:t}("/",e)},parse:function(e){_(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,t=e.charCodeAt(0),o=47===t;o?(n.root="/",r=1):r=0;for(var i=-1,a=0,c=-1,l=!0,u=e.length-1,s=0;u>=r;--u)if(47!==(t=e.charCodeAt(u)))-1===c&&(l=!1,c=u+1),46===t?-1===i?i=u:1!==s&&(s=1):-1!==i&&(s=-1);else if(!l){a=u+1;break}return-1===i||-1===c||0===s||1===s&&i===c-1&&i===a+1?-1!==c&&(n.base=n.name=0===a&&o?e.slice(1,c):e.slice(a,c)):(0===a&&o?(n.name=e.slice(1,i),n.base=e.slice(1,c)):(n.name=e.slice(a,i),n.base=e.slice(a,c)),n.ext=e.slice(i,c)),a>0?n.dir=e.slice(0,a-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}}]);
//# sourceMappingURL=348.e223c00b.chunk.js.map