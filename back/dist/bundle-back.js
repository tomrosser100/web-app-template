(()=>{"use strict";var e={n:r=>{var s=r&&r.__esModule?()=>r.default:()=>r;return e.d(s,{a:s}),s},d:(r,s)=>{for(var t in s)e.o(s,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:s[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("express");var s=e.n(r);require("heroku-ssl-redirect");const t="/front/dist",o=s()();o.use(s().static(process.cwd()+t)),o.get("/**",(function(e,r){r.sendFile(process.cwd()+t+"/index.html")})),console.log(`http://192.168.1.25:${process.env.PORT}/`),o.listen(process.env.PORT)})();