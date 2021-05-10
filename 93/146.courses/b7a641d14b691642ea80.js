webpackJsonp([146],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},l=new PIXI.Container,d=0;d<3;++d){var c=d+1,p=PIXI.Sprite.fromFrame("TAP_1"+c);p.x=-p.width/2,p.y=-p.height/2;var f=new PIXI.Container;f.addChild(p),l.addChild(f)}var u=0;if(s.direction)switch(s.direction){case"top":u=-Math.PI/2;break;case"bottom":u=Math.PI/2;break;case"left":u=Math.PI;break;case"right":u=0;break;default:u=0}l.filters=[o];for(var v=0;v<l.children.length;v++){var h=l.children[v];h.scale.x=h.scale.y=2,v<2&&y(h,.75*v)}if(i.addChild(l),s.addArrow){var m,C;if(s.direction){m=PIXI.Sprite.fromFrame("oneArrow"),C=new PIXI.extras.MovieClip([m]);var w=s.scale?s.scale:1;C.scale.x=C.scale.y=w,C.pivot={x:0,y:C.height/2},C.rotation=u}else{m=PIXI.Sprite.fromFrame("NBarrow"),(C=new PIXI.extras.MovieClip([m])).pivot={x:C.width/2,y:C.height/2};var T=s.scale?s.scale:1;C.scale.x=C.scale.y=T,"horizontal"!==(s.type?s.type:"horizontal")&&(C.rotation=Math.PI/2)}i.addChild(C),i.arrow=C,i.addEventListener("hideArrow",function(){C.alpha=0,C.visible=!1}),i.addEventListener("showArrow",function(){C.alpha=1,C.visible=!0})}l.alpha=.4;var P=new PIXI.Graphics;function y(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return P.beginFill(16776960,0),P.drawRect(-50,-50,100,100),i.addChild(P),i.addEventListener(MouseEvent.MOUSE_OVER,function(){l.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){l.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!r&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;o._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),l.filters=[o]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:C.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:C.width/2,y:C.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},260:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(525));nb.substance6006=extendsClass(ScienceMain,{frame0:function(){var e=this,t=e.btn,a=[];instance.viewStack.NBONOFF.visible=!1;var i=ParticleUtil.getParticle(ParticleUtil.particles.water_vapor);i.scale.set(2.5,1.5),i.alpha=.3,i.bind(e.beaker0,$s(-29),$s(-25)),e.beaker0.addChild(i),e.onUpdate=function(){i.render()},t.addEventListener(TouchEvent.TAP,function e(){t.removeListener(TouchEvent.TAP,e);TweenMax.to(t,.5,{alpha:0});a[0].dumpPlay();a[1].dumpPlay()});for(var o=function(t){var i=e["beaker"+t],o=e["particle"+t],r=e["spoon"+t];r.x=o.x,r.y=o.y;var s=n.default.dump({from:r,to:i,startColor:16777215,startAlpha:.2,startCapacity:"70%",tip:"将食盐和沙子加入水中",particle:o,substance:r.medicine,isAuto:!0,onComplete:function(){var e=15*(t+1);TweenMax.to(r,.5,{alpha:0}),0==t&&TweenMax.to(o,e,{alpha:0}),i.setColor(16777215,.2,{timer:e})}});a[t]=s},r=0;r<2;r++)o(r)},start:function(){this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1")},info:{experimentImport:"溶解的快与慢和哪些因素有关呢？",labName:"溶解快慢1",CONCLUSION:"水的温度越高溶解越快。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),e.exports=nb.substance6006},525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(169));var i={},o=Power0.easeNone;function r(e){if(e){var t=e.getTotalCapacity(),a=e.getCurrentCapacity();e.setCapacityTween(98.5*a/t+"%",.2),setTimeout(function(){e.setCapacityTween(101*a/t+"%",.15)},200)}}i.initCapacity=function(e,t){var a=t.color,n=t.alpha,i=t.capacity;void 0!==a&&e.setColor(a,n),void 0!==i&&e.setCurrentCapacity(i)},i.dump=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},a=Object.assign({isTapPoint:!0,tapPointOffsetX:0,tapPointOffsetY:0,gotoEndTimer:.8,endPointOffsetX:0,endPointOffsetY:0,particleSpeed:1,isGoBack:!0,onBack:function(){}},e),s=a.from,l=a.to,d=a.tapPointOffsetX,c=a.tapPointOffsetY,p=a.isTapPoint,f=a.startColor,u=a.startAlpha,v=a.startCapacity,h=a.endColor,m=a.endAlpha,C=(a.endCapacity,a.tip),w=a.particle,T=a.particleSpeed,P=a.substance,y=a.endPointOffsetX,x=a.endPointOffsetY,I=a.gotoEndTimer,M=a.onInit,b=a.onReady,g=a.onComplete,S=a.isDebug,A=a.isAuto,O=a.isGoBack,_=a.onBack;if(s&&l)return i.initCapacity(l,{color:f,alpha:u,capacity:v}),w&&(w.visible=!1),A||(N(),NBDrag.addDrag(s),s.addEventListener(NBDrag.event.START_DRAG,D),s.addEventListener(NBDrag.event.STOP_DRAG,X),s._dumpStartX=s.x,s._dumpStartY=s.y),E(M),A&&(t.dumpPlay=B),t;function E(e){"function"==typeof e&&e()}function D(){instance.NBDownTip.hideTip();var e=s._dumpTapPoint;e&&(s.removeChild(e),s._dumpTapPoint=null)}function X(){(l.hitBox||l).hitTest(s)?B():O?(NBDrag.removeDrag(s),TweenMax.to(s,.8,{x:s._dumpStartX,y:s._dumpStartY,onComplete:function(){NBDrag.addDrag(s),N(),E(_)}})):N()}function B(){s.removeEventListener(NBDrag.event.START_DRAG,D),s.removeEventListener(NBDrag.event.STOP_DRAG,X),NBDrag.removeDrag(s);var e=w||l,t=e.x,a=e.y,n=new TimelineMax({onComplete:g});if(n.to(s,I,{x:t+y,y:a+x,onComplete:function(){E(b)}}),!S){var i=[TweenMax.to(s,.4,{rotation:"-=0.5"})];if(P&&i.push(TweenMax.to(P.scale,.5,{x:0,y:0})),w){var d=w.totalFrames,c=.05*d*T;i.push(TweenMax.to(w,c,{onStart:function(){w.visible=!0;new TimelineMax;r(l)},onUpdate:function(){},currentFrame:d,ease:o}))}(h||m)&&i.push(l.setColor(h||f,m||u,{timer:.8})),n.add(i)}}function N(){if(p){var e=(0,n.default)(d,c);s._dumpTapPoint=e,s.addChild(e)}C&&instance.NBDownTip.showTip(C)}console.error("请准确传入from, to")},i.stir=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({timer:.6,repeat:6},e),a=t.container,n=t.tool,i=t.endColor,s=t.endAlpha,l=(t.endCapacity,t.distance),d=t.onStart,c=t.onComplete,p=t.repeat,f=t.timer;if(a&&n){void 0===l&&(l=.5*a.width);var u=new TimelineMax({onStart:d,onComplete:c}),v=[TweenMax.to(n,f,{repeat:p,yoyo:!0,x:"+="+l,ease:o,onStart:function(){r(a)}})];return(i||s)&&v.push(a.setColor(i,s,{timer:f*p})),u.add(v),-1===p&&(n.stirStop=function(){TweenMax.killTweensOf(u)}),u}console.error("请准确传入container, tool")},t.default=i}});