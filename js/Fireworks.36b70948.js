"use strict";(self["webpackChunkcreation_gallery"]=self["webpackChunkcreation_gallery"]||[]).push([[79],{63149:function(t,e,r){r.r(e),r.d(e,{default:function(){return He}});var o=r(58258),i=(r(53297),r(75030));i.QCA;var s=r(69694),n=r(64634),a=r(68309),c=r(34257);function h(t,e){var r=-1,o=null==t?0:t.length;while(++r<o)if(!1===e(t[r],r,t))break;return t}var u=h,l=r(75337),p=r(26829),d=r(41960);function y(t,e){return t&&(0,p.A)(e,(0,d.A)(e),t)}var b=y,m=r(87942);function A(t,e){return t&&(0,p.A)(e,(0,m.A)(e),t)}var f=A,x=r(84776),v=r(39697),j=r(55345);function w(t,e){return(0,p.A)(t,(0,j.A)(t),e)}var M=w,G=r(12238),P=r(41373),g=r(39627),O=Object.getOwnPropertySymbols,k=O?function(t){var e=[];while(t)(0,G.A)(e,(0,j.A)(t)),t=(0,P.A)(t);return e}:g.A,E=k;function I(t,e){return(0,p.A)(t,E(t),e)}var U=I,D=r(32268),F=r(69433);function S(t){return(0,F.A)(t,m.A,E)}var L=S,_=r(25250),B=Object.prototype,H=B.hasOwnProperty;function W(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&H.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var q=W,z=r(21871);function C(t,e){var r=e?(0,z.A)(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var N=C,$=/\w*$/;function T(t){var e=new t.constructor(t.source,$.exec(t));return e.lastIndex=t.lastIndex,e}var V=T,Y=r(39275),R=Y.A?Y.A.prototype:void 0,Q=R?R.valueOf:void 0;function X(t){return Q?Object(Q.call(t)):{}}var K=X,Z=r(2319),J="[object Boolean]",tt="[object Date]",et="[object Map]",rt="[object Number]",ot="[object RegExp]",it="[object Set]",st="[object String]",nt="[object Symbol]",at="[object ArrayBuffer]",ct="[object DataView]",ht="[object Float32Array]",ut="[object Float64Array]",lt="[object Int8Array]",pt="[object Int16Array]",dt="[object Int32Array]",yt="[object Uint8Array]",bt="[object Uint8ClampedArray]",mt="[object Uint16Array]",At="[object Uint32Array]";function ft(t,e,r){var o=t.constructor;switch(e){case at:return(0,z.A)(t);case J:case tt:return new o(+t);case ct:return N(t,r);case ht:case ut:case lt:case pt:case dt:case yt:case bt:case mt:case At:return(0,Z.A)(t,r);case et:return new o;case rt:case st:return new o(t);case ot:return V(t);case it:return new o;case nt:return K(t)}}var xt=ft,vt=r(65970),jt=r(89383),wt=r(68596),Mt=r(31392),Gt="[object Map]";function Pt(t){return(0,Mt.A)(t)&&(0,_.A)(t)==Gt}var gt=Pt,Ot=r(64871),kt=r(14751),Et=kt.A&&kt.A.isMap,It=Et?(0,Ot.A)(Et):gt,Ut=It,Dt=r(61127),Ft="[object Set]";function St(t){return(0,Mt.A)(t)&&(0,_.A)(t)==Ft}var Lt=St,_t=kt.A&&kt.A.isSet,Bt=_t?(0,Ot.A)(_t):Lt,Ht=Bt,Wt=1,qt=2,zt=4,Ct="[object Arguments]",Nt="[object Array]",$t="[object Boolean]",Tt="[object Date]",Vt="[object Error]",Yt="[object Function]",Rt="[object GeneratorFunction]",Qt="[object Map]",Xt="[object Number]",Kt="[object Object]",Zt="[object RegExp]",Jt="[object Set]",te="[object String]",ee="[object Symbol]",re="[object WeakMap]",oe="[object ArrayBuffer]",ie="[object DataView]",se="[object Float32Array]",ne="[object Float64Array]",ae="[object Int8Array]",ce="[object Int16Array]",he="[object Int32Array]",ue="[object Uint8Array]",le="[object Uint8ClampedArray]",pe="[object Uint16Array]",de="[object Uint32Array]",ye={};function be(t,e,r,o,i,s){var n,a=e&Wt,h=e&qt,p=e&zt;if(r&&(n=i?r(t,o,i,s):r(t)),void 0!==n)return n;if(!(0,Dt.A)(t))return t;var y=(0,jt.A)(t);if(y){if(n=q(t),!a)return(0,v.A)(t,n)}else{var A=(0,_.A)(t),j=A==Yt||A==Rt;if((0,wt.A)(t))return(0,x.A)(t,a);if(A==Kt||A==Ct||j&&!i){if(n=h||j?{}:(0,vt.A)(t),!a)return h?U(t,f(n,t)):M(t,b(n,t))}else{if(!ye[A])return i?t:{};n=xt(t,A,a)}}s||(s=new c.A);var w=s.get(t);if(w)return w;s.set(t,n),Ht(t)?t.forEach((function(o){n.add(be(o,e,r,o,t,s))})):Ut(t)&&t.forEach((function(o,i){n.set(i,be(o,e,r,i,t,s))}));var G=p?h?L:D.A:h?m.A:d.A,P=y?void 0:G(t);return u(P||t,(function(o,i){P&&(i=o,o=t[i]),(0,l.A)(n,i,be(o,e,r,i,t,s))})),n}ye[Ct]=ye[Nt]=ye[oe]=ye[ie]=ye[$t]=ye[Tt]=ye[se]=ye[ne]=ye[ae]=ye[ce]=ye[he]=ye[Qt]=ye[Xt]=ye[Kt]=ye[Zt]=ye[Jt]=ye[te]=ye[ee]=ye[ue]=ye[le]=ye[pe]=ye[de]=!0,ye[Vt]=ye[Yt]=ye[re]=!1;var me=be,Ae=1,fe=4;function xe(t){return me(t,Ae|fe)}var ve=xe;const je=!1;let we=null;const Me=Math.PI,Ge=2,Pe={px:0,py:0,pz:0},ge={Red:16711747,Green:1375318,Blue:1998847,Purple:15076095,Gold:16760630,White:16777215},Oe=Object.values(ge),ke=window.innerWidth/2,Ee=window.innerHeight/2;class Ie{constructor(t={}){const{from:e=[10,0,20],to:r=[10,50,20],color:o=16777215}=t;this.done=!1,this.status=0,this.from=e,this.to=r,this.delayExplodeTimer=null,this.expoldeDelay=(0,n.hw)(300,800),this.startGeometry=new i.LoY,this.startGeometry.setAttribute("position",new i.qtW(e,3)),this.startMaterial=new i.BH$({size:je?1.5:1,color:o,transparent:!0,opacity:1}),this.startPoint=new i.ONl(this.startGeometry,this.startMaterial),we.add(this.startPoint);const s=ve(r);s[1]+=Ge,this.centerPoint=s,this.explodeMaterial=new i.BH$({size:1,color:o,transparent:!0,opacity:0})}explode(){}render(){if(0===this.status){const t=(0,s.Hr)(this.startGeometry),e=(0,n.Vt)(...t,...this.to);Math.ceil(e)<=1?this.startMaterial.opacity<=0?null===this.delayExplodeTimer&&(this.delayExplodeTimer=setTimeout((()=>{this.status=1,this.explodeMaterial.opacity=1,this.delayExplodeTimer=null,this.explode()}),this.expoldeDelay)):this.startMaterial.opacity-=.1:(this.startGeometry.attributes.position.array[0]+=(this.to[0]-this.startGeometry.attributes.position.array[0])/20,this.startGeometry.attributes.position.array[1]+=(this.to[1]-this.startGeometry.attributes.position.array[1])/20,this.startGeometry.attributes.position.array[2]+=(this.to[2]-this.startGeometry.attributes.position.array[2])/20,this.startGeometry.attributes.position.needsUpdate=!0)}}destroy(){this.startGeometry.dispose(),this.startMaterial.dispose(),we.remove(this.startPoint),this.explodeGeometry.dispose(),this.explodeMaterial.dispose(),we.remove(this.explodePoint),this.from=[],this.to=[]}}class Ue extends Ie{constructor(t){super(t);const e=(0,n.Ak)(20,40),r=new i.Gu$(e,20,(0,n.hw)(6,8),0,2*Me,.1*Me,.8*Me),o=[],s=[];for(let i=0;i<r.attributes.position.count;i++){let t=r.attributes.position.array[3*i]+this.centerPoint[0]+(0,n.Ak)(-2,2),e=r.attributes.position.array[3*i+1]+this.centerPoint[1]+(0,n.Ak)(-2,2),a=r.attributes.position.array[3*i+2]+this.centerPoint[2]+(0,n.Ak)(-2,2);o.push(t,e,a);const[c,h,u]=this.centerPoint;s.push(c,h,u)}this.dest=o,this.count=r.attributes.position.count,this.explodeGeometry=new i.LoY,this.explodeGeometry.setAttribute("position",new i.qtW(s,3)),this.explodePoint=new i.ONl(this.explodeGeometry,this.explodeMaterial),we.add(this.explodePoint)}render(){if(super.render(),1===this.status)if(this.explodeMaterial.opacity<=0)this.done=!0,this.explodeMaterial.opacity=0;else{for(let t=0;t<this.count;t++){const[e,r,o]=(0,s.Hr)(this.explodeGeometry,t),i=this.dest[3*t],n=this.dest[3*t+1],a=this.dest[3*t+2];this.explodeGeometry.attributes.position.array[3*t]+=(i-e)/20,this.explodeGeometry.attributes.position.array[3*t+1]+=(n-r)/20,this.explodeGeometry.attributes.position.array[3*t+2]+=(a-o)/20,this.explodeGeometry.attributes.position.needsUpdate=!0}this.explodeMaterial.opacity-=.015}}destroy(){super.destroy(),this.dest=[]}}class De extends Ie{constructor(t={}){super(t),this.dest=[],this.part=[],this.count=(0,n.hw)(120,150),this.explodeGeometry=new i.LoY,this.explodeGeometry.setAttribute("position",new i.qtW([],3)),this.explodePoint=new i.ONl(this.explodeGeometry,this.explodeMaterial),we.add(this.explodePoint)}explode(){const t=[],e=[],r=[];for(let o=0;o<this.count;o++){const[r,o,i]=this.centerPoint,[s,a,c]=(0,n.$w)(...this.centerPoint,(0,n.hw)(40,80));e.push(r,o,i),t.push(s,a,c)}this.explodeGeometry.setAttribute("position",new i.qtW(e,3)),this.explodeMaterial.opacity=1,this.dest=t,this.part=r}render(){if(super.render(),1===this.status)if(this.explodeMaterial.opacity<=0)this.done=!0,this.explodeMaterial.opacity=0;else{for(let t=0;t<this.count;t++){const[e,r,o]=(0,s.Hr)(this.explodeGeometry,t),i=this.dest[3*t],n=this.dest[3*t+1],a=this.dest[3*t+2];this.explodeGeometry.attributes.position.array[3*t]+=(i-e)/20,this.explodeGeometry.attributes.position.array[3*t+1]+=(n-r)/20,this.explodeGeometry.attributes.position.array[3*t+2]+=(a-o)/20,this.explodeGeometry.attributes.position.needsUpdate=!0}this.explodeMaterial.opacity-=.015}}destroy(){super.destroy(),this.dest=[]}}class Fe{constructor(){this.scene=(0,s.H7)(),this.scene.background=new i.Q1f(516),this.camera=(0,s.Gc)(new i.Pq0(400,0,0),55,5,2e4),this.renderer=(0,s.Ki)(),this.controls=(0,s.ZN)(this.camera,this.renderer,!1),we=this.scene,this.clock=(0,s.$i)(),this.timer=null,this.list=[],setInterval((()=>{this.list.map((t=>{t.done&&t.destroy()}))}),2e3),this.pushItem(),je||setInterval((()=>{this.pushItem()}),1500),this._onPointerMove=this.onPointerMove.bind(this),this._onMouseOut=this.onMouseOut.bind(this),document.body.addEventListener("pointermove",this._onPointerMove),document.body.addEventListener("mouseout",this._onMouseOut),this.render()}onPointerMove(t){!1!==t.isPrimary&&(Pe.px=t.clientX-ke,Pe.py=t.clientY-Ee)}onMouseOut(t){Pe.px=0,Pe.py=0,Pe.pz=0}pushItem(){const t=je?1:(0,n.hw)(8,16);for(let e=0;e<t;e++){const t=(0,n.Ak)(0,150),e=(0,n.Ak)(0,100),r=(0,n.Ak)(50,100);Math.ceil(Math.random()*Oe.length);this.list.push(Math.random()>.5?new Ue({from:[t,-200,e],to:[t,r,e],color:16777215*Math.random()}):new De({from:[t,-200,e],to:[t,r,e],color:16777215*Math.random()}))}}render(){a.Ay.update(),this.controls.update(this.clock.getDelta()),this.list.map((t=>{t.render()})),this.camera.position.z+=(Pe.px-this.camera.position.z)/100,this.camera.position.y+=(Pe.py-this.camera.position.y)/100,this.renderer.render(this.scene,this.camera),this.timer=requestAnimationFrame(this.render.bind(this))}beforeDestroy(){this.timer&&cancelAnimationFrame(this.timer),document.body.removeEventListener("pointermove",this._onPointerMove),document.body.removeEventListener("mouseout",this._onMouseOut)}}const Se={id:"webgl-output",class:"webgl-output"},Le={name:"Fireworks"};var _e=Object.assign(Le,{setup(t){let e=null;return(0,o.sV)((()=>{e=new Fe})),(0,o.xo)((()=>{e&&e.beforeDestroy()})),(t,e)=>((0,o.uX)(),(0,o.CE)("div",Se))}});const Be=_e;var He=Be}}]);