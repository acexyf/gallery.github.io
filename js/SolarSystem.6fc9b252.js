"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[621],{11027:function(e,n,t){t.d(n,{hw:function(){return h},AU:function(){return d.AU},Gc:function(){return d.Gc},_f:function(){return d._f},Ki:function(){return d.Ki},H7:function(){return d.H7},C8:function(){return s},n_:function(){return u},Et:function(){return c},Gv:function(){return r},ZF:function(){return o},Kg:function(){return a},X6:function(){return f},on:function(){return p},cM:function(){return l}});t(53297);function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e){if(r(e)){const n=Object.keys(e);return 0===n.length}return!1}function i(e){return"[object Undefined]"===Object.prototype.toString.call(e)}function s(e){return!i(e)}function a(e){return"string"===typeof e}function c(e){return"number"===typeof e}function u(e){return"object"===typeof HTMLElement?e instanceof HTMLElement:e&&"object"===typeof e&&1===e.nodeType&&"string"===typeof e.nodeName}var d=t(21966);function h(e=1,n=10){return Math.floor(Math.random()*(n-e+1))+e}function l(e,n=!0){if(""===e||0===e||!e)return"0";const t=e+"",r=t.indexOf(".");let o="",i="";-1!==r?(n&&(o=t.substring(r)),i=t.substring(0,r)):i=t;let s=i.split("");if(s.length>=4){const e=[],n=s.reverse();for(let t=0;t<n.length;t++)e.push(n[t]),(t+1)%3===0&&e.push(",");s=e.reverse(),s.length&&","===s[0]&&s.shift()}return s.join("")+(n?o:"")}function f(e,n=2){try{const t=parseFloat(e);return t.toFixed(n)}catch(t){return"0"}}function p(e,n,t){e&&n&&t&&e.addEventListener(n,t,!1)}},61399:function(e,n,t){t.d(n,{A:function(){return u}});var r=t(75030),o=t(12724),i=t.n(o),s=t(68625),a=t(11027);const c={domId:"webgl-output",initPosition:new r.Pq0(20,10,10),fov:60,near:1,far:1e4,rendererOptions:{},clearColor:new r.Q1f(9737626),showStats:!1,helper:0,exposure:1,enableDamping:!0};class u{constructor(e){const n=c;(0,a.Gv)(e)&&Object.assign(n,e);const{fov:t,near:o,far:u,initPosition:d,rendererOptions:h={},clearColor:l,domId:f,showStats:p,helper:w,exposure:m,enableDamping:b}=n;this.scene=new r.Z58,this.camera=new r.ubm(t,window.innerWidth/window.innerHeight,o,u),this.camera.position.copy(d),this.camera.lookAt(this.scene.position);let g={antialias:!0};if((0,a.Gv)(h)&&(g=Object.assign({},g,h)),this.renderer=new r.JeP(g),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r.Wk7,this.renderer.setClearColor(l),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=r.kyO,this.renderer.toneMappingExposure=m,this.renderer.physicallyCorrectLights=!0,this.renderer.setPixelRatio(window.devicePixelRatio),document.getElementById(f)?.append(this.renderer.domElement),this.orbitControls=new s.N(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=b,this.clock=new r.zD7,(0,a.Et)(w)&&w>0&&this.scene.add(new r.IzY(w)),p){const e=new(i());this.stats=e,document.body.appendChild(e.dom)}}render(){this.orbitControls.update(),this.stats&&this.stats.update(),this.beforeRender&&this.beforeRender(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera)}}},40764:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(58258),o=t(61399),i=t(75030);const s={id:"webgl-output"},a={name:"SolarSystem"};var c=Object.assign(a,{setup(e){class n extends o.A{constructor(){super({initPosition:new i.Pq0(0,500,0),clearColor:new i.Q1f(0)});const e=new i.Tap,n=new i.eaF(new i.Gu$(200,50,50),new i.V9B({map:e.load("/images/solar-system/sun.jpeg")}));n.position.set(0,0,0),this.scene.add(n);const t=new i.eaF(new i.Gu$(8,50,50),new i.V9B({map:e.load("/images/solar-system/earth.jpg")}));t.position.set(400,0,0),this.scene.add(t);new i.eaF(new i.Gu$(2,50,50),new i.V9B({map:e.load("/images/solar-system/moon.jpg")}));const r=new i.IzY(100);this.scene.add(r),this.render()}beforeRender(){}}return(0,r.sV)((()=>{new n})),(e,n)=>((0,r.uX)(),(0,r.CE)("div",s))}}),u=t(69337);const d=(0,u.A)(c,[["__scopeId","data-v-4fb2fbb2"]]);var h=d}}]);