(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[904],{6954:function(e){(function(n,t){e.exports=t()})(0,(function(){var e=function(){function n(e){return i.appendChild(e.dom),e}function t(e){for(var n=0;n<i.children.length;n++)i.children[n].style.display=n===e?"block":"none";r=e}var r=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),t(++r%i.children.length)}),!1);var a=(performance||Date).now(),o=a,s=0,l=n(new e.Panel("FPS","#0ff","#002")),c=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new e.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:i,addPanel:n,showPanel:t,begin:function(){a=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(c.update(e-a,200),e>o+1e3&&(l.update(1e3*s/(e-o),100),o=e,s=0,d)){var n=performance.memory;d.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:t}};return e.Panel=function(e,n,t){var r=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,d=2*o,p=3*o,h=15*o,u=74*o,f=30*o,m=document.createElement("canvas");m.width=s,m.height=l,m.style.cssText="width:80px;height:48px";var w=m.getContext("2d");return w.font="bold "+9*o+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=t,w.fillRect(0,0,s,l),w.fillStyle=n,w.fillText(e,c,d),w.fillRect(p,h,u,f),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(p,h,u,f),{dom:m,update:function(l,g){r=Math.min(r,l),i=Math.max(i,l),w.fillStyle=t,w.globalAlpha=1,w.fillRect(0,0,s,h),w.fillStyle=n,w.fillText(a(l)+" "+e+" ("+a(r)+"-"+a(i)+")",c,d),w.drawImage(m,p+o,h,u-o,f,p,h,u-o,f),w.fillRect(p+u-o,h,o,f),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(p+u-o,h,o,a((1-l/g)*f))}}},e}))},5791:function(e,n,t){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e){return"number"===typeof e}t.d(n,{Kn:function(){return r},hj:function(){return i}})},4040:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(185),i=t(6954),a=t.n(i),o=t(7557),s=t(5791);const l={domId:"webgl-output",initPosition:new r.Pa4(20,10,10),fov:60,near:1,far:1e4,rendererOptions:{},clearColor:new r.Ilk(9737626),showStats:!1,helper:0,exposure:1,enableDamping:!0};class c{constructor(e){const n=l;(0,s.Kn)(e)&&Object.assign(n,e);const{fov:t,near:i,far:c,initPosition:d,rendererOptions:p={},clearColor:h,domId:u,showStats:f,helper:m,exposure:w,enableDamping:g}=n;this.scene=new r.xsS,this.camera=new r.cPb(t,window.innerWidth/window.innerHeight,i,c),this.camera.position.copy(d),this.camera.lookAt(this.scene.position);let b={antialias:!0};if((0,s.Kn)(p)&&(b=Object.assign({},b,p)),this.renderer=new r.CP7(b),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r.ntZ,this.renderer.setClearColor(h),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=r.EoG,this.renderer.toneMappingExposure=w,this.renderer.physicallyCorrectLights=!0,this.renderer.setPixelRatio(window.devicePixelRatio),document.getElementById(u)?.append(this.renderer.domElement),this.orbitControls=new o.z(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=g,this.clock=new r.SUY,(0,s.hj)(m)&&m>0&&this.scene.add(new r.y8_(m)),f){const e=new(a());this.stats=e,document.body.appendChild(e.dom)}}render(){this.orbitControls.update(),this.stats&&this.stats.update(),this.beforeRender&&this.beforeRender(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera)}}},7808:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(4310),i=t(4040),a=t(185);const o={id:"webgl-output"},s={name:"PanoramaScene"};var l=Object.assign(s,{setup(e){class n extends i.Z{constructor(){super({initPosition:new a.Pa4(0,0,.01),clearColor:new a.Ilk(0)});const e=["/images/panorama/pano_r.jpg","/images/panorama/pano_l.jpg","/images/panorama/pano_u.jpg","/images/panorama/pano_d.jpg","/images/panorama/pano_f.jpg","/images/panorama/pano_b.jpg"],n=new a.cBK,t=n.load(e);this.scene.background=t,this.scene.environment=t,this.render()}beforeRender(){}}return(0,r.bv)((()=>{new n})),(e,n)=>((0,r.wg)(),(0,r.iD)("div",o))}}),c=t(1256);const d=(0,c.Z)(l,[["__scopeId","data-v-598ea602"]]);var p=d}}]);