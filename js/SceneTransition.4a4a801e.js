"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[440],{55122:function(t,e,n){n.d(e,{XF:function(){return l},fn:function(){return u.fn},lE:function(){return u.lE},Y2:function(){return u.Y2},I:function(){return u.I},lp:function(){return u.lp},RI:function(){return a},hj:function(){return o},Kn:function(){return r},nK:function(){return i},HD:function(){return s},yM:function(){return f},c4:function(){return c}});n(10768);function r(t){return"[object Object]"===Object.prototype.toString.call(t)}function i(t){if(r(t)){const e=Object.keys(t);return 0===e.length}return!1}function s(t){return"string"===typeof t}function o(t){return"number"===typeof t}function a(t){return"object"===typeof HTMLElement?t instanceof HTMLElement:t&&"object"===typeof t&&1===t.nodeType&&"string"===typeof t.nodeName}var u=n(24919);function l(t=1,e=10){return Math.floor(Math.random()*(e-t+1))+t}function c(t,e=!0){if(""===t||0===t||!t)return"0";const n=t+"",r=n.indexOf(".");let i="",s="";-1!==r?(e&&(i=n.substring(r)),s=n.substring(0,r)):s=n;let o=s.split("");if(o.length>=4){const t=[],e=o.reverse();for(let n=0;n<e.length;n++)t.push(e[n]),(n+1)%3===0&&t.push(",");o=t.reverse(),o.length&&","===o[0]&&o.shift()}return o.join("")+(e?i:"")}function f(t,e=2){try{const n=parseFloat(t);return n.toFixed(e)}catch(n){return"0"}}},98937:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(4310),i=(n(10768),n(55122)),s=n(10185),o=n(77557);let a;class u{constructor(t){const e=document.getElementById("webgl-output"),{color:n}=t;this.scene=(0,i.lp)(),this.scene.background=new s.Ilk(0),this.camera=(0,i.lE)(new s.Pa4(20,30,10),55,1,2e4),this.controls=new o.z(this.camera,a.domElement),this.controls.minDistance=5,this.controls.maxDistance=20,this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.05;const r={minFilter:s.wem,magFilter:s.wem,format:s.RGBFormat,stencilBuffer:!1};this.fbo=new s.dd2(e.offsetWidth,e.offsetHeight,r),(0,i.fn)(this.scene,10);for(let i=0;i<10;i++){const t=new s.Kj0(new s.xo$(1,20),new s.vBJ({color:n}));t.position.set(10*Math.random(),10*Math.random(),10*Math.random()),this.scene.add(t)}}render(t=0,e=!1){e?(a.setRenderTarget(this.fbo),a.clear(),a.render(this.scene,this.camera)):(a.setRenderTarget(null),a.render(this.scene,this.camera)),this.controls.update()}}function l(t,e,n){const r=document.getElementById("webgl-output");this.scene=new s.xsS,this.scene.background=new s.Ilk(0),this.camera=new s.iKG(r.offsetWidth/-2,r.offsetWidth/2,r.offsetHeight/2,r.offsetHeight/-2,-10,10),this.material=new s.jyz({uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},mixRatio:{value:0},threshold:{value:.1},useTexture:{value:!0},tMixTexture:{value:n.texture}},vertexShader:"\n    varying vec2 vUv;\n\t\t\tvoid main() {\n\t\t\t\tvUv = vec2( uv.x, uv.y );\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t}\n    ",fragmentShader:"\n      uniform float mixRatio;\n\t\t\tuniform sampler2D tDiffuse1;\n\t\t\tuniform sampler2D tDiffuse2;\n\t\t\tuniform sampler2D tMixTexture;\n\t\t\tuniform bool useTexture;\n\t\t\tuniform float threshold;\n\t\t\tvarying vec2 vUv;\n\t\t\tvoid main() {\n\t\t\t\tvec4 texel1 = texture2D( tDiffuse1, vUv );\n\t\t\t\tvec4 texel2 = texture2D( tDiffuse2, vUv );\n\t\t\t\tif (useTexture==true) {\n\t\t\t\t\tvec4 transitionTexel = texture2D( tMixTexture, vUv );\n\t\t\t\t\tfloat r = mixRatio * (1.0 + threshold * 2.0) - threshold;\n\t\t\t\t\tfloat mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);\n\t\t\t\t\tgl_FragColor = mix( texel1, texel2, mixf );\n\t\t\t\t} else {\n\t\t\t\t\tgl_FragColor = mix( texel2, texel1, mixRatio );\n\t\t\t\t}\n\t\t\t}\n    "});const i=new s._12(r.offsetWidth,r.offsetHeight);this.quad=new s.Kj0(i,this.material),this.scene.add(this.quad),this.update=(t,e,r=!1)=>{this.scene1=t,this.scene2=e,this.material.uniforms.tDiffuse1.value=this.scene2.fbo.texture,this.material.uniforms.tDiffuse2.value=this.scene1.fbo.texture,this.material.uniforms.threshold.value=.1,this.material.uniforms.mixRatio.value=0,this.material.uniforms.tMixTexture.value=n.texture,this.material.uniforms.useTexture.value=n.useTexture,n.animate=r,n.transition=0},this.render=()=>{0===n.transition?this.scene1.render():n.transition>=1?(this.scene2.render(),n.animate=!1):(this.scene1.render(0,!0),this.scene2.render(0,!0),a.setRenderTarget(null),a.clear(),a.render(this.scene,this.camera)),console.log(n.transition,n.animate),n.animate&&n.transition<=1&&(n.transition=n.transition+n.transitionSpeed,this.material.uniforms.mixRatio.value=n.transition)},this.update(t,e,!1)}class c{constructor(){this.renderer=(0,i.I)({physicallyCorrectLights:!1}),a=this.renderer;const t=new u({color:16711680}),e=new u({color:16776960}),n=new u({color:65280}),r=new u({color:255}),o=[],c=new s.dpR;for(let i=0;i<6;i++)o.push(c.load(`/images/textures/transition/transition${i+1}.png`));this.transitionParams={useTexture:!0,transition:0,transitionSpeed:.05,texture:o[0],animate:!1},this.transition=new l(t,e,this.transitionParams);const f=(0,i.Y2)();let h=0;const m={next:()=>{this.transitionParams.texture=o[parseInt(6*Math.random())],this.transitionParams.useTexture=!0,0===h?this.transition.update(t,e,!0):1===h?this.transition.update(e,n,!0):2===h?this.transition.update(n,r,!0):3===h&&(this.transition.update(r,t,!0),h=-1),h++}};f.add(m,"next").name("下一个场景"),this.render()}render(){this.transition.render(),requestAnimationFrame(this.render.bind(this))}}const f={id:"webgl-output",class:"webgl-output"},h={name:"SceneTransition"};var m=Object.assign(h,{setup(t){return(0,r.bv)((()=>{new c})),(t,e)=>((0,r.wg)(),(0,r.iD)("div",f))}});const d=m;var x=d}}]);