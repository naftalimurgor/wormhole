"use strict";(self.webpackChunktest_ui=self.webpackChunktest_ui||[]).push([[127],{77127:function(n,e,r){var t,_={};_.__wbindgen_placeholder__=n.exports;var o=r(94498),i=o.TextDecoder,a=o.TextEncoder,c=new i("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var l=null;function u(){return null!==l&&l.buffer===t.memory.buffer||(l=new Uint8Array(t.memory.buffer)),l}function s(n,e){return c.decode(u().subarray(n,n+e))}var d=new Array(32).fill(void 0);d.push(void 0,null,!0,!1);var f=d.length;function p(n){f===d.length&&d.push(d.length+1);var e=f;return f=d[e],d[e]=n,e}function g(n){return d[n]}function b(n){var e=g(n);return function(n){n<36||(d[n]=f,f=n)}(n),e}var w=0,h=new a("utf-8"),v="function"===typeof h.encodeInto?function(n,e){return h.encodeInto(n,e)}:function(n,e){var r=h.encode(n);return e.set(r),{read:n.length,written:r.length}};function y(n,e,r){if(void 0===r){var t=h.encode(n),_=e(t.length);return u().subarray(_,_+t.length).set(t),w=t.length,_}for(var o=n.length,i=e(o),a=u(),c=0;c<o;c++){var l=n.charCodeAt(c);if(l>127)break;a[i+c]=l}if(c!==o){0!==c&&(n=n.slice(c)),i=r(i,o,o=c+3*n.length);var s=u().subarray(i+c,i+o);c+=v(n,s).written}return w=c,i}function m(n){return void 0===n||null===n}var x=null;function k(){return null!==x&&x.buffer===t.memory.buffer||(x=new Int32Array(t.memory.buffer)),x}var A=null;function C(n){var e=typeof n;if("number"==e||"boolean"==e||null==n)return""+n;if("string"==e)return'"'+n+'"';if("symbol"==e){var r=n.description;return null==r?"Symbol":"Symbol("+r+")"}if("function"==e){var t=n.name;return"string"==typeof t&&t.length>0?"Function("+t+")":"Function"}if(Array.isArray(n)){var _=n.length,o="[";_>0&&(o+=C(n[0]));for(var i=1;i<_;i++)o+=", "+C(n[i]);return o+="]"}var a,c=/\[object ([^\]]+)\]/.exec(toString.call(n));if(!(c.length>1))return toString.call(n);if("Object"==(a=c[1]))try{return"Object("+JSON.stringify(n)+")"}catch(l){return"Object"}return n instanceof Error?n.name+": "+n.message+"\n"+n.stack:a}n.exports.attest_ix=function(n,e,r,_,o,i){var a=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,l=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),u=w,s=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),d=w,f=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),p=w,g=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),h=w;return b(t.attest_ix(a,c,l,u,s,d,f,p,g,h,i))};var S=new Uint32Array(2),j=new BigUint64Array(S.buffer);function O(n,e){var r=e(1*n.length);return u().set(n,r/1),w=n.length,r}function W(n,e){return u().subarray(n/1,n/1+e)}function N(n,e){if(!(n instanceof e))throw new Error("expected instance of "+e.name);return n.ptr}n.exports.transfer_native_ix=function(n,e,r,_,o,i,a,c,l,u,s){var d=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w,p=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w,h=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),v=w,m=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),x=w,k=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),A=w,C=y(i,t.__wbindgen_malloc,t.__wbindgen_realloc),W=w;j[0]=c;var N=S[0],I=S[1];j[0]=l;var E=S[0],P=S[1],U=O(u,t.__wbindgen_malloc),B=w;return b(t.transfer_native_ix(d,f,p,g,h,v,m,x,k,A,C,W,a,N,I,E,P,U,B,s))},n.exports.transfer_wrapped_ix=function(n,e,r,_,o,i,a,c,l,u,s,d,f){var p=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w,h=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),v=w,m=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),x=w,k=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),A=w,C=y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),W=w,N=y(i,t.__wbindgen_malloc,t.__wbindgen_realloc),I=w,E=O(c,t.__wbindgen_malloc),P=w;j[0]=u;var U=S[0],B=S[1];j[0]=s;var T=S[0],q=S[1],z=O(d,t.__wbindgen_malloc),F=w;return b(t.transfer_wrapped_ix(p,g,h,v,m,x,k,A,C,W,N,I,a,E,P,l,U,B,T,q,z,F,f))},n.exports.complete_transfer_native_ix=function(n,e,r,_,o){var i=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w,c=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,u=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),s=w,d=O(_,t.__wbindgen_malloc),f=w,p=m(o)?0:y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w;return b(t.complete_transfer_native_ix(i,a,c,l,u,s,d,f,p,g))},n.exports.complete_transfer_wrapped_ix=function(n,e,r,_,o){var i=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w,c=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,u=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),s=w,d=O(_,t.__wbindgen_malloc),f=w,p=m(o)?0:y(o,t.__wbindgen_malloc,t.__wbindgen_realloc),g=w;return b(t.complete_transfer_wrapped_ix(i,a,c,l,u,s,d,f,p,g))},n.exports.create_wrapped_ix=function(n,e,r,_){var o=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w,a=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,l=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),u=w,s=O(_,t.__wbindgen_malloc),d=w;return b(t.create_wrapped_ix(o,i,a,c,l,u,s,d))},n.exports.upgrade_contract_ix=function(n,e,r,_,o){var i=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w,c=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w,u=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),s=w,d=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),f=w,p=O(o,t.__wbindgen_malloc),g=w;return b(t.upgrade_contract_ix(i,a,c,l,u,s,d,f,p,g))},n.exports.register_chain_ix=function(n,e,r,_){var o=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w,a=y(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w,l=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),u=w,s=O(_,t.__wbindgen_malloc),d=w;return b(t.register_chain_ix(o,i,a,c,l,u,s,d))},n.exports.emitter_address=function(n){try{var e=t.__wbindgen_add_to_stack_pointer(-16),r=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;t.emitter_address(e,r,_);var o=k()[e/4+0],i=k()[e/4+1],a=W(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.exports.custody_signer=function(n){try{var e=t.__wbindgen_add_to_stack_pointer(-16),r=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;t.custody_signer(e,r,_);var o=k()[e/4+0],i=k()[e/4+1],a=W(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.exports.approval_authority_address=function(n){try{var e=t.__wbindgen_add_to_stack_pointer(-16),r=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;t.approval_authority_address(e,r,_);var o=k()[e/4+0],i=k()[e/4+1],a=W(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.exports.wrapped_address=function(n,e,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w,a=O(e,t.__wbindgen_malloc),c=w;t.wrapped_address(_,o,i,a,c,r);var l=k()[_/4+0],u=k()[_/4+1],s=W(l,u).slice();return t.__wbindgen_free(l,1*u),s}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.exports.wrapped_meta_address=function(n,e){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=y(n,t.__wbindgen_malloc,t.__wbindgen_realloc),o=w,i=O(e,t.__wbindgen_malloc),a=w;t.wrapped_meta_address(r,_,o,i,a);var c=k()[r/4+0],l=k()[r/4+1],u=W(c,l).slice();return t.__wbindgen_free(c,1*l),u}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.exports.parse_wrapped_meta=function(n){var e=O(n,t.__wbindgen_malloc),r=w;return b(t.parse_wrapped_meta(e,r))},n.exports.parse_endpoint_registration=function(n){var e=O(n,t.__wbindgen_malloc),r=w;return b(t.parse_endpoint_registration(e,r))},n.exports.init=function(){t.init()};var I=null;function E(n,e){for(var r=e(4*n.length),_=(null!==I&&I.buffer===t.memory.buffer||(I=new Uint32Array(t.memory.buffer)),I),o=0;o<n.length;o++)_[r/4+o]=p(n[o]);return w=n.length,r}function P(n,e){try{return n.apply(this,e)}catch(r){t.__wbindgen_exn_store(p(r))}}var U=function(){function n(e){try{var r=t.__wbindgen_add_to_stack_pointer(-16);t.hash_constructor(r,p(e));var _=k()[r/4+0],o=k()[r/4+1];if(k()[r/4+2])throw b(o);return n.__wrap(_)}finally{t.__wbindgen_add_to_stack_pointer(16)}}return n.__wrap=function(e){var r=Object.create(n.prototype);return r.ptr=e,r},n.prototype.__destroy_into_raw=function(){var n=this.ptr;return this.ptr=0,n},n.prototype.free=function(){var n=this.__destroy_into_raw();t.__wbg_hash_free(n)},n.prototype.toString=function(){try{var n=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toString(n,this.ptr);var e=k()[n/4+0],r=k()[n/4+1];return s(e,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(e,r)}},n.prototype.equals=function(e){return N(e,n),0!==t.hash_equals(this.ptr,e.ptr)},n.prototype.toBytes=function(){try{var n=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toBytes(n,this.ptr);var e=k()[n/4+0],r=k()[n/4+1],_=W(e,r).slice();return t.__wbindgen_free(e,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},n}();n.exports.Hash=U;var B=function(){function n(){}return n.__wrap=function(e){var r=Object.create(n.prototype);return r.ptr=e,r},n.prototype.__destroy_into_raw=function(){var n=this.ptr;return this.ptr=0,n},n.prototype.free=function(){var n=this.__destroy_into_raw();t.__wbg_instruction_free(n)},n}();n.exports.Instruction=B;var T=function(){function n(){var e=t.instructions_constructor();return n.__wrap(e)}return n.__wrap=function(e){var r=Object.create(n.prototype);return r.ptr=e,r},n.prototype.__destroy_into_raw=function(){var n=this.ptr;return this.ptr=0,n},n.prototype.free=function(){var n=this.__destroy_into_raw();t.__wbg_instructions_free(n)},n.prototype.push=function(n){N(n,B);var e=n.ptr;n.ptr=0,t.instructions_push(this.ptr,e)},n}();n.exports.Instructions=T;var q=function(){function n(){}return n.prototype.__destroy_into_raw=function(){var n=this.ptr;return this.ptr=0,n},n.prototype.free=function(){var n=this.__destroy_into_raw();t.__wbg_message_free(n)},Object.defineProperty(n.prototype,"recent_blockhash",{get:function(){var n=t.__wbg_get_message_recent_blockhash(this.ptr);return U.__wrap(n)},set:function(n){N(n,U);var e=n.ptr;n.ptr=0,t.__wbg_set_message_recent_blockhash(this.ptr,e)},enumerable:!1,configurable:!0}),n}();n.exports.Message=q;var z=function(){function n(e){try{var r=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_constructor(r,p(e));var _=k()[r/4+0],o=k()[r/4+1];if(k()[r/4+2])throw b(o);return n.__wrap(_)}finally{t.__wbindgen_add_to_stack_pointer(16)}}return n.__wrap=function(e){var r=Object.create(n.prototype);return r.ptr=e,r},n.prototype.__destroy_into_raw=function(){var n=this.ptr;return this.ptr=0,n},n.prototype.free=function(){var n=this.__destroy_into_raw();t.__wbg_pubkey_free(n)},n.prototype.toString=function(){try{var n=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toString(n,this.ptr);var e=k()[n/4+0],r=k()[n/4+1];return s(e,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(e,r)}},n.prototype.isOnCurve=function(){return 0!==t.pubkey_isOnCurve(this.ptr)},n.prototype.equals=function(e){return N(e,n),0!==t.pubkey_equals(this.ptr,e.ptr)},n.prototype.toBytes=function(){try{var n=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toBytes(n,this.ptr);var e=k()[n/4+0],r=k()[n/4+1],_=W(e,r).slice();return t.__wbindgen_free(e,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.createWithSeed=function(e,r,_){try{var o=t.__wbindgen_add_to_stack_pointer(-16);N(e,n);var i=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w;N(_,n),t.pubkey_createWithSeed(o,e.ptr,i,a,_.ptr);var c=k()[o/4+0],l=k()[o/4+1];if(k()[o/4+2])throw b(l);return n.__wrap(c)}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.createProgramAddress=function(e,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=E(e,t.__wbindgen_malloc),i=w;N(r,n),t.pubkey_createProgramAddress(_,o,i,r.ptr);var a=k()[_/4+0],c=k()[_/4+1];if(k()[_/4+2])throw b(c);return n.__wrap(a)}finally{t.__wbindgen_add_to_stack_pointer(16)}},n.findProgramAddress=function(e,r){try{var _=t.__wbindgen_add_to_stack_pointer(-16),o=E(e,t.__wbindgen_malloc),i=w;N(r,n),t.pubkey_findProgramAddress(_,o,i,r.ptr);var a=k()[_/4+0],c=k()[_/4+1];if(k()[_/4+2])throw b(c);return b(a)}finally{t.__wbindgen_add_to_stack_pointer(16)}},n}();n.exports.Pubkey=z;var F=function(){function n(){}return n.prototype.__destroy_into_raw=function(){var n=this.ptr;return this.ptr=0,n},n.prototype.free=function(){var n=this.__destroy_into_raw();t.__wbg_systeminstruction_free(n)},n.createAccount=function(n,e,r,_,o){N(n,z),N(e,z),j[0]=r;var i=S[0],a=S[1];j[0]=_;var c=S[0],l=S[1];N(o,z);var u=t.systeminstruction_createAccount(n.ptr,e.ptr,i,a,c,l,o.ptr);return B.__wrap(u)},n.createAccountWithSeed=function(n,e,r,_,o,i,a){N(n,z),N(e,z),N(r,z);var c=y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),l=w;j[0]=o;var u=S[0],s=S[1];j[0]=i;var d=S[0],f=S[1];N(a,z);var p=t.systeminstruction_createAccountWithSeed(n.ptr,e.ptr,r.ptr,c,l,u,s,d,f,a.ptr);return B.__wrap(p)},n.assign=function(n,e){N(n,z),N(e,z);var r=t.systeminstruction_assign(n.ptr,e.ptr);return B.__wrap(r)},n.assignWithSeed=function(n,e,r,_){N(n,z),N(e,z);var o=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w;N(_,z);var a=t.systeminstruction_assignWithSeed(n.ptr,e.ptr,o,i,_.ptr);return B.__wrap(a)},n.transfer=function(n,e,r){N(n,z),N(e,z),j[0]=r;var _=S[0],o=S[1],i=t.systeminstruction_transfer(n.ptr,e.ptr,_,o);return B.__wrap(i)},n.transferWithSeed=function(n,e,r,_,o,i){N(n,z),N(e,z);var a=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),c=w;N(_,z),N(o,z),j[0]=i;var l=S[0],u=S[1],s=t.systeminstruction_transferWithSeed(n.ptr,e.ptr,a,c,_.ptr,o.ptr,l,u);return B.__wrap(s)},n.allocate=function(n,e){N(n,z),j[0]=e;var r=S[0],_=S[1],o=t.systeminstruction_allocate(n.ptr,r,_);return B.__wrap(o)},n.allocateWithSeed=function(n,e,r,_,o){N(n,z),N(e,z);var i=y(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=w;j[0]=_;var c=S[0],l=S[1];N(o,z);var u=t.systeminstruction_allocateWithSeed(n.ptr,e.ptr,i,a,c,l,o.ptr);return B.__wrap(u)},n.createNonceAccount=function(n,e,r,_){N(n,z),N(e,z),N(r,z),j[0]=_;var o=S[0],i=S[1];return b(t.systeminstruction_createNonceAccount(n.ptr,e.ptr,r.ptr,o,i))},n.advanceNonceAccount=function(n,e){N(n,z),N(e,z);var r=t.systeminstruction_advanceNonceAccount(n.ptr,e.ptr);return B.__wrap(r)},n.withdrawNonceAccount=function(n,e,r,_){N(n,z),N(e,z),N(r,z),j[0]=_;var o=S[0],i=S[1],a=t.systeminstruction_withdrawNonceAccount(n.ptr,e.ptr,r.ptr,o,i);return B.__wrap(a)},n.authorizeNonceAccount=function(n,e,r){N(n,z),N(e,z),N(r,z);var _=t.systeminstruction_authorizeNonceAccount(n.ptr,e.ptr,r.ptr);return B.__wrap(_)},n}();n.exports.SystemInstruction=F,n.exports.__wbindgen_json_parse=function(n,e){return p(JSON.parse(s(n,e)))},n.exports.__wbg_instruction_new=function(n){return p(B.__wrap(n))},n.exports.__wbindgen_object_drop_ref=function(n){b(n)},n.exports.__wbindgen_string_new=function(n,e){return p(s(n,e))},n.exports.__wbg_pubkey_new=function(n){return p(z.__wrap(n))},n.exports.__wbindgen_string_get=function(n,e){var r=g(e),_="string"===typeof r?r:void 0,o=m(_)?0:y(_,t.__wbindgen_malloc,t.__wbindgen_realloc),i=w;k()[n/4+1]=i,k()[n/4+0]=o},n.exports.__wbindgen_is_undefined=function(n){return void 0===g(n)},n.exports.__wbindgen_number_get=function(n,e){var r=g(e),_="number"===typeof r?r:void 0;(null!==A&&A.buffer===t.memory.buffer||(A=new Float64Array(t.memory.buffer)),A)[n/8+1]=m(_)?0:_,k()[n/4+0]=!m(_)},n.exports.__wbindgen_number_new=function(n){return p(n)},n.exports.__wbg_debug_fda1f49ea6af7a1d=function(n){console.debug(g(n))},n.exports.__wbg_error_8ff19d586a987aef=function(n){console.error(g(n))},n.exports.__wbg_info_c8f1b00be4ef10bc=function(n){console.info(g(n))},n.exports.__wbg_log_e8ba7b992c7ad0eb=function(n){console.log(g(n))},n.exports.__wbg_warn_0227db1aa6989248=function(n){console.warn(g(n))},n.exports.__wbg_new_693216e109162396=function(){return p(new Error)},n.exports.__wbg_stack_0ddaca5d1abfb52f=function(n,e){var r=y(g(e).stack,t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;k()[n/4+1]=_,k()[n/4+0]=r},n.exports.__wbg_error_09919627ac0992f5=function(n,e){try{console.error(s(n,e))}finally{t.__wbindgen_free(n,e)}},n.exports.__wbg_new_94fb1279cf6afea5=function(){return p(new Array)},n.exports.__wbindgen_is_function=function(n){return"function"===typeof g(n)},n.exports.__wbindgen_is_object=function(n){var e=g(n);return"object"===typeof e&&null!==e},n.exports.__wbg_next_cabb70b365520721=function(n){return p(g(n).next)},n.exports.__wbg_next_bf3d83fc18df496e=function(){return P((function(n){return p(g(n).next())}),arguments)},n.exports.__wbg_done_040f966faa9a72b3=function(n){return g(n).done},n.exports.__wbg_value_419afbd9b9574c4c=function(n){return p(g(n).value)},n.exports.__wbg_iterator_4832ef1f15b0382b=function(){return p(Symbol.iterator)},n.exports.__wbg_get_a9cab131e3152c49=function(){return P((function(n,e){return p(Reflect.get(g(n),g(e)))}),arguments)},n.exports.__wbg_call_ae78342adc33730a=function(){return P((function(n,e){return p(g(n).call(g(e)))}),arguments)},n.exports.__wbg_newwithlength_e80fb11cf19c1628=function(n){return p(new Array(n>>>0))},n.exports.__wbg_set_561aac756158708c=function(n,e,r){g(n)[e>>>0]=b(r)},n.exports.__wbg_isArray_6721f2e508996340=function(n){return Array.isArray(g(n))},n.exports.__wbg_push_40c6a90f1805aa90=function(n,e){return g(n).push(g(e))},n.exports.__wbg_values_b1b9e8c63dbe01c2=function(n){return p(g(n).values())},n.exports.__wbg_buffer_7af23f65f6c64548=function(n){return p(g(n).buffer)},n.exports.__wbg_new_cc9018bd6f283b6f=function(n){return p(new Uint8Array(g(n)))},n.exports.__wbg_set_f25e869e4565d2a2=function(n,e,r){g(n).set(g(e),r>>>0)},n.exports.__wbg_length_0acb1cf9bbaf8519=function(n){return g(n).length},n.exports.__wbg_instanceof_Uint8Array_edb92795fc0c63b4=function(n){return g(n)instanceof Uint8Array},n.exports.__wbindgen_debug_string=function(n,e){var r=y(C(g(e)),t.__wbindgen_malloc,t.__wbindgen_realloc),_=w;k()[n/4+1]=_,k()[n/4+0]=r},n.exports.__wbindgen_throw=function(n,e){throw new Error(s(n,e))},n.exports.__wbindgen_memory=function(){return p(t.memory)};var J=r(53774).join("/","token_bridge_bg.wasm"),M=r(17051).readFileSync(J),R=new WebAssembly.Module(M),D=new WebAssembly.Instance(R,_);t=D.exports,n.exports.__wasm=t},53774:function(n,e,r){var t=r(54501);function _(n){if("string"!==typeof n)throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function o(n,e){for(var r,t="",_=0,o=-1,i=0,a=0;a<=n.length;++a){if(a<n.length)r=n.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===i);else if(o!==a-1&&2===i){if(t.length<2||2!==_||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){-1===c?(t="",_=0):_=(t=t.slice(0,c)).length-1-t.lastIndexOf("/"),o=a,i=0;continue}}else if(2===t.length||1===t.length){t="",_=0,o=a,i=0;continue}e&&(t.length>0?t+="/..":t="..",_=2)}else t.length>0?t+="/"+n.slice(o+1,a):t=n.slice(o+1,a),_=a-o-1;o=a,i=0}else 46===r&&-1!==i?++i:i=-1}return t}var i={resolve:function(){for(var n,e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a;i>=0?a=arguments[i]:(void 0===n&&(n=t.cwd()),a=n),_(a),0!==a.length&&(e=a+"/"+e,r=47===a.charCodeAt(0))}return e=o(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(n){if(_(n),0===n.length)return".";var e=47===n.charCodeAt(0),r=47===n.charCodeAt(n.length-1);return 0!==(n=o(n,!e)).length||e||(n="."),n.length>0&&r&&(n+="/"),e?"/"+n:n},isAbsolute:function(n){return _(n),n.length>0&&47===n.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var n,e=0;e<arguments.length;++e){var r=arguments[e];_(r),r.length>0&&(void 0===n?n=r:n+="/"+r)}return void 0===n?".":i.normalize(n)},relative:function(n,e){if(_(n),_(e),n===e)return"";if((n=i.resolve(n))===(e=i.resolve(e)))return"";for(var r=1;r<n.length&&47===n.charCodeAt(r);++r);for(var t=n.length,o=t-r,a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var c=e.length-a,l=o<c?o:c,u=-1,s=0;s<=l;++s){if(s===l){if(c>l){if(47===e.charCodeAt(a+s))return e.slice(a+s+1);if(0===s)return e.slice(a+s)}else o>l&&(47===n.charCodeAt(r+s)?u=s:0===s&&(u=0));break}var d=n.charCodeAt(r+s);if(d!==e.charCodeAt(a+s))break;47===d&&(u=s)}var f="";for(s=r+u+1;s<=t;++s)s!==t&&47!==n.charCodeAt(s)||(0===f.length?f+="..":f+="/..");return f.length>0?f+e.slice(a+u):(a+=u,47===e.charCodeAt(a)&&++a,e.slice(a))},_makeLong:function(n){return n},dirname:function(n){if(_(n),0===n.length)return".";for(var e=n.charCodeAt(0),r=47===e,t=-1,o=!0,i=n.length-1;i>=1;--i)if(47===(e=n.charCodeAt(i))){if(!o){t=i;break}}else o=!1;return-1===t?r?"/":".":r&&1===t?"//":n.slice(0,t)},basename:function(n,e){if(void 0!==e&&"string"!==typeof e)throw new TypeError('"ext" argument must be a string');_(n);var r,t=0,o=-1,i=!0;if(void 0!==e&&e.length>0&&e.length<=n.length){if(e.length===n.length&&e===n)return"";var a=e.length-1,c=-1;for(r=n.length-1;r>=0;--r){var l=n.charCodeAt(r);if(47===l){if(!i){t=r+1;break}}else-1===c&&(i=!1,c=r+1),a>=0&&(l===e.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=c))}return t===o?o=c:-1===o&&(o=n.length),n.slice(t,o)}for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!i){t=r+1;break}}else-1===o&&(i=!1,o=r+1);return-1===o?"":n.slice(t,o)},extname:function(n){_(n);for(var e=-1,r=0,t=-1,o=!0,i=0,a=n.length-1;a>=0;--a){var c=n.charCodeAt(a);if(47!==c)-1===t&&(o=!1,t=a+1),46===c?-1===e?e=a:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){r=a+1;break}}return-1===e||-1===t||0===i||1===i&&e===t-1&&e===r+1?"":n.slice(e,t)},format:function(n){if(null===n||"object"!==typeof n)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return function(n,e){var r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+t:r+n+t:t}("/",n)},parse:function(n){_(n);var e={root:"",dir:"",base:"",ext:"",name:""};if(0===n.length)return e;var r,t=n.charCodeAt(0),o=47===t;o?(e.root="/",r=1):r=0;for(var i=-1,a=0,c=-1,l=!0,u=n.length-1,s=0;u>=r;--u)if(47!==(t=n.charCodeAt(u)))-1===c&&(l=!1,c=u+1),46===t?-1===i?i=u:1!==s&&(s=1):-1!==i&&(s=-1);else if(!l){a=u+1;break}return-1===i||-1===c||0===s||1===s&&i===c-1&&i===a+1?-1!==c&&(e.base=e.name=0===a&&o?n.slice(1,c):n.slice(a,c)):(0===a&&o?(e.name=n.slice(1,i),e.base=n.slice(1,c)):(e.name=n.slice(a,i),e.base=n.slice(a,c)),e.ext=n.slice(i,c)),a>0?e.dir=n.slice(0,a-1):o&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,n.exports=i}}]);
//# sourceMappingURL=127.c62b4294.chunk.js.map