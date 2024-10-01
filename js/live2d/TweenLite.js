/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t,e){"use strict";var i={},s=t.document,n=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!n.TweenLite){var r,a,o,l,h,_=function(t){var e,i=t.split("."),s=n;for(e=0;e<i.length;e++)s[i[e]]=s=s[i[e]]||{};return s},u=_("com.greensock"),f=1e-10,c=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),d={},v=function(s,r,a,o){this.sc=d[s]?d[s].sc:[],d[s]=this,this.gsClass=null,this.func=a;var l=[];this.check=function(h){for(var u,f,c,p,m=r.length,g=m;--m>-1;)(u=d[r[m]]||new v(r[m],[])).gsClass?(l[m]=u.gsClass,g--):h&&u.sc.push(this);if(0===g&&a){if(c=(f=("com.greensock."+s).split(".")).pop(),p=_(f.join("."))[c]=this.gsClass=a.apply(a,l),o)if(n[c]=i[c]=p,"undefined"!=typeof module&&module.exports)if(s===e)for(m in module.exports=i[e]=p,i)p[m]=i[m];else i[e]&&(i[e][c]=p);else"function"==typeof define&&define.amd&&define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],(function(){return p}));for(m=0;m<this.sc.length;m++)this.sc[m].check()}},this.check(!0)},g=t._gsDefine=function(t,e,i,s){return new v(t,e,i,s)},T=u._class=function(t,e,i){return e=e||function(){},g(t,[],(function(){return e}),i),e};g.globals=n;var y=[0,0,1,1],w=T("easing.Ease",(function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?y.concat(e):y}),!0),P=w.map={},b=w.register=function(t,e,i,s){for(var n,r,a,o,l=e.split(","),h=l.length,_=(i||"easeIn,easeOut,easeInOut").split(",");--h>-1;)for(r=l[h],n=s?T("easing."+r,null,!0):u.easing[r]||{},a=_.length;--a>-1;)o=_[a],P[r+"."+o]=P[o+r]=n[o]=t.getRatio?t:t[o]||new t};for((o=w.prototype)._calcEnd=!1,o.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},a=(r=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;--a>-1;)o=r[a]+",Power"+a,b(new w(null,null,1,a),o,"easeOut",!0),b(new w(null,null,2,a),o,"easeIn"+(0===a?",easeNone":"")),b(new w(null,null,3,a),o,"easeInOut");P.linear=u.easing.Linear.easeIn,P.swing=u.easing.Quad.easeInOut;var k=T("events.EventDispatcher",(function(t){this._listeners={},this._eventTarget=t||this}));(o=k.prototype).addEventListener=function(t,e,i,s,n){n=n||0;var r,a,o=this._listeners[t],_=0;for(this!==l||h||l.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;--a>-1;)(r=o[a]).c===e&&r.s===i?o.splice(a,1):0===_&&r.pr<n&&(_=a+1);o.splice(_,0,{c:e,s:i,up:s,pr:n})},o.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return void s.splice(i,1)},o.dispatchEvent=function(t){var e,i,s,n=this._listeners[t];if(n)for((e=n.length)>1&&(n=n.slice(0)),i=this._eventTarget;--e>-1;)(s=n[e])&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var S=t.requestAnimationFrame,A=t.cancelAnimationFrame,x=Date.now||function(){return(new Date).getTime()},R=x();for(a=(r=["ms","moz","webkit","o"]).length;--a>-1&&!S;)S=t[r[a]+"RequestAnimationFrame"],A=t[r[a]+"CancelAnimationFrame"]||t[r[a]+"CancelRequestAnimationFrame"];T("Ticker",(function(t,e){var i,n,r,a,o,_=this,u=x(),c=!(!1===e||!S)&&"auto",m=500,d=33,v=function(t){var e,s,l=x()-R;l>m&&(u+=l-d),R+=l,_.time=(R-u)/1e3,e=_.time-o,(!i||e>0||!0===t)&&(_.frame++,o+=e+(e>=a?.004:a-e),s=!0),!0!==t&&(r=n(v)),s&&_.dispatchEvent("tick")};k.call(_),_.time=_.frame=0,_.tick=function(){v(!0)},_.lagSmoothing=function(t,e){m=t||1/f,d=Math.min(e,m,0)},_.sleep=function(){null!=r&&(c&&A?A(r):clearTimeout(r),n=p,r=null,_===l&&(h=!1))},_.wake=function(t){null!==r?_.sleep():t?u+=-R+(R=x()):_.frame>10&&(R=x()-m+5),n=0===i?p:c&&S?S:function(t){return setTimeout(t,1e3*(o-_.time)+1|0)},_===l&&(h=!0),v(2)},_.fps=function(t){return arguments.length?(a=1/((i=t)||60),o=this.time+a,void _.wake()):i},_.useRAF=function(t){return arguments.length?(_.sleep(),c=t,void _.fps(i)):c},_.fps(t),setTimeout((function(){"auto"===c&&_.frame<5&&"hidden"!==s.visibilityState&&_.useRAF(!1)}),1500)})),(o=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var C=T("core.Animation",(function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,J){h||l.wake();var i=this.vars.useFrames?H:J;i.add(this,i._time),this.vars.paused&&this.paused(!0)}}));l=C.ticker=new u.Ticker,(o=C.prototype)._dirty=o._gc=o._initted=o._paused=!1,o._totalTime=o._time=0,o._rawPrevTime=-1,o._next=o._last=o._onUpdate=o._timeline=o.timeline=null,o._paused=!1;var D=function(){h&&x()-R>2e3&&"hidden"!==s.visibilityState&&l.wake();var t=setTimeout(D,2e3);t.unref&&t.unref()};D(),o.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},o.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},o.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},o.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},o.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},o.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},o.render=function(t,e,i){},o.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},o.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime(!0))>=i&&t<i+this.totalDuration()/this._timeScale-1e-7},o._enabled=function(t,e){return h||l.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},o._kill=function(t,e){return this._enabled(!1,!1)},o.kill=function(t,e){return this._kill(t,e),this},o._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},o._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},o._callback=function(t){var e=this.vars,i=e[t],s=e[t+"Params"],n=e[t+"Scope"]||e.callbackScope||this;switch(s?s.length:0){case 0:i.call(n);break;case 1:i.call(n,s[0]);break;case 2:i.call(n,s[0],s[1]);break;default:i.apply(n,s)}},o.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},o.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},o.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},o.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},o.totalTime=function(t,e,i){if(h||l.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,n=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?s-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(z.length&&W(),this.render(t,e,!1),z.length&&W())}return this},o.progress=o.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},o.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},o.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},o.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||f,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},o.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},o.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(h||t||l.wake(),i=(e=s.rawTime())-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var I=T("core.SimpleTimeline",(function(t){C.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0}));(o=I.prototype=new C).constructor=I,o.kill()._gc=!1,o._first=o._last=o._recent=null,o._sortChildren=!1,o.add=o.insert=function(t,e,i,s){var n,r;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),n=this._last,this._sortChildren)for(r=t._startTime;n&&n._startTime>r;)n=n._prev;return n?(t._next=n._next,n._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=n,this._recent=t,this._timeline&&this._uncache(!0),this},o._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},o.render=function(t,e,i){var s,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)s=n._next,(n._active||t>=n._startTime&&!n._paused&&!n._gc)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=s},o.rawTime=function(){return h||l.wake(),this._totalTime};var E=T("TweenLite",(function(e,i,s){if(C.call(this,i,s),this.render=E.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:E.selector(e)||e;var n,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?K[E.defaultOverwrite]:"number"==typeof l?l|0:K[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=c(e),this._propLookup=[],this._siblings=[],n=0;n<a.length;n++)(r=a[n])?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(n--,1),this._targets=a=a.concat(c(r))):(this._siblings[n]=X(r,this,!1),1===l&&this._siblings[n].length>1&&Z(r,this,null,1,this._siblings[n])):"string"==typeof(r=a[n--]=E.selector(r))&&a.splice(n+1,1):a.splice(n--,1);else this._propLookup={},this._siblings=X(e,this,!1),1===l&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-f,this.render(Math.min(0,-this._delay)))}),!0),O=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)};(o=E.prototype=new C).constructor=E,o.kill()._gc=!1,o.ratio=0,o._firstPT=o._targets=o._overwrittenProps=o._startAt=null,o._notifyPluginsOfEnabled=o._lazy=!1,E.version="1.20.2",E.defaultEase=o._ease=new w(null,null,1,1),E.defaultOverwrite="auto",E.ticker=l,E.autoSleep=120,E.lagSmoothing=function(t,e){l.lagSmoothing(t,e)},E.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(E.selector=i,i(e)):void 0===s?e:s.querySelectorAll?s.querySelectorAll(e):s.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],F={},U=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=/[\+-]=-?[\.\d]/,N=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?1===t&&this.end?this.end:t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):s>e&&e>-s&&!i.blob&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},j=function(t,e,i,s){var n,r,a,o,l,h,_,u=[],f=0,c="",p=0;for(u.start=t,u.end=e,t=u[0]=t+"",e=u[1]=e+"",i&&(i(u),t=u[0],e=u[1]),u.length=0,n=t.match(U)||[],r=e.match(U)||[],s&&(s._next=null,s.blob=1,u._firstPT=u._applyPT=s),l=r.length,o=0;l>o;o++)_=r[o],c+=(h=e.substr(f,e.indexOf(_,f)-f))||!o?h:",",f+=h.length,p?p=(p+1)%5:"rgba("===h.substr(-5)&&(p=1),_===n[o]||n.length<=o?c+=_:(c&&(u.push(c),c=""),a=parseFloat(n[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,m:p&&4>p?Math.round:0}),f+=_.length;return(c+=e.substr(f))&&u.push(c),u.setRatio=N,L.test(e)&&(u.end=0),u},G=function(t,e,i,s,n,r,a,o,l){"function"==typeof s&&(s=s(l||0,t));var h=typeof t[e],_="function"!==h?"":e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),u="get"!==i?i:_?a?t[_](a):t[_]():t[e],f="string"==typeof s&&"="===s.charAt(1),c={t:t,p:e,s:u,f:"function"===h,pg:0,n:n||e,m:r?"function"==typeof r?r:Math.round:0,pr:0,c:f?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-u||0};return("number"!=typeof u||"number"!=typeof s&&!f)&&(a||isNaN(u)||!f&&isNaN(s)||"boolean"==typeof u||"boolean"==typeof s?(c.fp=a,c={t:j(u,f?parseFloat(c.s)+c.c:s,o||E.defaultStringFilter,c),p:"setRatio",s:0,c:1,f:2,pg:0,n:n||e,pr:0,m:0}):(c.s=parseFloat(u),f||(c.c=parseFloat(s)-c.s||0))),c.c?((c._next=this._firstPT)&&(c._next._prev=c),this._firstPT=c,c):void 0},M=E._internals={isArray:m,isSelector:O,lazyTweens:z,blobDif:j},Q=E._plugins={},q=M.tweenLookup={},B=0,$=M.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},K={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},H=C._rootFramesTimeline=new I,J=C._rootTimeline=new I,V=30,W=M.lazyRender=function(){var t,e=z.length;for(F={};--e>-1;)(t=z[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};J._startTime=l.time,H._startTime=l.frame,J._active=H._active=!0,setTimeout(W,1),C._updateRoot=E.render=function(){var t,e,i;if(z.length&&W(),J.render((l.time-J._startTime)*J._timeScale,!1,!1),H.render((l.frame-H._startTime)*H._timeScale,!1,!1),z.length&&W(),l.frame>=V){for(i in V=l.frame+(parseInt(E.autoSleep,10)||120),q){for(t=(e=q[i].tweens).length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete q[i]}if((!(i=J._first)||i._paused)&&E.autoSleep&&!H._first&&1===l._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||l.sleep()}}},l.addEventListener("tick",C._updateRoot);var X=function(t,e,i){var s,n,r=t._gsTweenID;if(q[r||(t._gsTweenID=r="t"+B++)]||(q[r]={target:t,tweens:[]}),e&&((s=q[r].tweens)[n=s.length]=e,i))for(;--n>-1;)s[n]===e&&s.splice(n,1);return q[r].tweens},Y=function(t,e,i,s){var n,r,a=t.vars.onOverwrite;return a&&(n=a(t,e,i,s)),(a=E.onOverwrite)&&(r=a(t,e,i,s)),!1!==n&&!1!==r},Z=function(t,e,i,s,n){var r,a,o,l;if(1===s||s>=4){for(l=n.length,r=0;l>r;r++)if((o=n[r])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,_=e._startTime+f,u=[],c=0,p=0===e._duration;for(r=n.length;--r>-1;)(o=n[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||tt(e,0,p),0===tt(o,h,p)&&(u[c++]=o)):o._startTime<=_&&o._startTime+o.totalDuration()/o._timeScale>_&&((p||!o._initted)&&_-o._startTime<=2e-10||(u[c++]=o)));for(r=c;--r>-1;)if(o=u[r],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!Y(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},tt=function(t,e,i){for(var s=t._timeline,n=s._timeScale,r=t._startTime;s._timeline;){if(r+=s._startTime,n*=s._timeScale,s._paused)return-100;s=s._timeline}return(r/=n)>e?r-e:i&&r===e||!t._initted&&2*f>r-e?f:(r+=t.totalDuration()/t._timeScale/n)>e+f?0:r-e-f};o._init=function(){var t,e,i,s,n,r,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,_=a.ease;if(a.startAt){for(s in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={},a.startAt)n[s]=a.startAt[s];if(n.overwrite=!1,n.immediateRender=!0,n.lazy=h&&!1!==a.lazy,n.startAt=n.delay=null,n.onUpdate=a.onUpdate,n.onUpdateScope=a.onUpdateScope||a.callbackScope||this,this._startAt=E.to(this.target,0,n),h)if(this._time>0)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(s in 0!==this._time&&(h=!1),i={},a)$[s]&&"autoCSS"!==s||(i[s]=a[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=E.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=_=_?_ instanceof w?_:"function"==typeof _?new w(_,a.easeParams):P[_]||E.defaultEase:E.defaultEase,a.easeParams instanceof Array&&_.config&&(this._ease=_.config.apply(_,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(r=this._targets.length,t=0;r>t;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&E._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},o._initProps=function(e,i,s,n,r){var a,o,l,h,_,u;if(null==e)return!1;for(a in F[e._gsTweenID]&&W(),this.vars.css||e.style&&e!==t&&e.nodeType&&Q.css&&!1!==this.vars.autoCSS&&function(t,e){var i,s={};for(i in t)$[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!Q[i]||Q[i]&&Q[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s}(this.vars,e),this.vars)if(u=this.vars[a],$[a])u&&(u instanceof Array||u.push&&m(u))&&-1!==u.join("").indexOf("{self}")&&(this.vars[a]=u=this._swapSelfInParams(u,this));else if(Q[a]&&(h=new Q[a])._onInitTween(e,this.vars[a],this,r)){for(this._firstPT=_={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:1,n:a,pg:1,pr:h._priority,m:0},o=h._overwriteProps.length;--o>-1;)i[h._overwriteProps[o]]=this._firstPT;(h._priority||h._onInitAllProps)&&(l=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else i[a]=G.call(this,e,a,"get",u,a,0,null,this.vars.stringFilter,r);return n&&this._kill(n,e)?this._initProps(e,i,s,n,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,n,r)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),l)},o.render=function(t,e,i){var s,n,r,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l-1e-7&&t>=0)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0>h||0>=t&&t>=-1e-7||h===f&&"isPause"!==this.data)&&h!==t&&(i=!0,h>f&&(n="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:f);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(n="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==f||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:f)),(!this._initted||this._startAt&&this._startAt.progress())&&(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,c=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===c?_*=_:2===c?_*=_*_:3===c?_*=_*_*_:4===c&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),void(this._lazy=[t,e]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==o||s||i)&&this._callback("onUpdate")),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this._callback(n),0===l&&this._rawPrevTime===f&&a!==f&&(this._rawPrevTime=0))}},o._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:E.selector(e)||e;var s,n,r,a,o,l,h,_,u,f=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((m(e)||O(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==n&&"all"!==n&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(E.onOverwrite||this.vars.onOverwrite)){for(r in h)o[r]&&(u||(u=[]),u.push(r));if((u||!t)&&!Y(this,i,e,u))return!1}for(r in h)(a=o[r])&&(f&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[r]),_&&(n[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},o.invalidate=function(){return this._notifyPluginsOfEnabled&&E._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-f,this.render(Math.min(0,-this._delay))),this},o._enabled=function(t,e){if(h||l.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=X(s[i],this,!0);else this._siblings=X(this.target,this,!0)}return C.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&E._onPluginEvent(t?"_onEnable":"_onDisable",this)},E.to=function(t,e,i){return new E(t,e,i)},E.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new E(t,e,i)},E.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new E(t,e,s)},E.delayedCall=function(t,e,i,s,n){return new E(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},E.set=function(t,e){return new E(t,0,e)},E.getTweensOf=function(t,e){if(null==t)return[];var i,s,n,r;if(t="string"!=typeof t?t:E.selector(t)||t,(m(t)||O(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(E.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(r=s[i],n=i;--n>-1;)r===s[n]&&s.splice(i,1)}else if(t._gsTweenID)for(i=(s=X(t).concat()).length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s||[]},E.killTweensOf=E.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=E.getTweensOf(t,e),n=s.length;--n>-1;)s[n]._kill(i,t)};var et=T("plugins.TweenPlugin",(function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype}),!0);if(o=et.prototype,et.version="1.19.0",et.API=2,o._firstPT=null,o._addTween=G,o.setRatio=N,o._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},o._mod=o._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},E._onPluginEvent=function(t,e){var i,s,n,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=n;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:n=o,(o._next=s)?s._prev=o:r=o,o=a}o=e._firstPT=n}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===et.API&&(Q[(new t[e])._propName]=t[e]);return!0},g.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,n=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=T("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",(function(){et.call(this,i,s),this._overwriteProps=n||[]}),!0===t.global),o=a.prototype=new et(i);for(e in o.constructor=a,a.API=t.API,r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,et.activate([a]),a},r=t._gsQueue){for(a=0;a<r.length;a++)r[a]();for(o in d)d[o].func||t.console.log("GSAP encountered missing dependency: "+o)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
//# sourceMappingURL=../../maps/js/live2d/TweenLite.js.map
