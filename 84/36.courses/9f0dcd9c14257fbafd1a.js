webpackJsonp([36],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){for(var n=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,s=i||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,h=PIXI.Sprite.fromFrame("TAP_1"+c);h.x=-h.width/2,h.y=-h.height/2;var u=new PIXI.Container;u.addChild(h),d.addChild(u)}var v=0;if(s.direction)switch(s.direction){case"top":v=-Math.PI/2;break;case"bottom":v=Math.PI/2;break;case"left":v=Math.PI;break;case"right":v=0;break;default:v=0}d.filters=[r];for(var f=0;f<d.children.length;f++){var p=d.children[f];p.scale.x=p.scale.y=2,f<2&&P(p,.75*f)}if(n.addChild(d),s.addArrow){var g,x;if(s.direction){g=PIXI.Sprite.fromFrame("oneArrow"),x=new PIXI.extras.MovieClip([g]);var m=s.scale?s.scale:1;x.scale.x=x.scale.y=m,x.pivot={x:0,y:x.height/2},x.rotation=v}else{g=PIXI.Sprite.fromFrame("NBarrow"),(x=new PIXI.extras.MovieClip([g])).pivot={x:x.width/2,y:x.height/2};var C=s.scale?s.scale:1;x.scale.x=x.scale.y=C,"horizontal"!==(s.type?s.type:"horizontal")&&(x.rotation=Math.PI/2)}n.addChild(x),n.arrow=x,n.addEventListener("hideArrow",function(){x.alpha=0,x.visible=!1}),n.addEventListener("showArrow",function(){x.alpha=1,x.visible=!0})}d.alpha=.4;var _=new PIXI.Graphics;function P(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return _.beginFill(16776960,0),_.drawRect(-50,-50,100,100),n.addChild(_),n.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),n.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),n.addEventListener(TouchEvent.TOUCH_BEGIN,function(){n.emit(n.event.TAP),!o&&n.parent&&n.parent.removeChild(n)}),n.x=e,n.y=t,n.setColor=function(e){var t=e>>16,a=e>>8&255,i=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,i,0,0,0,0,0,255,0],!1),d.filters=[r]},n.setRotation=function(e){n.rotation=e},n.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),n.addChild(t),t.pivot={x:0,y:x.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),n.addChild(a),a.pivot={x:x.width/2,y:x.height/2},a.rotation=n.rotation+Math.PI/2}},n.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&n.scale.set(.6,.6),n}},264:function(e,t,a){"use strict";var i=o(a(169)),n=o(a(520)),r=o(a(521));function o(e){return e&&e.__esModule?e:{default:e}}nb.substance6010=extendsClass(ScienceMain,{frame0:function(){var e=null;instance.viewStack.NBONOFF.visible=!1,r.default.apply(this),n.default.init.apply(this.timeline),this.timeline.addEventListener("nodeTap",function(){e&&e.stop()});for(var t=0;t<3;t++)this["step"+t].idx=t,this["step"+t].tapPoint=(0,i.default)(-40,0),this["step"+t].initStep=a,this["step"+t].initStep();function a(){var e=this.a0;e.addChild(this.tapPoint),e.addEventListener(TouchEvent.TAP,o)}function o(){e&&e.stop(),this.removeEventListener(TouchEvent.TAP);var t=this.parent;t.a0.removeChild(t.tapPoint),TweenMax.to(t.txt0,1.5,{alpha:0}),2==t.idx?(TweenMax.to(t.a0,.5,{onComplete:function(){e=SoundManager.play(instance.const.KOU_SHAO)}}),t.a0.animationSpeed=.2,t.a0.loop=!1,t.a0.play()):(t.a0.animationSpeed=t.a1.animationSpeed=.2,t.a0.loop=t.a1.loop=!1,t.a0.play(),t.a1.play())}},start:function(){SoundManager.register({src:a(552),id:instance.const.KOU_SHAO}),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"袋子里真的有空气吗？用什么方法可以向其他人证明?",labName:"感受空气",CONCLUSION:"我们虽然看不见空气，但它确是无处不在。",newLayOut:!0,bgColor:"#F3E6CF"},const:{KOU_SHAO:"koushao"},event:{}}),e.exports=nb.substance6010},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var e,t,a=this;if(a.bgMask){var n=a.bgMask.getChildAt(0);a.progressBar.mask=n,n.scale.x=0}var r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,s=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var l=this["a"+d];if(void 0===l){t="vertical"===r?this["a"+(d-1)].y:this["a"+(d-1)].x,o=d;break}s.push(l),0===d&&(e="vertical"===r?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){var e=this;"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(i.event.CLICK_NODE_REACHED,{index:e.name.substr(1,1)})}}),this.totalFrames&&(s.forEach(function(e){return e.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(i.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(n){n?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var n=(a.drag.x-e)/(t-e);a.emit(i.event.START_DRAG,{time:n})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var n=(a.drag.x-e)/(t-e);a.emit(i.event.DRAGING,{time:n})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var n=(a.drag.x-e)/(t-e);a.emit(i.event.STOP_DRAG,{time:n}),n>=1&&a.emit(i.event.ON_COMPLETE,{time:n})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var i=o-1;if("vertical"===r){var n=Math.round((this.y-e)/(t-e)*i);n<0&&(n=0)}else{var s=Math.round((this.x-e)/(t-e)*i);s<0&&(s=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){u()});var c=!1;a.drag.constY=a.drag.y;var h,u=function(){a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var n=(a.drag.x-e)/(t-e);if(n<1){c=!1,a.emit(i.event.ON_PLAY,{time:n});for(var r=0;r<s.length;r++)a.drag.lastPos.x<=s[r].x&&a.drag.x>s[r].x&&a.emit(i.event.REACHED_NODE,{index:r})}else c||(c=!0,a.emit(i.event.ON_COMPLETE,{time:n}));(a.drag.line0&&(a.drag.line0.rotation=1800*n*Math.PI/180,a.drag.line1.rotation=360*n*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=n);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return o},this.setNodePos=function(e){var t=this["a"+e];"vertical"===r?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===r?a.drag.y+=a._speed_:a.drag.x+=a._speed_,u())}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,i){clearTimeout(h),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(h),a.setAutoPlay(!1),h=setTimeout(function(){a.setAutoPlay(!0,i)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};t.default=i},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e=e||{};var t=this,a=[];i.default.init.apply(this.timeline);for(var n=0;n<this.timeline.getNodeCount();n++){var r=this["step"+n];a.push(r),r.alpha=0,r.visible=!1}var o=this.step0;o.visible=!0,o.alpha=1;var s=0;this.timeline.on(i.default.event.CLICK_NODE,function(i){if(void 0!==i.index&&i.index!=s){var n=e.offset||1200;n=i.index>s?$s(n):-$s(n);var r=void 0!==o.currentX?o.currentX:o.currentX=o.x;TweenMax.to(o,e.oldTm||.6,{x:r+n,alpha:0,onComplete:function(t){t.visible=!1,e.isFix||(t.y=0)},onCompleteParams:[o],ease:Expo.easeOut}),s=i.index,(o=a[s]).visible=!0,r=void 0!==o.currentX?o.currentX:o.currentX=o.x,o.x=r-n,TweenMax.to(o,e.newTm||1,{x:r,alpha:1,ease:Expo.easeOut,onComplete:function(){t.emit(t.boxSwitch_event.CHANGE_COM,{target:o,index:i.index})}})}}),this.addEventListener("render",function(){o.onUpdate&&o.onUpdate()}),t.boxSwitch_event={CHANGE_COM:"changeCom"}};var i=function(e){return e&&e.__esModule?e:{default:e}}(a(520))},552:function(e,t,a){e.exports=a.p+"4fcea8838d6f6a3396c34cccfb520913.mp3"}});