(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[35],{110:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(77),a=n(83),c=n(84),o=n(73),i=Object(c.d)((function(t,e){var n=t.data,c=Object(a.a)(t,["data"]),i=new o.GeoJSON(n,c);return{instance:i,context:Object(r.a)(Object(r.a)({},e),{},{overlayContainer:i})}}),(function(t,e,n){e.style!==n.style&&(null==e.style?t.resetStyle():t.setStyle(e.style))}))},58:function(t,e,n){"use strict";n.r(e);var r=n(91),a=n(9),c=n(0),o=n(90),i=n(110),l=n(114),s=n(87),u=n(99),b=n(1),f=[52.22977,21.01178],j=[{lat:52.22990558765487,lng:21.01168513298035},{lat:52.22962958994604,lng:21.011593937873844},{lat:52.2297445891999,lng:21.012012362480167}],p={steps:64,units:"meters",options:{}},y={color:"yellow",weight:2,opacity:1,fillColor:"yellow",fillOpacity:.7},O=function(){var t=Object(o.a)(),e=Object(c.useState)([]),n=Object(a.a)(e,2),l=n[0],s=n[1];return Object(c.useEffect)((function(){j.map((function(t){var e=t.lat,n=t.lng,a=Object(u.circle)([n,e],30,p);return s((function(t){return[].concat(Object(r.a)(t),[a])}))}))}),[t]),l.length>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{data:l,color:"red",weight:2}),Object(b.jsx)(i.a,{data:u.intersect.apply(void 0,Object(r.a)(l)),style:y})]}):null};e.default=function(){return Object(b.jsxs)(l.a,{center:f,zoom:18,children:[Object(b.jsx)(s.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(b.jsx)(O,{})]})}},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(11);var a=n(17);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);