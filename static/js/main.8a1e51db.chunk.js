(this["webpackJsonpthree-react-sandbox"]=this["webpackJsonpthree-react-sandbox"]||[]).push([[1],{26:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"BasicDemo",(function(){return d})),n.d(a,"ModelLoader",(function(){return f})),n.d(a,"BoxSplitDemo",(function(){return O})),n.d(a,"TestBoxSplit",(function(){return h})),n.d(a,"TestRaycastHlp",(function(){return g}));var r,l,c=n(0),o=n.n(c),u=n(19),m=(n(30),n(11)),s=n(8),i=n(16),p=n(15),b=n(5),E=n(14);n(31);!function(e){e[e.DEMO=0]="DEMO",e[e.TEST=1]="TEST"}(r||(r={})),function(e){e[e.ORBIT=0]="ORBIT",e[e.TRANSFORM=1]="TRANSFORM"}(l||(l={}));var d={tags:[r.DEMO],Component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,42))}))},f={tags:[r.DEMO],Component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,73))}))},O={tags:[r.DEMO],Component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,71))}))},h={tags:[r.TEST],Component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,72))}))},g={tags:[r.TEST],Component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,74))}))},T=Object.entries(a).reduce((function(e,t){var n=Object(p.a)(t,2),a=n[0],r=n[1];return Object(i.a)({},e,Object(s.a)({},a,r))}),{});var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{basename:"/three-react-template"},o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/"},o.a.createElement(S,null)),o.a.createElement(b.a,{exact:!0,path:"/:sample",component:y}),o.a.createElement(b.a,{path:"/:sample/:caseId",component:y}))))},S=function(){var e;return o.a.createElement("div",null,"Welcome to ThreeSandbox! a playground for 3D projects ",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null,"Sandbox contains the following samples:")," ",o.a.createElement("br",null),o.a.createElement("ul",null,(e=T,Object.keys(e).map((function(e,t){return o.a.createElement("li",{key:t.toString()},o.a.createElement(E.b,{to:"/"+e},e))})))))},y=function(e){var t=e.match,n=new URLSearchParams(Object(b.f)().search).get("sampArg"),a=Object(b.g)().caseId,r={name:t.params.sample,case:a,arg:n},l=T[r.name].Component;return o.a.createElement(c.Suspense,{fallback:null},o.a.createElement(l,{sample:r}))};!1===m.a.isWebGL2Available()&&document.body.appendChild(m.a.getWebGL2ErrorMessage()),Object(u.render)(o.a.createElement(j,null),document.getElementById("root"))}},[[26,2,3]]]);
//# sourceMappingURL=main.8a1e51db.chunk.js.map