"use strict";var n=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var o=n(function(m,s){
var u=require('@stdlib/number-float64-base-to-float32/dist');function q(r){return r===0?.16666752099990845:u(.16666752099990845+u(r*u(.07495300471782684+u(r*u(.04547002539038658+u(r*u(.024181311950087547+u(r*.04216320067644119))))))))}s.exports=q
});var l=n(function(z,v){
var p=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-sqrtf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),N=require('@stdlib/constants-float32-half-pi/dist'),F=o();function g(r){var t,f,a,e;return p(r)?NaN:(r=i(r),r>0?(f=1,a=r):(f=-1,a=-r),a>1?NaN:a<1e-4?r:(a>.5?(e=i(.5*i(1-a)),a=c(e),t=1):(e=i(a*a),t=0),e=i(i(i(F(e)*e)*a)+a),t!==0&&(e=i(e+e),e=i(N-e)),f<0&&(e=-e),e))}v.exports=g
});var y=l();module.exports=y;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
