"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[126],{61399:function(e,n,r){r.d(n,{A:function(){return p}});var t=r(75030),i=r(12724),s=r.n(i),a=r(68625),o=r(64634);const d={domId:"webgl-output",initPosition:new t.Pq0(20,10,10),fov:60,near:1,far:1e4,rendererOptions:{},clearColor:new t.Q1f(9737626),showStats:!1,helper:0,exposure:1,enableDamping:!0};class p{constructor(e){const n=d;(0,o.Gv)(e)&&Object.assign(n,e);const{fov:r,near:i,far:p,initPosition:c,rendererOptions:h={},clearColor:l,domId:m,showStats:u,helper:w,exposure:g,enableDamping:b}=n;this.scene=new t.Z58,this.camera=new t.ubm(r,window.innerWidth/window.innerHeight,i,p),this.camera.position.copy(c),this.camera.lookAt(this.scene.position);let f={antialias:!0};if((0,o.Gv)(h)&&(f=Object.assign({},f,h)),this.renderer=new t.JeP(f),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=t.Wk7,this.renderer.setClearColor(l),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=t.kyO,this.renderer.toneMappingExposure=g,this.renderer.physicallyCorrectLights=!0,this.renderer.setPixelRatio(window.devicePixelRatio),document.getElementById(m)?.append(this.renderer.domElement),this.orbitControls=new a.N(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=b,this.clock=new t.zD7,(0,o.Et)(w)&&w>0&&this.scene.add(new t.IzY(w)),u){const e=new(s());this.stats=e,document.body.appendChild(e.dom)}}render(){this.orbitControls.update(),this.stats&&this.stats.update(),this.beforeRender&&this.beforeRender(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera)}}},986:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(58258),i=r(61399),s=r(75030);const a={id:"webgl-output"},o={name:"PanoramaScene"};var d=Object.assign(o,{setup(e){class n extends i.A{constructor(){super({initPosition:new s.Pq0(0,0,.01),clearColor:new s.Q1f(0)});const e=["/images/panorama/pano_r.jpg","/images/panorama/pano_l.jpg","/images/panorama/pano_u.jpg","/images/panorama/pano_d.jpg","/images/panorama/pano_f.jpg","/images/panorama/pano_b.jpg"],n=new s.ScU,r=n.load(e);this.scene.background=r,this.scene.environment=r,this.render()}beforeRender(){}}return(0,t.sV)((()=>{new n})),(e,n)=>((0,t.uX)(),(0,t.CE)("div",a))}}),p=r(69337);const c=(0,p.A)(d,[["__scopeId","data-v-598ea602"]]);var h=c}}]);