"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[524],{99321:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=n(58258),s=(n(53297),n(64634)),r=n(75030),a=n(68625);let o,u,l;class h{constructor(t){const e=document.getElementById("webgl-output"),{color:n}=t;this.scene=(0,s.H7)(),this.scene.background=new r.Q1f(0);const i={minFilter:r.k6q,magFilter:r.k6q,stencilBuffer:!1};this.fbo=new r.nWS(e.offsetWidth,e.offsetHeight,i),(0,s.AU)(this.scene,10);for(let s=0;s<10;s++){const t=new r.eaF(new r.Gu$(1,20),new r.V9B({color:n}));t.position.set(10*Math.random(),10*Math.random(),10*Math.random()),this.scene.add(t)}}render(t=0,e=!1){e?(o.setRenderTarget(this.fbo),o.clear(),o.render(this.scene,u)):(o.setRenderTarget(null),o.render(this.scene,u)),l.update()}}function m(t,e,n){const i=document.getElementById("webgl-output");this.scene=new r.Z58,this.scene.background=new r.Q1f(0),this.camera=new r.qUd(i.offsetWidth/-2,i.offsetWidth/2,i.offsetHeight/2,i.offsetHeight/-2,-10,10),this.material=new r.BKk({uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},mixRatio:{value:0},threshold:{value:.1},useTexture:{value:!0},tMixTexture:{value:n.texture}},vertexShader:"\n    varying vec2 vUv;\n\t\t\tvoid main() {\n\t\t\t\tvUv = vec2( uv.x, uv.y );\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t}\n    ",fragmentShader:"\n      uniform float mixRatio;\n\t\t\tuniform sampler2D tDiffuse1;\n\t\t\tuniform sampler2D tDiffuse2;\n\t\t\tuniform sampler2D tMixTexture;\n\t\t\tuniform bool useTexture;\n\t\t\tuniform float threshold;\n\t\t\tvarying vec2 vUv;\n\t\t\tvoid main() {\n\t\t\t\tvec4 texel1 = texture2D( tDiffuse1, vUv );\n\t\t\t\tvec4 texel2 = texture2D( tDiffuse2, vUv );\n\t\t\t\tif (useTexture==true) {\n\t\t\t\t\tvec4 transitionTexel = texture2D( tMixTexture, vUv );\n\t\t\t\t\tfloat r = mixRatio * (1.0 + threshold * 2.0) - threshold;\n\t\t\t\t\tfloat mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);\n\t\t\t\t\tgl_FragColor = mix( texel1, texel2, mixf );\n\t\t\t\t} else {\n\t\t\t\t\tgl_FragColor = mix( texel2, texel1, mixRatio );\n\t\t\t\t}\n\t\t\t}\n    "});const s=new r.bdM(i.offsetWidth,i.offsetHeight);this.quad=new r.eaF(s,this.material),this.scene.add(this.quad),this.update=(t,e,i=!1)=>{this.scene1=t,this.scene2=e,this.material.uniforms.tDiffuse1.value=this.scene2.fbo.texture,this.material.uniforms.tDiffuse2.value=this.scene1.fbo.texture,this.material.uniforms.threshold.value=.1,this.material.uniforms.mixRatio.value=0,this.material.uniforms.tMixTexture.value=n.texture,this.material.uniforms.useTexture.value=n.useTexture,n.animate=i,n.transition=0},this.render=()=>{0===n.transition?this.scene1.render():n.transition>=1?(this.scene2.render(),n.animate=!1):(this.scene1.render(0,!0),this.scene2.render(0,!0),o.setRenderTarget(null),o.clear(),o.render(this.scene,this.camera)),n.animate&&n.transition<=1&&(n.transition=n.transition+n.transitionSpeed,this.material.uniforms.mixRatio.value=n.transition)},this.update(t,e,!1)}class d{constructor(){o=(0,s.Ki)({physicallyCorrectLights:!1}),u=(0,s.Gc)(new r.Pq0(20,30,10),55,1,2e4),l=new a.N(u,o.domElement),l.minDistance=5,l.maxDistance=20,l.enablePan=!1,l.enableDamping=!0,l.dampingFactor=.05;const t=new h({color:16711680}),e=new h({color:16776960}),n=new h({color:65280}),i=new h({color:255}),d=[],c=new r.Tap;for(let s=0;s<6;s++)d.push(c.load(`/images/textures/transition/transition${s+1}.png`));this.transitionParams={useTexture:!0,transition:0,transitionSpeed:.05,texture:d[0],animate:!1},this.transition=new m(t,e,this.transitionParams),this.gui=(0,s._f)();let f=0;const x={next:()=>{this.transitionParams.texture=d[parseInt(6*Math.random())],0===f?this.transition.update(t,e,!0):1===f?this.transition.update(e,n,!0):2===f?this.transition.update(n,i,!0):3===f&&(this.transition.update(i,t,!0),f=-1),f++}};this.gui.add(x,"next").name("下一个场景"),this.gui.add(this.transitionParams,"transitionSpeed",0,1).step(.01).name("过渡速度"),this.gui.add(this.transitionParams,"useTexture").name("使用图案"),this.render()}render(){this.transition.render(),requestAnimationFrame(this.render.bind(this))}beforeDestroy(){this.gui.destroy(),window.removeEventListener("resize",this._resizeFn)}}const c={id:"webgl-output",class:"webgl-output"},f={name:"SceneTransition"};var x=Object.assign(f,{setup(t){let e;return(0,i.sV)((()=>{e=new d})),(0,i.xo)((()=>{e&&e.beforeDestroy()})),(t,e)=>((0,i.uX)(),(0,i.CE)("div",c))}});const v=x;var g=v}}]);