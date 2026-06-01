"use strict";var c=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=c(function(K,y){"use strict";var R=require("@stdlib/ndarray-base-assert-is-row-major"),E=require("@stdlib/blas-ext-base-dfill").ndarray,b=require("@stdlib/blas-base-dcopy").ndarray;function V(a,r,o,q,u,e,v,t){var s,m,i,n,l;if(a<=0)return u;if(s=q,i=t,R([e,v]))for(n=0;n<a;n++){for(m=q,l=0;l<a;l++)u[i]=r[s],u[i+v]=r[m],m+=o,i+=e;s+=o}else{for(n=0;n<a;n++)E(a,r[s],u,e,i),s+=o,i+=a*e;for(i=t+v,n=0;n<a;n++)b(a,r,o,q,u,e,i),i+=a*e}return u}y.exports=V});var h=c(function(P,x){"use strict";var M=require("@stdlib/blas-base-assert-is-layout"),_=require("@stdlib/ndarray-base-assert-is-column-major-string"),C=require("@stdlib/strided-base-stride2offset"),F=require("@stdlib/math-base-special-fast-max"),d=require("@stdlib/string-format"),T=f();function k(a,r,o,q,u,e){var v,t;if(!M(a))throw new TypeError(d("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(_(a)){if(e<F(1,r*r))throw new RangeError(d("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,e));v=1,t=e}else{if(e<2)throw new RangeError(d("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));v=e,t=1}return T(r,o,q,C(r,q),u,v,t,0)}x.exports=k});var w=c(function(Q,p){"use strict";var z=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=h(),A=f();z(j,"ndarray",A);p.exports=j});var B=require("path").join,G=require("@stdlib/utils-try-require"),H=require("@stdlib/assert-is-error"),I=w(),g,S=G(B(__dirname,"./native.js"));H(S)?g=I:g=S;module.exports=g;
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
