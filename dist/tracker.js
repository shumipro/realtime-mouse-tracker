!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t["default"]:t},i=n(2),r=o(i),a=window.RMT_INTERVAL||500,u=window.RMT_API_PATH||"http://localhost/track/?",l=(new Date).getTime(),c=function(){var t={x:null,y:null,time:(new Date).getTime()};return setInterval(function(){var e=(new Date).getTime();t.time+a<=e&&d(t.x,t.y)},a),function(e){t={x:e.pageX,y:e.pageY,time:(new Date).getTime()},d(t.x,t.y)}},d=function(t,e){null!==t&&null!==e&&s(u+"x="+t+"&y="+e+"&t="+l)},s=function(){var t=new Image;return t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",document.body.appendChild(t),function(e){console.log("send beacon to "+e),t.src=e}}(),p=function(){document.addEventListener("mousemove",r.throttle(c(),a))};window.addEventListener?window.addEventListener("load",p,!1):window.attachEvent&&window.attachEvent("onload",p)},function(t){"use strict";t.exports={throttle:function(t,e){var n=(new Date).getTime()-e;return function(){var o=(new Date).getTime();return o>=n+e?(n=o,t.apply(this,arguments)):void 0}}}}]);