webpackJsonp([171,267],{239:function(t,a,e){"use strict";nb.substance0147=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;var t=this.timeline,a=this.step0,e=this.step1,n=!1;e.alpha=0,t.setAutoPlay(!0,1),t.on("change",function(i){!n&&i.time>=1&&(n=!0,TweenMax.to([t,a],.5,{alpha:0,delay:1,onComplete:function(){TweenMax.to(e,.5,{alpha:1})}}));for(var r=1;r<4;r++)a["container"+r].s.alpha=i.time})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"铁在什么情况下容易生锈？我们怎么防止、减缓铁生锈呢？",labName:"控制铁生锈的速度",CONCLUSION:"铁钉生锈是水和空气共同作用的结果。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),nb.timelineSprite=function(){var t,a,e=this;if(e.bgMask){var n=e.bgMask.getChildAt(0);e.progressBar.mask=n,n.scale.x=0}for(var i,r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,s=0;s<int.MAX_VALUE;s++){var c=this["a"+s];if(void 0===c){a="vertical"===r?this["a"+(s-1)].y:this["a"+(s-1)].x,o=s;break}0===s&&(t="vertical"===r?c.y:c.x),c.addEventListener(TouchEvent.TAP,function(){"vertical"===r?TweenMax.to(e.drag,.5,{y:this.y,onUpdate:l,onComplete:d}):TweenMax.to(e.drag,.5,{x:this.x,onUpdate:l,onComplete:d}),e.emit("nodeTap",{index:this.name.substr(1,1)})})}this.setDrag=function(t){t&&NBDrag.addDrag(e.drag,i)},this.updateBound=function(){"vertical"==r?(i={x:this.drag.x,y:this.drag.y,width:0,height:a},i={x:this.drag.x,y:this.drag.y,width:0,height:a}):i={x:this.drag.x,y:this.drag.y,width:a,height:0}},this.updateBound(),e.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==e._align_){var n=o-1;if("vertical"===r){var i=Math.round((this.y-t)/(a-t)*n);i<0&&(i=0),TweenMax.to(this,.5,{y:i*(a-t)/n,onUpdate:l,onComplete:d})}else{var s=Math.round((this.x-t)/(a-t)*n);s<0&&(s=0)}}}),e.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){l()}),e.drag.constY=e.drag.y;var h,l=function(){if("vertical"===r){var n=(e.drag.y-t)/(a-t);e.emit("change",{time:n})}else{e.drag.y=e.drag.constY,e.drag.x>=a&&(e.drag.x=a),e.drag.x<=t&&(e.drag.x=t);var i=(e.drag.x-t)/(a-t);e.emit("change",{time:i}),e.drag.line0&&(e.drag.line0.rotation=1800*i*Math.PI/180,e.drag.line1.rotation=360*i*Math.PI/180),e.bgMask&&(e.bgMask.getChildAt(0).scale.x=i)}},d=function(){e.setMomentsPause(!0,2e3,2);var n=o-1;if("vertical"===r){var i=(e.drag.y-t)/(a-t),s=Math.round(i*n);e.emit("change",{index:s,time:i})}else{var c=(e.drag.x-t)/(a-t),h=Math.round(c*n);e.emit("change",{index:h,time:c})}};this.getNodeCount=function(){return o},this.setNodePos=function(t){var a=this["a"+t];"vertical"===r?e.drag.y=a.y:e.drag.x=a.x},nb.MovieClip.ticker.add(function(){if(e._auto_&&!e.drag.isDragging){var n=a-t;"vertical"===r?(e.drag.y+=e._speed_,e.drag.y>n&&(e.drag.y=n)):(e.drag.x+=e._speed_,e.drag.x>n+e.a0.x&&(e.drag.x=n+e.a0.x)),l()}}),this.setAutoPlay=function(t,a){this._auto_=t,this._speed_=a||.1},this.setAutoAlign=function(t){this._align_=t},this.setMomentsPause=function(t,a,n){clearTimeout(h),t&&!e.NOTafterStopPlay?(e.setAutoPlay(!1),clearTimeout(h),e.setAutoPlay(!1),h=setTimeout(function(){e.setAutoPlay(!0,n)},a)):e.setAutoPlay(!1)},this.resetTimeline=function(){this.drag.x=this.bgMask.x}},t.exports=nb.substance0147},269:function(t,a,e){"use strict";e(239),nb.substance6018=extendsClass(ScienceMain,{frame0:function(){var t=this;instance.viewStack.NBONOFF.visible=!1,instance.NBDownTip.showTip(instance.info.showTip);for(var a=null,e=[],n=0;n<int.MAX_VALUE&&void 0!==t["d"+n];n++)e.push(t["d"+n]);function i(){var n=this;instance.NBDownTip.hideTip(),t.setChildIndex(this,t.children.length-1),TweenMax.to(this.scale,.4,{x:.5,y:.5}),TweenMax.to(this,.4,{alpha:1}),a=null;for(var i=function(e){n.hitTest(t["c"+e])&&n!=t["c"+e]&&(a=e,TweenMax.to(t["c"+e],.4,{alpha:0,onComplete:function(){t["c"+e].error.alpha=0}}),n.secondX=n.x,n.secondY=n.y),1!=t["c"+e].alpha||n.hitTest(t["c"+e])?t["c"+e].gotoAlpha=!1:(t["c"+e].gotoAlpha=!0,t["c"+e].word.gotoCurrent=t["c"+e].word.currentFrame)},r=0;r<e.length;r++)i(r)}function r(){for(var a=0;a<e.length;a++)this.hitTest(t["city"+a])?(t["c"+a].error.alpha=0,t["c"+a].alpha=.5,t["c"+a].word.currentFrame=this.name.split("d")[1]):t["c"+a].gotoAlpha?(t["c"+a].alpha=1,t["c"+a].word.currentFrame=t["c"+a].word.gotoCurrent,s()):t["c"+a].alpha=0;for(var n=0;n<e.length;n++).5==t["c"+n].alpha&&(t["c"+n].error.alpha=0)}function o(){var n=this;c(!1),TweenMax.to(this.scale,.4,{x:1,y:1});for(var i=null,r=0;r<e.length;r++)this.hitTest(t["city"+r])&&(i=r);null==i?TweenMax.to(this,.4,{x:this.startX,y:this.startY,alpha:1,onComplete:function(){c(!0)}}):(TweenMax.to(this,.4,{x:t["c"+i].x,y:t["c"+i].y,alpha:0}),e.forEach(function(e){e.hitTest(t["city"+i])&&n!=e&&(a?(e.alpha=1,TweenMax.to(e,.4,{x:t["c"+a].x,y:t["c"+a].y,alpha:0}),t["c"+a].word.currentFrame=e.name.split("d")[1],TweenMax.to(t["c"+a],.4,{alpha:1,onComplete:function(){s(!0),c(!0)}})):TweenMax.to(e,.4,{x:e.startX,y:e.startY,alpha:1,onComplete:function(){c(!0)}}))}),TweenMax.to(t["c"+i],.4,{alpha:1,onComplete:function(){s(!0),c(!0)}}))}function s(a){for(var n=0,i=0;i<e.length;i++)t["c"+i].word.currentFrame==i?(t["c"+i].error.alpha=0,0===i?t.d0.x===t.c0.x&&t.d0.y===t.c0.y&&n++:n++):t["c"+i].error.alpha=1;n==e.length&&a&&instance.NBDownTip.showTip("恭喜你，完成啦！")}function c(t){e.forEach(function(a){a.interactive=t})}e.forEach(function(a,e){t["city"+e].alpha=0,t["c"+e].alpha=0,t["c"+e].error.alpha=0,NBDrag.addDrag(a),a.startX=a.x,a.startY=a.y,a.addEventListener(NBDrag.event.START_DRAG,i),a.addEventListener(NBDrag.event.DRAG_MOVE,r),a.addEventListener(NBDrag.event.STOP_DRAG,o);var n=a.clone();a.name=n.name,n.alpha=.3}),this.onUpdate=function(){}},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"这是一幅天气预报图，图中都有哪些天气现象？",labName:"标出天气现象",CONCLUSION:"同一天不同地方有不同的天气现象。",newLayOut:!0,showTip:"拖动对应的天气到地图上",bgColor:"#6699CC"},const:{},event:{}}),t.exports=nb.substance6018}});