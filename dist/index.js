"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw r=0,v}}};var d=c(function(K,y){"use strict";var R=require("@stdlib/ndarray-base-assert-is-row-major"),E=require("@stdlib/blas-ext-base-dfill").ndarray,b=require("@stdlib/blas-base-dcopy").ndarray;function V(a,r,v,t,o,e,q,l){var i,s,n,u,m;if(a<=0)return o;if(i=t,n=l,R([e,q]))for(u=0;u<a;u++){for(s=t,m=0;m<a;m++)o[n]=r[i],o[n+q]=r[s],s+=v,n+=e;i+=v}else{for(u=0;u<a;u++)E(a,r[i],o,e,n),i+=v,n+=a*e;for(n=l+q,u=0;u<a;u++)b(a,r,v,t,o,e,n),n+=a*e}return o}y.exports=V});var h=c(function(P,x){"use strict";var M=require("@stdlib/blas-base-layout-resolve-str"),_=require("@stdlib/ndarray-base-assert-is-column-major-string"),C=require("@stdlib/strided-base-stride2offset"),F=require("@stdlib/math-base-special-fast-max"),f=require("@stdlib/string-format"),T=d();function k(a,r,v,t,o,e){var q,l,i;if(i=M(a),i===null)throw new TypeError(f("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(_(i)){if(e<F(1,r*r))throw new RangeError(f("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,e));q=1,l=e}else{if(e<2)throw new RangeError(f("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));q=e,l=1}return T(r,v,t,C(r,t),o,q,l,0)}x.exports=k});var w=c(function(Q,p){"use strict";var z=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=h(),A=d();z(j,"ndarray",A);p.exports=j});var B=require("path").join,G=require("@stdlib/utils-try-require"),H=require("@stdlib/assert-is-error"),I=w(),g,S=G(B(__dirname,"./native.js"));H(S)?g=I:g=S;module.exports=g;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
