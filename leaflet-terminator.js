!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.terminator=t()}}(function(){return function t(e,n,r){function a(s,o){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(i)return i(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(t,e,n){function r(t){return new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()))}function a(t){return[t[0]+180,-t[1]]}function i(t){var e=(t-Date.UTC(2e3,0,1,12))/864e5/36525,n=(r(v(new Date))-t)/864e5*360-180;return[n-s(e)*D,o(e)*D]}function s(t){var e=p(t),n=c(t),r=l(t),a=Math.tan(d(t)/2);return a*=a,a*Math.sin(2*r)-2*e*Math.sin(n)+4*e*a*Math.sin(n)*Math.cos(2*r)-.5*a*a*Math.sin(4*r)-1.25*e*e*Math.sin(2*n)}function o(t){return Math.asin(Math.sin(d(t))*Math.sin(u(t)))}function u(t){return f(t)-(.00569+.00478*Math.sin((125.04-1934.136*t)*x))*x}function f(t){return l(t)+h(t)}function c(t){return(357.52911+t*(35999.05029-1537e-7*t))*x}function l(t){var e=(280.46646+t*(36000.76983+3032e-7*t))%360;return(0>e?e+360:e)/180*I}function h(t){var e=c(t);return(Math.sin(e)*(1.914602-t*(.004817+14e-6*t))+Math.sin(e+e)*(.019993-101e-6*t)+289e-6*Math.sin(e+e+e))*x}function d(t){return M(t)+.00256*Math.cos((125.04-1934.136*t)*x)*x}function M(t){return(23+(26+(21.448-t*(46.815+t*(59e-5-.001813*t)))/60)/60)*x}function p(t){return.016708634-t*(42037e-9+1.267e-7*t)}var g=t("leaflet-geodesy"),v=t("date-fns/start_of_day"),I=Math.PI,x=I/180,D=180/I;e.exports=function(t){var e=g.circle([0,0],6378137*I/2,{parts:100});return e.setDate=function(t){return e.setLatLng(L.latLng(a(i(t)).reverse()).wrap()),e},e.setDate(t||new Date)}},{"date-fns/start_of_day":4,"leaflet-geodesy":6}],2:[function(t,e,n){function r(t){return t instanceof Date}e.exports=r},{}],3:[function(t,e,n){function r(t,e){if(c(t))return new Date(t.getTime());if("string"!=typeof t)return new Date(t);var n=e||{},r=n.additionalDigits;r=null==r?d:Number(r);var f=a(t),l=i(f.date,r),M=l.year,p=l.restDateString,g=s(p,M);if(g){var v,I=g.getTime(),x=0;return f.time&&(x=o(f.time)),f.timezone?v=u(f.timezone):(v=new Date(I+x).getTimezoneOffset(),v=new Date(I+x+v*h).getTimezoneOffset()),new Date(I+x+v*h)}return new Date(t)}function a(t){var e,n={},r=t.split(M);if(p.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1]),e){var a=$.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function i(t,e){var n,r=v[e],a=x[e];if(n=I.exec(t)||a.exec(t)){var i=n[1];return{year:parseInt(i,10),restDateString:t.slice(i.length)}}if(n=g.exec(t)||r.exec(t)){var s=n[1];return{year:100*parseInt(s,10),restDateString:t.slice(s.length)}}return{year:null}}function s(t,e){if(null===e)return null;var n,r,a,i;if(0===t.length)return r=new Date(0),r.setUTCFullYear(e),r;if(n=D.exec(t))return r=new Date(0),a=parseInt(n[1],10)-1,r.setUTCFullYear(e,a),r;if(n=w.exec(t)){r=new Date(0);var s=parseInt(n[1],10);return r.setUTCFullYear(e,0,s),r}if(n=P.exec(t)){r=new Date(0),a=parseInt(n[1],10)-1;var o=parseInt(n[2],10);return r.setUTCFullYear(e,a,o),r}if(n=y.exec(t))return i=parseInt(n[1],10)-1,f(e,i);if(n=U.exec(t)){i=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return f(e,i,u)}return null}function o(t){var e,n,r;if(e=m.exec(t))return n=parseFloat(e[1].replace(",",".")),n%24*l;if(e=T.exec(t))return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),n%24*l+r*h;if(e=L.exec(t)){n=parseInt(e[1],10),r=parseInt(e[2],10);var a=parseFloat(e[3].replace(",","."));return n%24*l+r*h+1e3*a}return null}function u(t){var e,n;return(e=S.exec(t))?0:(e=C.exec(t))?(n=60*parseInt(e[2],10),"+"===e[1]?-n:n):(e=F.exec(t),e?(n=60*parseInt(e[2],10)+parseInt(e[3],10),"+"===e[1]?-n:n):0)}function f(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,i=7*e+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}var c=t("../is_date/index.js"),l=36e5,h=6e4,d=2,M=/[T ]/,p=/:/,g=/^(\d{2})$/,v=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],I=/^(\d{4})/,x=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],D=/^-(\d{2})$/,w=/^-?(\d{3})$/,P=/^-?(\d{2})-?(\d{2})$/,y=/^-?W(\d{2})$/,U=/^-?W(\d{2})-?(\d{1})$/,m=/^(\d{2}([.,]\d*)?)$/,T=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,L=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,$=/([Z+-].*)$/,S=/^(Z)$/,C=/^([+-])(\d{2})$/,F=/^([+-])(\d{2}):?(\d{2})$/;e.exports=r},{"../is_date/index.js":2}],4:[function(t,e,n){function r(t){var e=a(t);return e.setHours(0,0,0,0),e}var a=t("../parse/index.js");e.exports=r},{"../parse/index.js":3}],5:[function(t,e,n){function r(t){var e=0;if(t&&t.length>0){e+=Math.abs(a(t[0]));for(var n=1;n<t.length;n++)e-=Math.abs(a(t[n]))}return e}function a(t){var e=0;if(t.length>2){for(var n,r,a=0;a<t.length-1;a++)n=t[a],r=t[a+1],e+=i(r[0]-n[0])*(2+Math.sin(i(n[1]))+Math.sin(i(r[1])));e=e*s.RADIUS*s.RADIUS/2}return e}function i(t){return t*Math.PI/180}var s=t("wgs84");e.exports=function(t){if("Polygon"===t.type)return r(t.coordinates);if("MultiPolygon"===t.type){for(var e=0,n=0;n<t.coordinates.length;n++)e+=r(t.coordinates[n]);return e}return null}},{wgs84:8}],6:[function(t,e,n){var r=t("spherical"),a=t("geojson-area"),i=t("wgs84");e.exports.circle=function(t,e,n){function a(t){for(var n=[],a=e/i.RADIUS*180/Math.PI,o=0;s+1>o;o++)n.push(r.radial([t.lng,t.lat],o/s*360,e).reverse());return a>90-t.lat&&n.push([n[0][0],t.lng+180],[90,t.lng+180],[90,t.lng-180],[n[0][0],t.lng-180]),a>90+t.lat&&n.splice((s>>1)+1,0,[n[s>>1][0],t.lng-180],[-90,t.lng-180],[-90,t.lng+180],[n[s>>1][0],t.lng+180]),n}t=L.latLng(t),n=n||{};var s=n.parts||20,o=L.polygon(a(t),n);return o.setLatLng=function(e){return t=e,o.setLatLngs(a(t)),o},o.getRadius=function(t){return e},o.setRadius=function(n){return e=n,o.setLatLngs(a(t)),o},o},e.exports.area=function(t){var e=t.toGeoJSON();return a(e.geometry)}},{"geojson-area":5,spherical:7,wgs84:8}],7:[function(t,e,n){function r(t){return t*(Math.PI/180)}function a(t){return t*(180/Math.PI)}var i=t("wgs84");e.exports.heading=function(t,e){var n=Math.sin(Math.PI*(t[0]-e[0])/180)*Math.cos(Math.PI*e[1]/180),r=Math.cos(Math.PI*t[1]/180)*Math.sin(Math.PI*e[1]/180)-Math.sin(Math.PI*t[1]/180)*Math.cos(Math.PI*e[1]/180)*Math.cos(Math.PI*(t[0]-e[0])/180);return 180*Math.atan2(n,r)/Math.PI},e.exports.distance=function(t,e){var n=Math.sin(Math.PI*(e[0]-t[0])/360),r=Math.sin(Math.PI*(e[1]-t[1])/360),a=r*r+n*n*Math.cos(Math.PI*t[1]/180)*Math.cos(Math.PI*e[1]/180);return 2*i.RADIUS*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))},e.exports.radial=function(t,e,n,s){var o,u=r(e),f=n/i.RADIUS,c=r(t[0]),l=r(t[1]),h=Math.asin(Math.sin(l)*Math.cos(f)+Math.cos(l)*Math.sin(f)*Math.cos(u)),d=Math.atan2(Math.sin(u)*Math.sin(f)*Math.cos(l),Math.cos(f)-Math.sin(l)*Math.sin(h));return o=s?(c-d+Math.PI)%(2*Math.PI)-Math.PI:c-d+Math.PI-Math.PI,[a(o),a(h)]}},{wgs84:8}],8:[function(t,e,n){e.exports.RADIUS=6378137,e.exports.FLATTENING=1/298.257223563,e.exports.POLAR_RADIUS=6356752.3142},{}]},{},[1])(1)});
