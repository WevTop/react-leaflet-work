(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[22],{108:function(e,n){L.Control.Fullscreen=L.Control.extend({options:{position:"topleft",title:{false:"View Fullscreen",true:"Exit Fullscreen"}},onAdd:function(e){var n=L.DomUtil.create("div","leaflet-control-fullscreen leaflet-bar leaflet-control");return this.link=L.DomUtil.create("a","leaflet-control-fullscreen-button leaflet-bar-part",n),this.link.href="#",this._map=e,this._map.on("fullscreenchange",this._toggleTitle,this),this._toggleTitle(),L.DomEvent.on(this.link,"click",this._click,this),n},_click:function(e){L.DomEvent.stopPropagation(e),L.DomEvent.preventDefault(e),this._map.toggleFullscreen(this.options)},_toggleTitle:function(){this.link.title=this.options.title[this._map.isFullscreen()]}}),L.Map.include({isFullscreen:function(){return this._isFullscreen||!1},toggleFullscreen:function(e){var n=this.getContainer();this.isFullscreen()?e&&e.pseudoFullscreen?this._disablePseudoFullscreen(n):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this._disablePseudoFullscreen(n):e&&e.pseudoFullscreen?this._enablePseudoFullscreen(n):n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):n.msRequestFullscreen?n.msRequestFullscreen():this._enablePseudoFullscreen(n)},_enablePseudoFullscreen:function(e){L.DomUtil.addClass(e,"leaflet-pseudo-fullscreen"),this._setFullscreen(!0),this.fire("fullscreenchange")},_disablePseudoFullscreen:function(e){L.DomUtil.removeClass(e,"leaflet-pseudo-fullscreen"),this._setFullscreen(!1),this.fire("fullscreenchange")},_setFullscreen:function(e){this._isFullscreen=e;var n=this.getContainer();e?L.DomUtil.addClass(n,"leaflet-fullscreen-on"):L.DomUtil.removeClass(n,"leaflet-fullscreen-on"),this.invalidateSize()},_onFullscreenChange:function(e){var n=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;n!==this.getContainer()||this._isFullscreen?n!==this.getContainer()&&this._isFullscreen&&(this._setFullscreen(!1),this.fire("fullscreenchange")):(this._setFullscreen(!0),this.fire("fullscreenchange"))}}),L.Map.mergeOptions({fullscreenControl:!1}),L.Map.addInitHook((function(){var e;if(this.options.fullscreenControl&&(this.fullscreenControl=new L.Control.Fullscreen(this.options.fullscreenControl),this.addControl(this.fullscreenControl)),"onfullscreenchange"in document?e="fullscreenchange":"onmozfullscreenchange"in document?e="mozfullscreenchange":"onwebkitfullscreenchange"in document?e="webkitfullscreenchange":"onmsfullscreenchange"in document&&(e="MSFullscreenChange"),e){var n=L.bind(this._onFullscreenChange,this);this.whenReady((function(){L.DomEvent.on(document,e,n)})),this.on("unload",(function(){L.DomEvent.off(document,e,n)}))}})),L.control.fullscreen=function(e){return new L.Control.Fullscreen(e)}},109:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(114),c=t(87),u=(t(108),t(109),t(1)),l=[52.22977,21.01178];n.default=function(){return Object(u.jsx)(r.a,{fullscreenControl:!0,center:l,zoom:13,scrollWheelZoom:!1,children:Object(u.jsx)(c.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})}},71:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(77);function c(e,n){var t,c=null!==(t=e.pane)&&void 0!==t?t:n.pane;return c?Object(r.a)(Object(r.a)({},e),{},{pane:c}):e}},72:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0);function c(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}},74:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s}));var r=t(0),c=t(75),u=t(70),l=t(72),i=t(71);function o(e,n){Object(r.useEffect)((function(){var t;return(null!==(t=n.layerContainer)&&void 0!==t?t:n.map).addLayer(e.instance),function(){var t;null==(t=n.layersControl)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}function s(e){return function(n){var t=Object(u.d)(),r=e(Object(i.a)(n,t),t);return Object(c.a)(t.map,n.attribution),Object(l.a)(r.current,n.eventHandlers),o(r.current,t),r}}},75:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0);function c(e,n){var t=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}},77:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,"a",(function(){return u}))},78:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return a}));var r=t(9),c=t(0),u=t.n(c),l=t(16),i=t(70);function o(e){function n(n,t){var r=e(n).current,l=r.instance,o=r.context;return Object(c.useImperativeHandle)(t,(function(){return l})),null==n.children?null:u.a.createElement(i.c,{value:o},n.children)}return Object(c.forwardRef)(n)}function s(e){function n(n,t){var u=Object(c.useState)(!1),i=Object(r.a)(u,2),o=i[0],s=i[1],a=e(n,s).current.instance;Object(c.useImperativeHandle)(t,(function(){return a})),Object(c.useEffect)((function(){o&&a.update()}),[a,o,n.children]);var f=a._contentNode;return f?Object(l.createPortal)(n.children,f):null}return Object(c.forwardRef)(n)}function a(e){function n(n,t){var r=e(n).current.instance;return Object(c.useImperativeHandle)(t,(function(){return r})),null}return Object(c.forwardRef)(n)}},79:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s}));var r=t(0),c=t(70),u=t(72),l=t(74),i=t(71);function o(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==t.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};e.instance.setStyle(c),t.current=c}}),[e,n])}function s(e){return function(n){var t=Object(c.d)(),r=e(Object(i.a)(n,t),t);return Object(u.a)(r.current,n.eventHandlers),Object(l.b)(r.current,t),o(r.current,n),r}}},80:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0);function c(e,n){return null==n?function(n,t){return Object(r.useRef)(e(n,t))}:function(t,c){var u=Object(r.useRef)(e(t,c)),l=Object(r.useRef)(t),i=u.current.instance;return Object(r.useEffect)((function(){l.current!==t&&(n(i,t,l.current),l.current=t)}),[i,t,c]),u}}},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(0),c=t(70);function u(e){return function(n){var t=Object(c.d)(),u=e(n,t),l=u.current.instance,i=Object(r.useRef)(n.position),o=n.position;return Object(r.useEffect)((function(){return l.addTo(t.map),function(){l.remove()}}),[t.map,l]),Object(r.useEffect)((function(){null!=o&&o!==i.current&&(l.setPosition(o),i.current=o)}),[l,o]),u}}},82:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(75),c=t(70),u=t(72),l=t(71);function i(e,n){return function(t,i){var o=Object(c.d)(),s=e(Object(l.a)(t,o),o);return Object(r.a)(o.map,t.attribution),Object(u.a)(s.current,t.eventHandlers),n(s.current,o,t,i),s}}},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return d}));var r=t(78),c=t(81),u=t(80),l=t(74),i=t(82),o=t(79);function s(e){var n=Object(u.a)((function(n,t){return{instance:e(n),context:t}})),t=Object(c.a)(n);return Object(r.c)(t)}function a(e,n){var t=Object(u.a)(e,n),c=Object(l.a)(t);return Object(r.a)(c)}function f(e,n){var t=Object(u.a)(e),c=Object(i.a)(t,n);return Object(r.b)(c)}function b(e,n){var t=Object(u.a)(e,n),c=Object(o.a)(t);return Object(r.a)(c)}function d(e,n){var t=Object(u.a)(e,n),c=Object(l.a)(t);return Object(r.c)(c)}},86:function(e,n,t){"use strict";function r(e,n,t){var r=n.opacity,c=n.zIndex;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=c&&c!==t.zIndex&&e.setZIndex(c)}t.d(n,"a",(function(){return r}))},87:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(83),c=t(84),u=t(71),l=t(86),i=t(73),o=Object(c.e)((function(e,n){var t=e.url,c=Object(r.a)(e,["url"]);return{instance:new i.TileLayer(t,Object(u.a)(c,n)),context:n}}),l.a)}}]);