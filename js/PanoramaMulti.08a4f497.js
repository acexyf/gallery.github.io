'use strict';const a10_0xa38790=a10_0x1bd0;function a10_0x1bd0(_0x1e59b9,_0x2ac928){const _0x13b4b3=a10_0x13b4();return a10_0x1bd0=function(_0x1bd076,_0x5169e3){_0x1bd076=_0x1bd076-0x1ef;let _0x1f5cc0=_0x13b4b3[_0x1bd076];return _0x1f5cc0;},a10_0x1bd0(_0x1e59b9,_0x2ac928);}function a10_0x13b4(){const _0x31b8bb=['bdM','minDistance','scene-item','destroy','k6q','3935694EecgdK','value','.select-scene','/images/panorama/train.jpg','start','isArray','tDiffuse2','name','background','setRenderTarget','M4\x2013h6c.55\x200\x201-.45\x201-1V4c0-.55-.45-1-1-1H4c-.55\x200-1\x20.45-1\x201v8c0\x20.55.45\x201\x201\x201zm0\x208h6c.55\x200\x201-.45\x201-1v-4c0-.55-.45-1-1-1H4c-.55\x200-1\x20.45-1\x201v4c0\x20.55.45\x201\x201\x201zm10\x200h6c.55\x200\x201-.45\x201-1v-8c0-.55-.45-1-1-1h-6c-.55\x200-1\x20.45-1\x201v8c0\x20.55.45\x201\x201\x201zM13\x204v4c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1V4c0-.55-.45-1-1-1h-6c-.55\x200-1\x20.45-1\x201z','V9B','innerHeight','enablePan','\x0a\x20\x20\x20\x20\x20\x20uniform\x20float\x20mixRatio;\x0a\x09\x09\x09uniform\x20sampler2D\x20tDiffuse1;\x0a\x09\x09\x09uniform\x20sampler2D\x20tDiffuse2;\x0a\x09\x09\x09uniform\x20sampler2D\x20tMixTexture;\x0a\x09\x09\x09uniform\x20bool\x20useTexture;\x0a\x09\x09\x09uniform\x20float\x20threshold;\x0a\x09\x09\x09varying\x20vec2\x20vUv;\x0a\x09\x09\x09void\x20main()\x20{\x0a\x09\x09\x09\x09vec4\x20texel1\x20=\x20texture2D(\x20tDiffuse1,\x20vUv\x20);\x0a\x09\x09\x09\x09vec4\x20texel2\x20=\x20texture2D(\x20tDiffuse2,\x20vUv\x20);\x0a\x09\x09\x09\x09if\x20(useTexture==true)\x20{\x0a\x09\x09\x09\x09\x09vec4\x20transitionTexel\x20=\x20texture2D(\x20tMixTexture,\x20vUv\x20);\x0a\x09\x09\x09\x09\x09float\x20r\x20=\x20mixRatio\x20*\x20(1.0\x20+\x20threshold\x20*\x202.0)\x20-\x20threshold;\x0a\x09\x09\x09\x09\x09float\x20mixf=clamp((transitionTexel.r\x20-\x20r)*(1.0/threshold),\x200.0,\x201.0);\x0a\x09\x09\x09\x09\x09gl_FragColor\x20=\x20mix(\x20texel1,\x20texel2,\x20mixf\x20);\x0a\x09\x09\x09\x09}\x20else\x20{\x0a\x09\x09\x09\x09\x09gl_FragColor\x20=\x20mix(\x20texel2,\x20texel1,\x20mixRatio\x20);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20','update','\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x09\x09\x09void\x20main()\x20{\x0a\x09\x09\x09\x09vUv\x20=\x20vec2(\x20uv.x,\x20uv.y\x20);\x0a\x09\x09\x09\x09gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20','path','length','__scopeId','transition','890pbpLsF','scene1','/images/panorama/thumb/thumb4.png','543125jQfqNE','4054892rpTjcO','delete','show','render','PanoramaMulti','/images/panorama/veranda.jpg','/images/panorama/kandao3.jpg','14BaXgtm','Tap','36971496hGGyIa','scene-list_box','push','position','add','uniforms','domElement','animateCamera','querySelector','bind','qUd','scene4','2dtZXhL','random','Tween','120352DdVikE','n-icon','changeScene','scene5','setSize','image','DashboardRound','load','http://www.w3.org/1999/xlink','0\x200\x2024\x2024','882PxfUPE','log','Gu$','getElementById','material','div','Z58','tDiffuse1','19547wqHRtL','defineComponent','onComplete','updateProjectionMatrix','relative','data-v-6f216736','webpackChunkcreation_gallery','mixRatio','scene','aspect','fbo','mouseup','transitionSpeed','arg','5VWbTKn','transitionParams','scene2','select-scene','texture','contains','sceneFrom','offsetWidth','sceneTo','_resizeFn','.png','threshold','step','quad','dampingFactor','removeEventListener','fov','onClick','过渡速度','src','innerWidth','textures','animate','popperRef','useTexture','addEventListener','scene-item_desc','2344935wguDsM','offsetHeight','/images/panorama/thumb/thumb5.png','beforeDestroy','img','svg','http://www.w3.org/2000/svg','webgl-output','/images/panorama/simons_town_harbour.jpg','选择场景','tMixTexture','createElementBlock','eaF','Pq0','clear','currentColor','camera','scene3','includes'];a10_0x13b4=function(){return _0x31b8bb;};return a10_0x13b4();}(function(_0x49c237,_0x478568){const _0x3bef50=a10_0x1bd0,_0x25e894=_0x49c237();while(!![]){try{const _0x231d4e=parseInt(_0x3bef50(0x26f))/0x1+-parseInt(_0x3bef50(0x201))/0x2*(-parseInt(_0x3bef50(0x23f))/0x3)+parseInt(_0x3bef50(0x270))/0x4*(-parseInt(_0x3bef50(0x224))/0x5)+-parseInt(_0x3bef50(0x257))/0x6*(parseInt(_0x3bef50(0x1f3))/0x7)+parseInt(_0x3bef50(0x204))/0x8*(-parseInt(_0x3bef50(0x20e))/0x9)+parseInt(_0x3bef50(0x26c))/0xa*(parseInt(_0x3bef50(0x216))/0xb)+parseInt(_0x3bef50(0x1f5))/0xc;if(_0x231d4e===_0x478568)break;else _0x25e894['push'](_0x25e894['shift']());}catch(_0x412f2b){_0x25e894['push'](_0x25e894['shift']());}}}(a10_0x13b4,0xba82c));(self[a10_0xa38790(0x21c)]=self['webpackChunkcreation_gallery']||[])[a10_0xa38790(0x1f7)]([[0x1fc9],{0xd2d9:function(_0x1d2dba,_0x166001,_0x48276f){const _0x55d2f7=a10_0xa38790,_0x330ce4=_0x48276f(0xf4c6),_0xd386b7={'xmlns':_0x55d2f7(0x245),'xmlns:xlink':_0x55d2f7(0x20c),'viewBox':_0x55d2f7(0x20d)},_0x5872e0=(0x0,_0x330ce4['createElementVNode'])(_0x55d2f7(0x268),{'d':_0x55d2f7(0x261),'fill':_0x55d2f7(0x24e)},null,-0x1),_0x4f58e4=[_0x5872e0];_0x166001['A']=(0x0,_0x330ce4[_0x55d2f7(0x217)])({'name':_0x55d2f7(0x20a),'render':function(_0x2e64dc,_0x4bfb68){const _0xe86713=_0x55d2f7;return(0x0,_0x330ce4['openBlock'])(),(0x0,_0x330ce4[_0xe86713(0x24a)])(_0xe86713(0x244),_0xd386b7,_0x4f58e4);}});},0x64ff:function(_0x583c3d,_0x5f1e2e,_0x1a9779){const _0x59a835=a10_0xa38790;_0x1a9779['r'](_0x5f1e2e),_0x1a9779['d'](_0x5f1e2e,{'default':function(){return _0x3ba13f;}}),_0x1a9779(0xd031);var _0x534cd8=_0x1a9779(0xe392),_0x2c4d7b=_0x1a9779(0xb85f),_0x406d5d=_0x1a9779(0x449a),_0x5130cb=_0x1a9779(0xd2d9),_0x141e56=_0x1a9779(0xfc7a),_0x2d86db=_0x1a9779(0x12516),_0x3fe3f7=_0x1a9779(0x10ad5),_0x14063a=_0x1a9779(0x10c11);let _0x50b41,_0x426d04,_0x4f38a4,_0x43df64,_0x53f136,_0x5dac22;class _0x5eea06{constructor(_0x41c27b){const _0x4a0a47=a10_0x1bd0,{url:_0x48fa2b}=_0x41c27b;this[_0x4a0a47(0x21e)]=(0x0,_0x141e56['H7'])();const _0x47fca3={'minFilter':_0x2d86db[_0x4a0a47(0x256)],'magFilter':_0x2d86db[_0x4a0a47(0x256)],'stencilBuffer':!0x1},_0x2e96a9=new _0x2d86db[(_0x4a0a47(0x210))](0x1f4,0x32,0x32);_0x2e96a9['scale'](-0x1,0x1,0x1);const _0x51c21a=new _0x2d86db[(_0x4a0a47(0x262))]({'map':new _0x2d86db[(_0x4a0a47(0x1f4))]()['load'](_0x48fa2b)}),_0x228117=new _0x2d86db[(_0x4a0a47(0x24b))](_0x2e96a9,_0x51c21a);this[_0x4a0a47(0x21e)][_0x4a0a47(0x1f9)](_0x228117),this['fbo']=new _0x2d86db['nWS'](_0x426d04,_0x4f38a4,_0x47fca3);}[_0x59a835(0x1ef)](_0x9b9220=0x0,_0xf7e688=!0x1){const _0x2981c0=_0x59a835;_0xf7e688?(_0x50b41[_0x2981c0(0x260)](this[_0x2981c0(0x220)]),_0x50b41[_0x2981c0(0x24d)](),_0x50b41['render'](this[_0x2981c0(0x21e)],_0x43df64)):(_0x50b41[_0x2981c0(0x260)](null),_0x50b41['render'](this['scene'],_0x43df64)),_0x53f136[_0x2981c0(0x266)]();}}function _0x14583a(_0x4bdffe){const _0x46f1bf=_0x59a835,_0x4f31c5={'transition':0x0,'texture':void 0x0,'useTexture':!0x1,'transitionSpeed':0.05,'animate':!0x1};this[_0x46f1bf(0x22a)]=_0x4bdffe,this[_0x46f1bf(0x22c)]=void 0x0,this[_0x46f1bf(0x21e)]=new _0x2d86db[(_0x46f1bf(0x214))](),this[_0x46f1bf(0x21e)][_0x46f1bf(0x25f)]=new _0x2d86db['Q1f'](0x0),this[_0x46f1bf(0x24f)]=new _0x2d86db[(_0x46f1bf(0x1ff))](_0x426d04/-0x2,_0x426d04/0x2,_0x4f38a4/0x2,_0x4f38a4/-0x2,-0xa,0xa),this[_0x46f1bf(0x212)]=new _0x2d86db['BKk']({'uniforms':{'tDiffuse1':{'value':null},'tDiffuse2':{'value':null},'mixRatio':{'value':0x0},'threshold':{'value':0.1},'useTexture':{'value':!0x0},'tMixTexture':{'value':_0x4f31c5[_0x46f1bf(0x228)]}},'vertexShader':_0x46f1bf(0x267),'fragmentShader':_0x46f1bf(0x265)});const _0x284bf6=new _0x2d86db[(_0x46f1bf(0x252))](_0x426d04,_0x4f38a4);this[_0x46f1bf(0x231)]=new _0x2d86db[(_0x46f1bf(0x24b))](_0x284bf6,this[_0x46f1bf(0x212)]),this['scene'][_0x46f1bf(0x1f9)](this[_0x46f1bf(0x231)]),this[_0x46f1bf(0x266)]=(_0xc5f8ab,_0x58f182)=>{const _0x46dc6f=_0x46f1bf;if(_0x4f31c5[_0x46dc6f(0x23a)])return!0x1;const {texture:_0x448921,useTexture:_0x3b4846=!0x1,transitionSpeed:_0x381cf6=0.05}=_0x58f182;return this[_0x46dc6f(0x22c)]=_0xc5f8ab,_0x4f31c5[_0x46dc6f(0x26b)]=0x0,_0x4f31c5[_0x46dc6f(0x228)]=_0x448921,_0x4f31c5[_0x46dc6f(0x222)]=_0x381cf6,_0x4f31c5[_0x46dc6f(0x23c)]=_0x3b4846,_0x4f31c5[_0x46dc6f(0x23a)]=!0x0,this[_0x46dc6f(0x212)][_0x46dc6f(0x1fa)][_0x46dc6f(0x215)]['value']=this[_0x46dc6f(0x22c)]['fbo']['texture'],this[_0x46dc6f(0x212)][_0x46dc6f(0x1fa)][_0x46dc6f(0x25d)]['value']=this[_0x46dc6f(0x22a)][_0x46dc6f(0x220)][_0x46dc6f(0x228)],this['material']['uniforms'][_0x46dc6f(0x22f)][_0x46dc6f(0x258)]=0.1,this['material'][_0x46dc6f(0x1fa)]['mixRatio'][_0x46dc6f(0x258)]=0x0,this[_0x46dc6f(0x212)][_0x46dc6f(0x1fa)][_0x46dc6f(0x249)][_0x46dc6f(0x258)]=_0x448921,this[_0x46dc6f(0x212)][_0x46dc6f(0x1fa)][_0x46dc6f(0x23c)][_0x46dc6f(0x258)]=_0x3b4846,!0x0;},this['render']=()=>{const _0x3e7bb6=_0x46f1bf;0x0===_0x4f31c5[_0x3e7bb6(0x26b)]?(0x0,_0x141e56['C8'])(this[_0x3e7bb6(0x22a)])&&this[_0x3e7bb6(0x22a)]['render']():_0x4f31c5[_0x3e7bb6(0x26b)]>=0x1?((0x0,_0x141e56['C8'])(this[_0x3e7bb6(0x22c)])&&this[_0x3e7bb6(0x22c)]['render'](),_0x4f31c5['animate']=!0x1,setTimeout(()=>{const _0x5a45a7=_0x3e7bb6;this['sceneFrom']=this[_0x5a45a7(0x22c)],_0x4f31c5['transition']=0x0;},0xa)):((0x0,_0x141e56['C8'])(this[_0x3e7bb6(0x22a)])&&this[_0x3e7bb6(0x22a)][_0x3e7bb6(0x1ef)](0x0,!0x0),(0x0,_0x141e56['C8'])(this[_0x3e7bb6(0x22c)])&&this[_0x3e7bb6(0x22c)]['render'](0x0,!0x0),_0x50b41[_0x3e7bb6(0x260)](null),_0x50b41[_0x3e7bb6(0x24d)](),_0x50b41[_0x3e7bb6(0x1ef)](this[_0x3e7bb6(0x21e)],this[_0x3e7bb6(0x24f)])),_0x4f31c5[_0x3e7bb6(0x23a)]&&_0x4f31c5[_0x3e7bb6(0x26b)]<=0x1&&(_0x4f31c5['transition']=_0x4f31c5['transition']+_0x4f31c5['transitionSpeed'],this[_0x3e7bb6(0x212)][_0x3e7bb6(0x1fa)][_0x3e7bb6(0x21d)][_0x3e7bb6(0x258)]=_0x4f31c5['transition']);};}class _0x215272{constructor(){const _0x348930=_0x59a835,_0x396a4b=document[_0x348930(0x211)](_0x348930(0x246));_0x426d04=_0x396a4b[_0x348930(0x22b)],_0x4f38a4=_0x396a4b[_0x348930(0x240)],_0x50b41=(0x0,_0x141e56['Ki'])(),_0x43df64=(0x0,_0x141e56['Gc'])(new _0x2d86db['Pq0'](0x0,0x1f4,0x2),0x64,0x1,0x4e20),_0x53f136=new _0x14063a['N'](_0x43df64,_0x50b41[_0x348930(0x1fb)]),_0x53f136[_0x348930(0x253)]=0x5,_0x53f136['maxDistance']=0x14,_0x53f136[_0x348930(0x264)]=!0x1,_0x53f136['enableDamping']=!0x0,_0x53f136[_0x348930(0x232)]=0.05,this[_0x348930(0x26d)]=new _0x5eea06({'url':_0x348930(0x247)}),this['scene2']=new _0x5eea06({'url':'/images/panorama/sunset.jpg'}),this[_0x348930(0x250)]=new _0x5eea06({'url':_0x348930(0x1f2)}),this[_0x348930(0x200)]=new _0x5eea06({'url':_0x348930(0x1f1)}),this[_0x348930(0x207)]=new _0x5eea06({'url':_0x348930(0x25a)}),this[_0x348930(0x239)]=[];const _0x42bbf4=new _0x2d86db[(_0x348930(0x1f4))]();for(let _0x4be2fd=0x0;_0x4be2fd<0x6;_0x4be2fd++)this[_0x348930(0x239)]['push'](_0x42bbf4[_0x348930(0x20b)]('/images/textures/transition/transition'+(_0x4be2fd+0x1)+_0x348930(0x22e)));this[_0x348930(0x225)]={'useTexture':!0x1,'transition':0x0,'transitionSpeed':0.05,'texture':this[_0x348930(0x239)][0x0],'animate':!0x1},this[_0x348930(0x26b)]=new _0x14583a(this[_0x348930(0x26d)]),_0x5dac22=(0x0,_0x141e56['_f'])(),_0x5dac22[_0x348930(0x1f9)](this['transitionParams'],_0x348930(0x222),0x0,0x1)[_0x348930(0x230)](0.01)[_0x348930(0x25e)](_0x348930(0x236)),_0x5dac22[_0x348930(0x1f9)](this[_0x348930(0x225)],_0x348930(0x23c))[_0x348930(0x25e)]('是否使用图案'),setTimeout(()=>{this['animateCamera']();},0x5dc),this[_0x348930(0x22d)]=this['resizeFn'][_0x348930(0x1fe)](this),window[_0x348930(0x23d)]('resize',this[_0x348930(0x22d)]),this['render']();}[_0x59a835(0x1fc)](){const _0x556e0e=_0x59a835;new _0x3fe3f7['Ay'][(_0x556e0e(0x203))]({'y':0x1f4,'fov':0x64,'z':0x0})['to']({'y':0x0,'fov':0x46,'z':-0xc8},0xfa0)[_0x556e0e(0x218)](()=>{const _0x3f528d=_0x556e0e;console[_0x3f528d(0x20f)]('1');})['onUpdate'](_0x5ab368=>{const _0x5b1b17=_0x556e0e;_0x43df64[_0x5b1b17(0x1f8)]['y']=_0x5ab368['y'],_0x43df64[_0x5b1b17(0x219)](),_0x43df64[_0x5b1b17(0x234)]=_0x5ab368[_0x5b1b17(0x234)],_0x43df64['lookAt'](new _0x2d86db[(_0x5b1b17(0x24c))](0x0,0x0,_0x5ab368['z']));})[_0x556e0e(0x25b)]();}[_0x59a835(0x206)](_0xaa3e9d){const _0x3056f9=_0x59a835;let _0x5eecef;0x0===_0xaa3e9d?_0x5eecef=this[_0x3056f9(0x26d)]:0x1===_0xaa3e9d?_0x5eecef=this[_0x3056f9(0x226)]:0x2===_0xaa3e9d?_0x5eecef=this[_0x3056f9(0x250)]:0x3===_0xaa3e9d?_0x5eecef=this[_0x3056f9(0x200)]:0x4===_0xaa3e9d&&(_0x5eecef=this[_0x3056f9(0x207)]),(0x0,_0x141e56['C8'])(_0x5eecef)&&(this['transitionParams'][_0x3056f9(0x228)]=this[_0x3056f9(0x239)][parseInt(0x6*Math[_0x3056f9(0x202)]())],this[_0x3056f9(0x26b)][_0x3056f9(0x266)](_0x5eecef,this[_0x3056f9(0x225)]));}['resizeFn'](){const _0x2c221d=_0x59a835;_0x50b41[_0x2c221d(0x208)](window['innerWidth'],window[_0x2c221d(0x263)]),_0x43df64[_0x2c221d(0x21f)]=window[_0x2c221d(0x238)]/window[_0x2c221d(0x263)],_0x43df64[_0x2c221d(0x219)]();}[_0x59a835(0x1ef)](){const _0x1d87bd=_0x59a835;_0x3fe3f7['Ay']['update'](),this['transition'][_0x1d87bd(0x1ef)](),requestAnimationFrame(this[_0x1d87bd(0x1ef)][_0x1d87bd(0x1fe)](this));}[_0x59a835(0x242)](){const _0x3f43f2=_0x59a835;_0x5dac22&&_0x5dac22[_0x3f43f2(0x255)](),window[_0x3f43f2(0x233)]('resize',this[_0x3f43f2(0x22d)]);}}const _0x1015a5=new Map();let _0x4444f7;function _0x479aa6(_0x2e2cd5,_0x1f2b7a){const _0x10def0=_0x59a835;console[_0x10def0(0x20f)](_0x1f2b7a['arg'],_0x10def0(0x223));let _0x139278=[];return Array[_0x10def0(0x25c)](_0x1f2b7a[_0x10def0(0x223)])?_0x139278=_0x1f2b7a[_0x10def0(0x223)]:_0x139278[_0x10def0(0x1f7)](_0x1f2b7a[_0x10def0(0x223)]),function(_0xeca47e,_0x3ca1d7){const _0x403f36=_0x10def0,_0x4fc575=_0x1f2b7a['instance'][_0x403f36(0x23b)],_0x19e27b=_0xeca47e['target'],_0x2e9dc2=_0x3ca1d7['target'],_0x4341bb=!_0x1f2b7a||!_0x1f2b7a['instance'],_0x1c0d6c=!_0x19e27b||!_0x2e9dc2,_0xb34268=_0x2e2cd5[_0x403f36(0x229)](_0x19e27b)||_0x2e2cd5[_0x403f36(0x229)](_0x2e9dc2),_0x4f3f65=_0x2e2cd5===_0x19e27b,_0x146b4c=_0x139278['length']&&_0x139278['some'](_0xf201f8=>_0xf201f8?.['contains'](_0x19e27b))||_0x139278[_0x403f36(0x269)]&&_0x139278[_0x403f36(0x251)](_0x2e9dc2),_0x14d95e=_0x4fc575&&(_0x4fc575[_0x403f36(0x229)](_0x19e27b)||_0x4fc575[_0x403f36(0x229)](_0x2e9dc2));_0x4341bb||_0x1c0d6c||_0xb34268||_0x4f3f65||_0x146b4c||_0x14d95e||_0x1f2b7a[_0x403f36(0x258)]();};}(0x0,_0x141e56['on'])(document,'mousedown',_0x33a0d5=>_0x4444f7=_0x33a0d5),(0x0,_0x141e56['on'])(document,_0x59a835(0x221),_0x5cd1f6=>{for(const {documentHandler:_0x49be46}of _0x1015a5['values']())_0x49be46(_0x5cd1f6,_0x4444f7);});const _0x3590bd={'beforeMount'(_0x2d5304,_0x15fdaa){const _0xd8c666=_0x59a835;_0x1015a5['set'](_0x2d5304,{'documentHandler':_0x479aa6(_0x2d5304,_0x15fdaa),'bindingFn':_0x15fdaa[_0xd8c666(0x258)]});},'updated'(_0x38cb28,_0x581f54){const _0x57814f=_0x59a835;_0x1015a5['set'](_0x38cb28,{'documentHandler':_0x479aa6(_0x38cb28,_0x581f54),'bindingFn':_0x581f54[_0x57814f(0x258)]});},'unmounted'(_0x5a67d0){const _0x1f7123=_0x59a835;_0x1015a5[_0x1f7123(0x271)](_0x5a67d0);}};var _0x486932=_0x3590bd;const _0x5db407=_0x290609=>((0x0,_0x534cd8['Qi'])(_0x59a835(0x21b)),_0x290609=_0x290609(),(0x0,_0x534cd8['jt'])(),_0x290609),_0x507b6e={'class':_0x59a835(0x21a)},_0x190365=_0x5db407(()=>(0x0,_0x534cd8['Lk'])(_0x59a835(0x213),{'id':'webgl-output'},null,-0x1)),_0x44d5d8={'class':'flex\x20justify-center\x20items-center'},_0x542fa0=_0x5db407(()=>(0x0,_0x534cd8['Lk'])(_0x59a835(0x213),null,_0x59a835(0x248),-0x1)),_0x5556e0=[_0x59a835(0x235)],_0x45a5e3=[_0x59a835(0x237)],_0x2fd406={'class':_0x59a835(0x23e)},_0x22ff24={'name':_0x59a835(0x1f0)};var _0x52fdb8=Object['assign'](_0x22ff24,{'setup'(_0x3982a0){const _0x4cc32d=_0x59a835,_0x318e7f=(0x0,_0x406d5d['KR'])([{'name':'滨海','image':'/images/panorama/thumb/thumb1.png'},{'name':'日落','image':'/images/panorama/thumb/thumb2.png'},{'name':'巨石','image':'/images/panorama/thumb/thumb3.png'},{'name':'走廊','image':_0x4cc32d(0x26e)},{'name':'火车','image':_0x4cc32d(0x241)}]),_0x412515=(0x0,_0x406d5d['KR'])(0x0),_0x6a984c=(0x0,_0x406d5d['KR'])(!0x1);let _0x34dd35;const _0x3a6341=()=>{_0x6a984c['value']=!_0x6a984c['value'];},_0x1e864c=()=>{const _0x5416bc=_0x4cc32d;_0x6a984c[_0x5416bc(0x258)]=!0x1;},_0x3327ee=(_0x4d9b23,_0xb30c8b)=>{const _0x9cfd06=_0x4cc32d;_0xb30c8b!==_0x412515['value']&&(_0x412515['value']=_0xb30c8b,(0x0,_0x141e56['C8'])(_0x34dd35)&&_0x34dd35[_0x9cfd06(0x206)](_0xb30c8b));},_0x1ff949=(0x0,_0x406d5d['KR'])([]);return(0x0,_0x534cd8['sV'])(()=>{const _0x1b1734=_0x4cc32d;_0x1ff949[_0x1b1734(0x258)][_0x1b1734(0x1f7)](document[_0x1b1734(0x1fd)](_0x1b1734(0x259))),_0x34dd35=new _0x215272();}),(0x0,_0x534cd8['xo'])(()=>{const _0x4ff85d=_0x4cc32d;_0x34dd35&&_0x34dd35[_0x4ff85d(0x242)]();}),(_0x12686b,_0x2405e1)=>{const _0x2d4847=_0x4cc32d,_0x1f7e2c=(0x0,_0x534cd8['g2'])(_0x2d4847(0x205));return(0x0,_0x534cd8['uX'])(),(0x0,_0x534cd8['CE'])(_0x2d4847(0x213),_0x507b6e,[_0x190365,(0x0,_0x534cd8['Lk'])(_0x2d4847(0x213),{'class':(0x0,_0x2c4d7b['C4'])([_0x2d4847(0x227)]),'onClick':_0x3a6341},[(0x0,_0x534cd8['Lk'])(_0x2d4847(0x213),_0x44d5d8,[(0x0,_0x534cd8['bF'])(_0x1f7e2c,{'size':'30'},{'default':(0x0,_0x534cd8['k6'])(()=>[(0x0,_0x534cd8['bF'])((0x0,_0x406d5d['R1'])(_0x5130cb['A']))]),'_':0x1})]),_0x542fa0]),(0x0,_0x534cd8['bo'])(((0x0,_0x534cd8['uX'])(),(0x0,_0x534cd8['CE'])(_0x2d4847(0x213),{'class':(0x0,_0x2c4d7b['C4'])([_0x2d4847(0x1f6),_0x6a984c[_0x2d4847(0x258)]?_0x2d4847(0x272):''])},[((0x0,_0x534cd8['uX'])(!0x0),(0x0,_0x534cd8['CE'])(_0x534cd8['FK'],null,(0x0,_0x534cd8['pI'])(_0x318e7f[_0x2d4847(0x258)],(_0x33c4e7,_0x26bb8e)=>((0x0,_0x534cd8['uX'])(),(0x0,_0x534cd8['CE'])(_0x2d4847(0x213),{'class':(0x0,_0x2c4d7b['C4'])([_0x2d4847(0x254),(_0x412515[_0x2d4847(0x258)],'')]),'key':_0x26bb8e,'onClick':_0x3dd192=>_0x3327ee(_0x33c4e7,_0x26bb8e)},[(0x0,_0x534cd8['Lk'])(_0x2d4847(0x243),{'src':_0x33c4e7[_0x2d4847(0x209)],'alt':''},null,0x8,_0x45a5e3),(0x0,_0x534cd8['Lk'])('div',_0x2fd406,(0x0,_0x2c4d7b['v_'])(_0x33c4e7['name']),0x1)],0xa,_0x5556e0))),0x80))],0x2)),[[(0x0,_0x406d5d['R1'])(_0x486932),_0x1e864c,_0x1ff949[_0x2d4847(0x258)]]])]);};}}),_0x2ca0d1=_0x1a9779(0x503d);const _0x1fd3f9=(0x0,_0x2ca0d1['A'])(_0x52fdb8,[[_0x59a835(0x26a),_0x59a835(0x21b)]]);var _0x3ba13f=_0x1fd3f9;}}]);