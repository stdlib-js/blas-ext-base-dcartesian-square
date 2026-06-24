"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(u){throw r=0,u}}};var f=c(function(K,y){"use strict";var R=require("@stdlib/ndarray-base-assert-is-row-major"),E=require("@stdlib/blas-ext-base-dfill").ndarray,b=require("@stdlib/blas-base-dcopy").ndarray;function V(a,r,u,q,v,e,o,t){var s,m,i,n,l;if(a<=0)return v;if(s=q,i=t,R([e,o]))for(n=0;n<a;n++){for(m=q,l=0;l<a;l++)v[i]=r[s],v[i+o]=r[m],m+=u,i+=e;s+=u}else{for(n=0;n<a;n++)E(a,r[s],v,e,i),s+=u,i+=a*e;for(i=t+o,n=0;n<a;n++)b(a,r,u,q,v,e,i),i+=a*e}return v}y.exports=V});var h=c(function(P,x){"use strict";var M=require("@stdlib/blas-base-assert-is-layout"),_=require("@stdlib/ndarray-base-assert-is-column-major-string"),C=require("@stdlib/strided-base-stride2offset"),F=require("@stdlib/math-base-special-fast-max"),d=require("@stdlib/string-format"),T=f();function k(a,r,u,q,v,e){var o,t;if(!M(a))throw new TypeError(d("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(_(a)){if(e<F(1,r*r))throw new RangeError(d("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,e));o=1,t=e}else{if(e<2)throw new RangeError(d("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));o=e,t=1}return T(r,u,q,C(r,q),v,o,t,0)}x.exports=k});var w=c(function(Q,p){"use strict";var z=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=h(),A=f();z(j,"ndarray",A);p.exports=j});var B=require("path").join,G=require("@stdlib/utils-try-require"),H=require("@stdlib/assert-is-error"),I=w(),g,S=G(B(__dirname,"./native.js"));H(S)?g=I:g=S;module.exports=g;
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
