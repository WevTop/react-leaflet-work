(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[14],{43:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e(90),u=e(114),o=e(87),i=e(73),a=e.n(i),f=e(1),s=[52.22977,21.01178];function b(){var t=Object(c.a)();return Object(r.useEffect)((function(){if(t){var n=a.a.DomUtil.create("div","legend"),e=a.a.Control.extend({options:{position:"bottomleft"},onAdd:function(){return n.textContent="Click on map",n}});t.on("click",(function(t){n.textContent=t.latlng})),t.addControl(new e)}}),[t]),null}n.default=function(){return Object(f.jsxs)(u.a,{center:s,zoom:18,scrollWheelZoom:!1,children:[Object(f.jsx)(o.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(f.jsx)(b,{})]})}},71:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(77);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},72:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},74:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(75),u=e(70),o=e(72),i=e(71);function a(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(i.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(o.a)(r.current,n.eventHandlers),a(r.current,e),r}}},75:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},77:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},78:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(9),c=e(0),u=e.n(c),o=e(16),i=e(70);function a(t){function n(n,e){var r=t(n).current,o=r.instance,a=r.context;return Object(c.useImperativeHandle)(e,(function(){return o})),null==n.children?null:u.a.createElement(i.c,{value:a},n.children)}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var u=Object(c.useState)(!1),i=Object(r.a)(u,2),a=i[0],f=i[1],s=t(n,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){a&&s.update()}),[s,a,n.children]);var b=s._contentNode;return b?Object(o.createPortal)(n.children,b):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},79:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(70),u=e(72),o=e(74),i=e(71);function a(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(i.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(o.b)(r.current,e),a(r.current,n),r}}},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),o=Object(r.useRef)(e),i=u.current.instance;return Object(r.useEffect)((function(){o.current!==e&&(n(i,e,o.current),o.current=e)}),[i,e,c]),u}}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(70);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),o=u.current.instance,i=Object(r.useRef)(n.position),a=n.position;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=a&&a!==i.current&&(o.setPosition(a),i.current=a)}),[o,a]),u}}},82:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(75),c=e(70),u=e(72),o=e(71);function i(t,n){return function(e,i){var a=Object(c.d)(),f=t(Object(o.a)(e,a),a);return Object(r.a)(a.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),n(f.current,a,e,i),f}}},84:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return O}));var r=e(78),c=e(81),u=e(80),o=e(74),i=e(82),a=e(79);function f(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function b(t,n){var e=Object(u.a)(t),c=Object(i.a)(e,n);return Object(r.b)(c)}function l(t,n){var e=Object(u.a)(t,n),c=Object(a.a)(e);return Object(r.a)(c)}function O(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.c)(c)}},86:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(83),c=e(84),u=e(71),o=e(86),i=e(73),a=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new i.TileLayer(e,Object(u.a)(c,n)),context:n}}),o.a)},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return o}));var r=e(70),c=e(0);function u(){return Object(r.d)().map}function o(t,n){var e=u();return Object(c.useEffect)((function(){return e.on(t,n),function(){e.off(t,n)}}),[e,t,n]),e}}}]);