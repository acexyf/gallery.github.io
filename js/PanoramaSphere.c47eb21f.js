"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[701],{61399:function(e,n,t){t.d(n,{A:function(){return c}});var r=t(75030),s=t(12724),i=t.n(s),o=t(68625),a=t(64634);const d={domId:"webgl-output",initPosition:new r.Pq0(20,10,10),fov:60,near:1,far:1e4,rendererOptions:{},clearColor:new r.Q1f(9737626),showStats:!1,helper:0,exposure:1,enableDamping:!0};class c{constructor(e){const n=d;(0,a.Gv)(e)&&Object.assign(n,e);const{fov:t,near:s,far:c,initPosition:h,rendererOptions:l={},clearColor:p,domId:w,showStats:u,helper:m,exposure:b,enableDamping:f}=n;this.scene=new r.Z58,this.camera=new r.ubm(t,window.innerWidth/window.innerHeight,s,c),this.camera.position.copy(h),this.camera.lookAt(this.scene.position);let g={antialias:!0};if((0,a.Gv)(l)&&(g=Object.assign({},g,l)),this.renderer=new r.JeP(g),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r.Wk7,this.renderer.setClearColor(p),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=r.kyO,this.renderer.toneMappingExposure=b,this.renderer.physicallyCorrectLights=!0,this.renderer.setPixelRatio(window.devicePixelRatio),document.getElementById(w)?.append(this.renderer.domElement),this.orbitControls=new o.N(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=f,this.clock=new r.zD7,(0,a.Et)(m)&&m>0&&this.scene.add(new r.IzY(m)),u){const e=new(i());this.stats=e,document.body.appendChild(e.dom)}}render(){this.orbitControls.update(),this.stats&&this.stats.update(),this.beforeRender&&this.beforeRender(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera)}}},48848:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(58258),s=t(61399),i=t(75030);const o={id:"webgl-output"},a={name:"PanoramaSphere"};var d=Object.assign(a,{setup(e){class n extends s.A{constructor(){super({fov:75,near:1,far:1e4,initPosition:new i.Pq0(0,0,1),clearColor:new i.Q1f(0)});const e=new i.Gu$(500,50,50);e.scale.x=-1;const n=new i.V9B({color:16777215,side:i.$EB,map:(new i.Tap).load("/images/panorama/panorama.jpg")}),t=new i.eaF(e,n);this.scene.add(t),this.render()}beforeRender(){}}return(0,r.sV)((()=>{new n})),(e,n)=>((0,r.uX)(),(0,r.CE)("div",o))}}),c=t(69337);const h=(0,c.A)(d,[["__scopeId","data-v-2dcbbf7d"]]);var l=h}}]);