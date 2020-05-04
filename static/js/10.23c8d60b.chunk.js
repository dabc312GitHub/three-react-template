(this["webpackJsonpheightmap-gen"]=this["webpackJsonpheightmap-gen"]||[]).push([[10],{40:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=(n(42),function(e){var t=e.sample;return console.log("Sample: %s %s",t.name,t.caseNb?"#"+t.caseNb:""),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay top centered"},r.a.createElement("div",{id:"infoLabel"},t.name),r.a.createElement("div",{id:"description"},t.desc)))}),o=function(e){var t=e.items,n=e.current,a=e.onSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay top inputBtn",id:"caseSelector"},r.a.createElement("select",{id:"testCases",value:n,onChange:function(e){return a(e.target.value)}},Object.keys(t).map((function(e){return r.a.createElement("option",{key:e,value:e},t[e])})))))}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(16),r=n(15),c=n(50),o=Object(c.a)((function(e,t){return{time:{custom:new Date},controls:{},setTime:function(n){e(Object(a.a)({},t(),{time:{custom:n}}))},setControls:function(n){return e(Object(a.a)({},t(),{controls:n}))}}})),l=Object(r.a)(o,1)[0]},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t),n.d(t,"Wrapper",(function(){return S})),n.d(t,"Controls",(function(){return C})),n.d(t,"MoveCtrl",(function(){return w})),n.d(t,"Lights",(function(){return y})),n.d(t,"Helpers",(function(){return M}));var a,r=n(15),c=n(0),o=n.n(c),l=n(39),i=n(43),u=n(45),s=n.n(u),m=n(46),f=n.n(m),d=new l.TextureLoader,p=function(e,t){return d.load(e,(function(e){return e.wrapS=l.RepeatWrapping,e.wrapT=l.RepeatWrapping,e.anisotropy=4,e.repeat.set(t,t),e}))},g=function(e){return p(f.a,e)},b={uniforms:{},vertexShader:["attribute vec3 color;","varying vec3 col;","void main()","{","   col = color;","\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","\tgl_Position = projectionMatrix * mvPosition;","}"].join("\n"),fragmentShader:["in vec3 col;","void main( void ) {","\tgl_FragColor = vec4(col.r,col.g,col.b,1.0);","}"].join("\n")};function E(e){switch(e.name){case a.WATER:return o.a.createElement("meshStandardMaterial",{attach:"material",opacity:.5,transparent:!0,color:16711680});case a.SAND:return o.a.createElement("meshStandardMaterial",{attach:"material",opacity:.5,transparent:!1,color:16777215,side:l.DoubleSide,metalness:.2,bumpScale:5e-4,map:(t=e.repeat,p(s.a,t)),normalMap:g(e.repeat)});case a.SHADCOL:return o.a.createElement("shaderMaterial",{attach:"material",vertexShader:b.vertexShader,fragmentShader:b.fragmentShader})}var t}!function(e){e[e.WATER=0]="WATER",e[e.SAND=1]="SAND",e[e.SHADCOL=2]="SHADCOL"}(a||(a={}));var v=n(41),h=n(48),j=n(49),O=n(40);Object(i.b)({OrbitControls:h.a}),Object(i.b)({TransformControls:j.a});var S=function(e){var t=Object(i.e)().gl;return t.setClearColor(0),t.shadowMap.enabled=!0,t.shadowMap.type=l.PCFSoftShadowMap,o.a.createElement(o.a.Fragment,null)},C=function(){var e=Object(c.useRef)(),t=Object(i.e)(),n=t.camera,a=t.gl,r=Object(v.a)((function(e){return e.setControls}));return Object(i.c)((function(){e.current.update()})),Object(c.useEffect)((function(){r(e.current)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("orbitControls",{ref:e,args:[n,a.domElement],enableDamping:!0,dampingFactor:.1,rotateSpeed:.5}))},w=function(e){var t=e.onChange,n=e.object,a=Object(v.a)((function(e){return e.controls})),r=Object(c.useRef)(),l=Object(i.e)(),u=l.camera,s=l.gl,m=function(e){t&&t(e.target.object.matrix)};return Object(c.useEffect)((function(){r.current.addEventListener("dragging-changed",(function(e){return a.enabled=!e.value})),console.log("attach controled object"),r.current.attach(n),r.current.addEventListener("dragging-changed",m)}),[]),Object(c.useEffect)((function(){return function(){console.log("detach controled object"),r.current.detach(),r.current.removeEventListener("dragging-changed",m)}}),[]),o.a.createElement("transformControls",{ref:r,args:[u,s.domElement]})},y=function(e){var t=Object(c.useRef)();return Object(i.c)((function(e){var n=e.clock.getElapsedTime();t.current.position.x=50*Math.sin(n/2),t.current.position.z=50*Math.cos(n/2)})),o.a.createElement(o.a.Fragment,null,o.a.createElement("spotLight",{ref:t,intensity:1,position:[30,30,50],angle:.2,penumbra:1,castShadow:!0}))},M=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("gridHelper",{args:[e.size,10]}),o.a.createElement("axesHelper",{args:[e.size/2]}))},x=function(){var e=[],t=o.a.createElement("mesh",{"rotation-x":Math.PI/2,receiveShadow:!0},o.a.createElement("planeGeometry",{attach:"geometry",args:[50,50]}),o.a.createElement(E,{name:a.SAND,repeat:1}));return e.push(t),o.a.createElement(o.a.Fragment,null,o.a.createElement("group",null,e),";")},F=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],l=t[1],i=Object(c.useRef)(),u=Object(c.useRef)(),s=Object(c.useCallback)((function(e){e.stopPropagation(),l(!i.current)}),[]);Object(c.useEffect)((function(){i.current=n}));var m=Object(c.useMemo)((function(){return o.a.createElement("mesh",{ref:u,position:[0,0,0],castShadow:!0,onClick:function(e){return s(e)}},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[10,10,10]}),o.a.createElement(E,{name:a.SAND,repeat:1}))}),[]),f=n?o.a.createElement(w,{onChange:null,object:u.current}):"";return o.a.createElement(o.a.Fragment,null,m,f)};t.default=function(e){var t=e.sample;return o.a.createElement(o.a.Fragment,null,o.a.createElement(O.b,{sample:t}),o.a.createElement(i.a,{gl2:!0,camera:{position:[15,30,50]}},o.a.createElement(S,null),o.a.createElement(y,null),o.a.createElement(M,{size:128}),o.a.createElement(C,null),o.a.createElement(x,null),o.a.createElement(F,null)))}},45:function(e,t,n){e.exports=n.p+"static/media/sand.be1ebb92.jpg"},46:function(e,t,n){e.exports=n.p+"static/media/sand_norm.3d153e6a.png"}}]);
//# sourceMappingURL=10.23c8d60b.chunk.js.map