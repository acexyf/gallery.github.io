"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[621],{11027:function(e,n,t){t.d(n,{hw:function(){return u},AU:function(){return c.AU},Gc:function(){return c.Gc},_f:function(){return c._f},Ki:function(){return c.Ki},H7:function(){return c.H7},n_:function(){return a},Et:function(){return s},Gv:function(){return r},ZF:function(){return i},Kg:function(){return o},X6:function(){return h},cM:function(){return d}});t(53297);function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e){if(r(e)){const n=Object.keys(e);return 0===n.length}return!1}function o(e){return"string"===typeof e}function s(e){return"number"===typeof e}function a(e){return"object"===typeof HTMLElement?e instanceof HTMLElement:e&&"object"===typeof e&&1===e.nodeType&&"string"===typeof e.nodeName}var c=t(21966);function u(e=1,n=10){return Math.floor(Math.random()*(n-e+1))+e}function d(e,n=!0){if(""===e||0===e||!e)return"0";const t=e+"",r=t.indexOf(".");let i="",o="";-1!==r?(n&&(i=t.substring(r)),o=t.substring(0,r)):o=t;let s=o.split("");if(s.length>=4){const e=[],n=s.reverse();for(let t=0;t<n.length;t++)e.push(n[t]),(t+1)%3===0&&e.push(",");s=e.reverse(),s.length&&","===s[0]&&s.shift()}return s.join("")+(n?i:"")}function h(e,n=2){try{const t=parseFloat(e);return t.toFixed(n)}catch(t){return"0"}}},61399:function(e,n,t){t.d(n,{A:function(){return u}});var r=t(75030),i=t(12724),o=t.n(i),s=t(68625),a=t(11027);const c={domId:"webgl-output",initPosition:new r.Pq0(20,10,10),fov:60,near:1,far:1e4,rendererOptions:{},clearColor:new r.Q1f(9737626),showStats:!1,helper:0,exposure:1,enableDamping:!0};class u{constructor(e){const n=c;(0,a.Gv)(e)&&Object.assign(n,e);const{fov:t,near:i,far:u,initPosition:d,rendererOptions:h={},clearColor:l,domId:f,showStats:p,helper:w,exposure:m,enableDamping:b}=n;this.scene=new r.Z58,this.camera=new r.ubm(t,window.innerWidth/window.innerHeight,i,u),this.camera.position.copy(d),this.camera.lookAt(this.scene.position);let g={antialias:!0};if((0,a.Gv)(h)&&(g=Object.assign({},g,h)),this.renderer=new r.JeP(g),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r.Wk7,this.renderer.setClearColor(l),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=r.kyO,this.renderer.toneMappingExposure=m,this.renderer.physicallyCorrectLights=!0,this.renderer.setPixelRatio(window.devicePixelRatio),document.getElementById(f)?.append(this.renderer.domElement),this.orbitControls=new s.N(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=b,this.clock=new r.zD7,(0,a.Et)(w)&&w>0&&this.scene.add(new r.IzY(w)),p){const e=new(o());this.stats=e,document.body.appendChild(e.dom)}}render(){this.orbitControls.update(),this.stats&&this.stats.update(),this.beforeRender&&this.beforeRender(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera)}}},40764:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(58258),i=t(61399),o=t(75030);const s={id:"webgl-output"},a={name:"SolarSystem"};var c=Object.assign(a,{setup(e){class n extends i.A{constructor(){super({initPosition:new o.Pq0(0,500,0),clearColor:new o.Q1f(0)});const e=new o.Tap,n=new o.eaF(new o.Gu$(200,50,50),new o.V9B({map:e.load("/images/solar-system/sun.jpeg")}));n.position.set(0,0,0),this.scene.add(n);const t=new o.eaF(new o.Gu$(8,50,50),new o.V9B({map:e.load("/images/solar-system/earth.jpg")}));t.position.set(400,0,0),this.scene.add(t);new o.eaF(new o.Gu$(2,50,50),new o.V9B({map:e.load("/images/solar-system/moon.jpg")}));const r=new o.IzY(100);this.scene.add(r),this.render()}beforeRender(){}}return(0,r.sV)((()=>{new n})),(e,n)=>((0,r.uX)(),(0,r.CE)("div",s))}}),u=t(69337);const d=(0,u.A)(c,[["__scopeId","data-v-4fb2fbb2"]]);var h=d}}]);