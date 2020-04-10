(this["webpackJsonpthree-react-sandbox"]=this["webpackJsonpthree-react-sandbox"]||[]).push([[6,8],{41:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=a(17),l=(a(45),function(e){var t=e.sample;return console.log("Sample: %s %s",t.name,t.caseNb?"#"+t.caseNb:""),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay",id:"info"},r.a.createElement("span",null,t.name)))}),o=function(e){var t=e.sampleCases,a=e.caseId,n=Object(c.a)((function(e){return e.setSample}));return console.log("switch to case #"+t[a].name),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay",id:"caseSelector"},r.a.createElement("select",{id:"testCases",value:a,onChange:function(e){return n({caseNb:e.target.value})}},Object.keys(t).map((function(e){return r.a.createElement("option",{key:e,value:e},t[e].name)})))))}},43:function(e,t,a){e.exports=a.p+"static/media/sand.be1ebb92.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/sand_norm.3d153e6a.png"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t),a.d(t,"Wrapper",(function(){return j})),a.d(t,"Controls",(function(){return C})),a.d(t,"Lights",(function(){return O})),a.d(t,"Helpers",(function(){return w}));var n,r=a(0),c=a.n(r),l=a(40),o=a(42),i=a(43),s=a.n(i),u=a(44),m=a.n(u),p=new l.TextureLoader,d=function(e,t){return p.load(e,(function(e){return e.wrapS=l.RepeatWrapping,e.wrapT=l.RepeatWrapping,e.anisotropy=4,e.repeat.set(t,t),e}))},f=function(e){return d(m.a,e)},g={uniforms:{},vertexShader:["attribute vec3 color;","varying vec3 col;","void main()","{","   col = color;","\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","\tgl_Position = projectionMatrix * mvPosition;","}"].join("\n"),fragmentShader:["in vec3 col;","void main( void ) {","\tgl_FragColor = vec4(col.r,col.g,col.b,1.0);","}"].join("\n")};function E(e){switch(e.name){case n.WATER:return c.a.createElement("meshStandardMaterial",{attach:"material",opacity:.5,transparent:!0,color:16711680});case n.SAND:return c.a.createElement("meshStandardMaterial",{attach:"material",opacity:.5,transparent:!1,color:16777215,side:l.DoubleSide,metalness:.2,bumpScale:5e-4,map:(t=e.repeat,d(s.a,t)),normalMap:f(e.repeat)});case n.SHADCOL:return c.a.createElement("shaderMaterial",{attach:"material",vertexShader:g.vertexShader,fragmentShader:g.fragmentShader})}var t}!function(e){e[e.WATER=0]="WATER",e[e.SAND=1]="SAND",e[e.SHADCOL=2]="SHADCOL"}(n||(n={}));var b=a(17),v=a(47),h=a(48),S=a(41);Object(o.b)({OrbitControls:v.a}),Object(o.b)({TransformControls:h.a});var j=function(e){var t=Object(o.e)().gl;return t.setClearColor(0),t.shadowMap.enabled=!0,t.shadowMap.type=l.PCFSoftShadowMap,c.a.createElement(c.a.Fragment,null)},C=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(o.e)(),n=a.camera,l=a.gl,i=Object(b.a)((function(e){return e.setTransfCtrl}));return Object(o.c)((function(){e.current.update()})),Object(r.useEffect)((function(){i(t.current),t.current.addEventListener("dragging-changed",(function(t){return e.current.enabled=!t.value}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("orbitControls",{ref:e,args:[n,l.domElement],enableDamping:!0,dampingFactor:.1,rotateSpeed:.5}),c.a.createElement("transformControls",{ref:t,args:[n,l.domElement]}))},O=function(e){var t=Object(r.useRef)();return Object(o.c)((function(e){var a=e.clock.getElapsedTime();t.current.position.x=50*Math.sin(a/2),t.current.position.z=50*Math.cos(a/2)})),c.a.createElement(c.a.Fragment,null,c.a.createElement("spotLight",{ref:t,intensity:1,position:[30,30,50],angle:.2,penumbra:1,castShadow:!0}))},w=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("gridHelper",{args:[e.size,10]}),c.a.createElement("axesHelper",{args:[e.size/2]}))},y=function(){var e=[],t=c.a.createElement("mesh",{"rotation-x":Math.PI/2,receiveShadow:!0},c.a.createElement("planeGeometry",{attach:"geometry",args:[50,50]}),c.a.createElement(E,{name:n.SAND,repeat:1}));return e.push(t),c.a.createElement(c.a.Fragment,null,c.a.createElement("group",null,e),";")},x=function(){var e=Object(b.a)((function(e){return e.transfCtrl})),t=Object(r.useCallback)((function(t){t.stopPropagation(),e.attach(t.object)}),[e]),a=[],l=c.a.createElement("mesh",{position:[0,0,0],castShadow:!0,onClick:function(e){return t(e)}},c.a.createElement("boxBufferGeometry",{attach:"geometry",args:[10,10,10]}),c.a.createElement(E,{name:n.SAND,repeat:1}));return a.push(l),c.a.createElement(c.a.Fragment,null,c.a.createElement("group",null,a),";")};t.default=function(e){var t=e.sample;return c.a.createElement(c.a.Fragment,null,c.a.createElement(S.b,{sample:t}),c.a.createElement(o.a,{gl2:!0,camera:{position:[15,30,50]}},c.a.createElement(j,null),c.a.createElement(O,null),c.a.createElement(w,{size:128}),c.a.createElement(C,null),c.a.createElement(y,null),c.a.createElement(x,null)))}},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),l=a(41),o=a(46),i=a(67);function s(e){var t=e.url,a=Object(c.d)(i.a,t);return r.a.createElement("primitive",{object:a.scene,dispose:null})}t.default=function(e){var t=e.sample;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{sample:t}),r.a.createElement(c.a,{camera:{position:[100,50,100]}},r.a.createElement("ambientLight",{intensity:2}),r.a.createElement(o.Helpers,{size:128}),r.a.createElement(o.Wrapper,null),r.a.createElement(o.Controls,null),r.a.createElement(n.Suspense,{fallback:null},r.a.createElement(s,{url:"https://github.com/google/model-viewer/blob/master/packages/shared-assets/models/Astronaut.glb?raw=true"}))))}}}]);
//# sourceMappingURL=6.5a3f701a.chunk.js.map