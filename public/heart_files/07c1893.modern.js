(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1106:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var n=o(11),r=o(25),l=o(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d=(t,e,o)=>{if(t=t?t.$el||t:null,!Object(r.p)(t))return null;if(Object(l.b)("observeDom"))return null;var d=new r.a((t=>{for(var o=!1,i=0;i<t.length&&!o;i++){var n=t[i],r=n.type,l=n.target;("characterData"===r&&l.nodeType===Node.TEXT_NODE||"attributes"===r||"childList"===r&&(n.addedNodes.length>0||n.removedNodes.length>0))&&(o=!0)}o&&e()}));return d.observe(t,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({childList:!0,subtree:!0},o)),d}},1383:function(t,e,o){var content=o(2080);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("f83fffe6",content,!0,{sourceMap:!1})},1401:function(t,e,o){"use strict";var n=o(38),r=o(32),l=o(1551),c=o(318),d="ArrayBuffer",f=l.ArrayBuffer;n({global:!0,constructor:!0,forced:r.ArrayBuffer!==f},{ArrayBuffer:f}),c(d)},1442:function(t,e,o){(function(o){var n,r,l;r=[],n=function(){"use strict";function b(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}function e(a,b,t){var e=new XMLHttpRequest;e.open("GET",a),e.responseType="blob",e.onload=function(){g(e.response,b,t)},e.onerror=function(){console.error("could not download file")},e.send()}function n(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function r(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(t){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,t){var i=l.URL||l.webkitURL,o=document.createElement("a");g=g||b.name||"download",o.download=g,o.rel="noopener","string"==typeof b?(o.href=b,o.origin===location.origin?r(o):n(o.href)?e(b,g,t):r(o,o.target="_blank")):(o.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(o.href)}),4e4),setTimeout((function(){r(o)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,g,o){if(g=g||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(b(t,o),g);else if(n(t))e(t,g,o);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){r(i)}))}}:function(b,t,o,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return e(b,t,o);var n="application/octet-stream"===b.type,i=/constructor/i.test(l.HTMLElement)||l.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||n&&i||a)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var a=c.result;a=r?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},c.readAsDataURL(b)}else{var d=l.URL||l.webkitURL,f=d.createObjectURL(b);g?g.location=f:location.href=f,g=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});l.saveAs=g.saveAs=g,t.exports=g},void 0===(l="function"==typeof n?n.apply(e,r):n)||(t.exports=l)}).call(this,o(54))},1527:function(t,e){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var n=new Uint8Array(16);t.exports=function(){return o(n),n}}else{var r=new Array(16);t.exports=function(){for(var t,i=0;i<16;i++)0==(3&i)&&(t=4294967296*Math.random()),r[i]=t>>>((3&i)<<3)&255;return r}}},1528:function(t,e){for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,n=o;return[n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]]].join("")}},1541:function(t,e,o){var n,r,l=o(1527),c=o(1528),d=0,f=0;t.exports=function(t,e,o){var i=e&&o||0,b=e||[],m=(t=t||{}).node||n,v=void 0!==t.clockseq?t.clockseq:r;if(null==m||null==v){var w=l();null==m&&(m=n=[1|w[0],w[1],w[2],w[3],w[4],w[5]]),null==v&&(v=r=16383&(w[6]<<8|w[7]))}var h=void 0!==t.msecs?t.msecs:(new Date).getTime(),y=void 0!==t.nsecs?t.nsecs:f+1,dt=h-d+(y-f)/1e4;if(dt<0&&void 0===t.clockseq&&(v=v+1&16383),(dt<0||h>d)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=h,f=y,r=v;var O=(1e4*(268435455&(h+=122192928e5))+y)%4294967296;b[i++]=O>>>24&255,b[i++]=O>>>16&255,b[i++]=O>>>8&255,b[i++]=255&O;var j=h/4294967296*1e4&268435455;b[i++]=j>>>8&255,b[i++]=255&j,b[i++]=j>>>24&15|16,b[i++]=j>>>16&255,b[i++]=v>>>8|128,b[i++]=255&v;for(var _=0;_<6;++_)b[i+_]=m[_];return e||c(b)}},1542:function(t,e){(function(e){t.exports=e}).call(this,{})},2079:function(t,e,o){"use strict";var n=o(1383),r=o.n(n);o.d(e,"default",(function(){return r.a}))},2080:function(t,e,o){var n=o(41)(!1);n.push([t.i,".container_wk6uT{margin-bottom:2px;display:flex;border-radius:12px}.container_wk6uT div{background:#EBEDF5;height:20px;width:50px;margin:20px}\n",""]),n.locals={container:"container_wk6uT"},t.exports=n},2124:function(t,e,o){"use strict";var n={props:{width:{type:String,default:null},height:{type:String,default:null},backgroundColor:{type:String,default:"#F8FAFF"}}},r=o(2079),l=o(8);var component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:t.$style.container,style:{width:t.width,height:t.height,backgroundColor:t.backgroundColor}},[e("div")])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},2502:function(t,e,o){var content=o(3788);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("07e8a50d",content,!0,{sourceMap:!1})},2503:function(t,e,o){var content=o(3790);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("4df85678",content,!0,{sourceMap:!1})},3787:function(t,e,o){"use strict";var n=o(2502),r=o.n(n);o.d(e,"default",(function(){return r.a}))},3788:function(t,e,o){var n=o(41)(!1);n.push([t.i,".hook_FlHkj{background-color:#F5F6FA}\n",""]),n.locals={hook:"hook_FlHkj"},t.exports=n},3789:function(t,e,o){"use strict";var n=o(2503),r=o.n(n);o.d(e,"default",(function(){return r.a}))},3790:function(t,e,o){var n=o(41)(!1);n.push([t.i,".modal_Eb5fm .modalBody_CbNdl{padding:0}.modal_Eb5fm .wrapper_M3eTW .items_X5alX{max-height:304px;overflow-x:hidden;overflow-y:auto}.modal_Eb5fm .wrapper_M3eTW .items_X5alX .item_S3OUE:not(:last-child){box-shadow:0 1px 1px #EBEDF5}.modal_Eb5fm .wrapper_M3eTW .download_WOXzf{background-color:#fff;box-shadow:0 -1px 1px #EBEDF5}\n",""]),n.locals={modal:"modal_Eb5fm",modalBody:"modalBody_CbNdl",wrapper:"wrapper_M3eTW",items:"items_X5alX",item:"item_S3OUE",download:"download_WOXzf"},t.exports=n},4031:function(t,e,o){"use strict";o.r(e);var n=o(11),r=o(7),l=(o(45),o(44),o(30),o(31),o(1552),o(494),o(1030)),c=o(4037),d=o(1442),f=o.n(d),m=o(219),v=o(22),w=o(1526),h=o(174),y=o(2124),O=o(1048),j={components:{Lottie:o(163).a}},_=o(3787),k=o(8);var x=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e("div",{class:["d-sm-flex d-none align-items-center",t.$style.hook]},[e("lottie",{attrs:{height:112,width:112,observe:!1,intermission:"0",speed:"1","animation-name":"Apps",loop:""}}),t._v(" "),e("h5",{staticClass:"mr-5-5"},[t._v("Save your time by installing our apps")]),t._v(" "),e("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"download-modal-hook",item:"download-app"}},expression:"{\n      data: { location: 'download-modal-hook', item: 'download-app' },\n    }"}],staticClass:"btn btn-primary mr-7",attrs:{to:{name:"desktop-app"}}},[t._v("\n    Download App\n  ")])],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null).exports;function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B={components:{UilImport:l.a,BModal:c.a,NewBadge:h.a,Square:y.a,DownloadHook:x},mixins:[O.a],props:{item:{type:Object,default:()=>{}},lottieBrandedJson:{type:String,default:null}},data:()=>({formats:[],isLoading:null}),fetch(){var t=this;return Object(r.a)((function*(){if(t.isBrandedLottie)t.formats=["json","mp4","gif"];else if(t.item.formats&&t.item.formats.length)t.formats=t.item.formats.map((t=>t.name));else{var e=Object(v.b)("/api/v2/items/{slug}/available-relations",{slug:t.item.slug}),o=yield t.$axios.get(e);t.formats=o.data.response.formats.map((t=>t.name))}}))()},computed:{isBrandedLottie(){return!("lottie"!==this.item.asset||!["lottie-pack-slug","lotties-slug"].includes(this.$route.name)||!this.$store.getters["brandPalettes/selectedPalette"])}},methods:{labels(t,e){var label={button:"",badge:null};switch(t){case"json":label.button="Lottie JSON";break;case"gif":label.button="Transparent GIF";break;case"lottie":label.button="dotLottie";break;case"blend":label.button="Blender file";break;case"ai":label.button="Illustrator file (AI)";break;default:label.button=t.toUpperCase()}return"lottie"===e?("lottie"===t&&(label.badge="NEW"),"gif"===t&&(label.badge="NEW")):"3d"===e?"png"===t&&(label.badge="Recommended"):"svg"===t&&(label.badge="Recommended"),label},onDownload(t){var e=this;return Object(r.a)((function*(){e.isBrandedLottie?e.downloadBrandLottie(t):(e.isLoading=t.format,yield e.preDownload(L(L({},t),{},{canBeBranded:"illustration"===e.item.asset,page:"PLP"})),e.isLoading=null)}))()},downloadBrandLottie(t){var e=this;return Object(r.a)((function*(){try{e.isLoading=t.format;var o=new File([e.lottieBrandedJson],"".concat(Object(m.a)(e.item.name),".json"),{type:"application/json"});if("json"===t.format)f.a.saveAs(o),e.informToBackend(t),e.isLoading=null;else{var n="".concat(e.item?e.item.name:"Animation"),{url:r}=yield Object(w.a)(o,"lottie",null,{}),l=Object(v.b)("/lottie-download",L({name:n,download:1,url:r,height:700,width:700,format:t.format},"gif"===t.format&&{transparent:1}));fetch(l).then((t=>t.blob())).then((o=>{var r=window.URL.createObjectURL(o),a=document.createElement("a");a.style.display="none",a.href=r,a.download="".concat(n,".").concat(t.format),document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(r),e.informToBackend(t),e.isLoading=null,a.remove()})).catch((t=>{console.error(t),e.onError()}))}}catch(t){console.error(t),e.onError()}}))()},onError(t){var title=t||"Something went wrong please try again later or contact our support team";this.$root.$bvToast.toast(title,{title:title,variant:"danger",toaster:"b-toaster-bottom-center",solid:!1,noAutoHide:!0,bodyClass:"d-none"})},informToBackend(t){this.preDownload(L(L({},t),{},{canBeBranded:!0,page:"PLP",url:!0}))}}},D=o(3789);var A=Object(k.a)(B,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"modalDownloadImage","modal-class":["scale",t.$style.modal],"body-class":t.$style.modalBody,title:"".concat(t.item.name," ").concat(t.$tc("items.".concat(t.item.asset,".name"))),visible:"",centered:"","hide-footer":""}},[e("div",{class:t.$style.wrapper},[e("div",{class:t.$style.items},[t.$fetchState.pending?[e("square",{attrs:{height:"77px",width:"100%"}}),t._v(" "),e("square",{attrs:{height:"77px",width:"100%"}}),t._v(" "),e("square",{attrs:{height:"77px",width:"100%"}})]:e("div",{staticClass:"mx-sm-7 mx-5"},[t._l(t.formats,(function(o,n){return e("div",{key:n,class:["py-4 d-flex justify-content-between align-items-center",t.$style.item]},[e("h3",{staticClass:"font-size-sm font-weight-normal text-secondary mb-0"},[t._v("\n            "+t._s(t.labels(o,t.item.asset).button)+"\n            "),t.labels(o,t.item.asset).badge?e("new-badge",{attrs:{label:t.labels(o,t.item.asset).badge,variant:"green"}}):t._e()],1),t._v(" "),e("div",[e("button",{class:["btn btn-primary btn-icon",t.isLoading===o?"ajax-loading disabled":null],attrs:{type:"button"},on:{click:function(e){return t.onDownload({format:o})}}},[e("uil-import")],1)])])})),t._v(" "),t.isBrandedLottie?t._e():e("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[e("h3",{staticClass:"font-size-sm font-weight-normal text-secondary"},[t._v("\n            Download all (Zip will be created)\n          ")]),t._v(" "),e("button",{class:["btn btn-primary has-icon","zip"===t.isLoading?"ajax-loading disabled":null],attrs:{type:"button"},on:{click:function(e){return t.onDownload({format:"zip"})}}},[e("span",{staticClass:"mr-2-5"},[t._v("Download all")]),t._v(" "),e("uil-import")],1)])],2)],2)]),t._v(" "),e("download-hook")],1)}),[],!1,(function(t){this.$style=D.default.locals||D.default}),null,null);e.default=A.exports}}]);
//# sourceMappingURL=07c1893.modern.js.map