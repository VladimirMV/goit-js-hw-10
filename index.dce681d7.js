var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t.register("iewbl",(function(e,o){var n,t,l,s;function r(e){let o=new function(e){let o="",n="",t="",l="",s="",r="",a=3;$.ajax({async:!1,dataType:"json",url:"https://maps.google.com/maps/api/geocode/json?key=AIzaSyDjRKNZsq0ey2ADwabVY2KNl7n50KAGMZA&address="+e,success:function(e){console.log(e);for(let g in e.results){o=e.results[g].geometry.location.lat,n=e.results[g].geometry.location.lng,s=e.results[g].geometry.bounds.northeast.lat,t=e.results[g].geometry.bounds.northeast.lng,r=e.results[g].geometry.bounds.southwest.lat,l=e.results[g].geometry.bounds.southwest.lng;let u=t-l,d=s-r,c=Math.sqrt(u*u+d*d);a=1.4*Math.round(Math.log(360/c)/Math.log(2)),a<3&&(a=3),a>15&&(a=15)}}});let g={zoom:a,minZoom:1,center:new google.maps.LatLng(o,n),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};console.log(g);new google.maps.Map(document.getElementById("map-canvas"),g);return{lat:o,lng:n}}(e.name.common);console.log(o)}n=e.exports,t="showCountriesCoose",l=function(){return r},Object.defineProperty(n,t,{get:l,set:s,enumerable:!0,configurable:!0}),$(document).ready((function(){let e={zoom:3,minZoom:1,center:new google.maps.LatLng(50.7244893,3.2668189),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),e)}))}));
//# sourceMappingURL=index.dce681d7.js.map
