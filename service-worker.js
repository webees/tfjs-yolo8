if(!self.define){let e,s={};const l=(l,f)=>(l=new URL(l+".js",f).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(f,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const i=e=>l(e,t),r={module:{uri:t},exports:n,require:i};s[t]=Promise.all(f.map((e=>r[e]||i(e)))).then((e=>(o(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tfjs-yolov8"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/index.html",revision:"55c7fe94876b4c74ceabee49a1e77b7d"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/app.25b04afc.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/chunk-vendors.6eee72df.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/image.0e756dfc.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/lang-jaJP.9ff3f562.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/lang-zhCN.6fe82a51.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/video.3b64260a.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/webcam.e2ada993.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/manifest.json",revision:"b4c8f236df1753f1607a7a3ffad6c02e"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/yolov8n_web_model/group1-shard4of4.bin",revision:"cb8f3d14f2640ff08db0edfdbbf46b40"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/yolov8n_web_model/metadata.yaml",revision:"c64900407334b7c9f008350b1f26e090"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/yolov8n_web_model/model.json",revision:"13252976806a3fd3b0044b5fb2fae1fc"}],{})}));
