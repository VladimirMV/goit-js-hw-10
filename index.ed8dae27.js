!function(){function e(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r),r.register("fCtQo",(function(o,n){function t(){let e={zoom:3,minZoom:1,center:new google.maps.LatLng(50.7244893,3.2668189),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),e)}function r(e){let o=new function(e){let o="",n="",t="",r="",s="",l="",a=3;$.ajax({async:!1,dataType:"json",url:"https://maps.google.com/maps/api/geocode/json?key=AIzaSyDjRKNZsq0ey2ADwabVY2KNl7n50KAGMZA&address="+e,success:function(e){console.log(e);for(let u in e.results){o=e.results[u].geometry.location.lat,n=e.results[u].geometry.location.lng,s=e.results[u].geometry.bounds.northeast.lat,t=e.results[u].geometry.bounds.northeast.lng,l=e.results[u].geometry.bounds.southwest.lat,r=e.results[u].geometry.bounds.southwest.lng;let g=t-r,i=s-l,c=Math.sqrt(g*g+i*i);a=1.4*Math.round(Math.log(360/c)/Math.log(2)),a<3&&(a=3),a>15&&(a=15)}}});let u={zoom:a,minZoom:1,center:new google.maps.LatLng(o,n),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),u);return{lat:o,lng:n}}(e.name.common);console.log(o)}e(o.exports,"start",(function(){return t})),e(o.exports,"showCountriesCoose",(function(){return r}))}))}();
//# sourceMappingURL=index.ed8dae27.js.map
