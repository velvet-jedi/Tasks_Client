(()=>{var t={96:(t,e,n)=>{var r={"./add.png":238,"./footer_options.png":281,"./list.png":431,"./radio_button_unchecked.png":518,"./sort.png":723,"./star.png":215,"./star_empty.png":933,"./star_filled.png":364,"./tick.png":992};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=96},226:(t,e,n)=>{var r={"./idle.png":343,"./man-hold-star.png":878};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=226},238:(t,e,n)=>{"use strict";t.exports=n.p+"6f34f45a59e809a73afd.png"},281:(t,e,n)=>{"use strict";t.exports=n.p+"d24359d57bd56efb2578.png"},431:(t,e,n)=>{"use strict";t.exports=n.p+"161dd805329ebb2fb985.png"},518:(t,e,n)=>{"use strict";t.exports=n.p+"791042159d189191df21.png"},723:(t,e,n)=>{"use strict";t.exports=n.p+"9a4021b752f86021550b.png"},215:(t,e,n)=>{"use strict";t.exports=n.p+"038834b918f91b0fedb2.png"},933:(t,e,n)=>{"use strict";t.exports=n.p+"7f098d3b36c4bade9ce0.png"},364:(t,e,n)=>{"use strict";t.exports=n.p+"8b06b7b3073d5a5f98ad.png"},992:(t,e,n)=>{"use strict";t.exports=n.p+"dea5a056814528eda978.png"},343:(t,e,n)=>{"use strict";t.exports=n.p+"55dee6bbf5c1ecc6c6a1.png"},878:(t,e,n)=>{"use strict";t.exports=n.p+"cc13d6a8d408652a5639.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){n(96),n(226);const t=document.getElementById("header"),e=document.getElementById("footer"),r=document.createElement("h1");r.textContent="Tasks",t.appendChild(r),t.insertAdjacentHTML("beforeend",'\n<div role="tablist" aria-labelledby="channel-name">\n    <button id="tab-1" role="tab" aria-controls="tabPanel-1" aria-selected="true" tabindex="0">\n        <img src="./Icons/star_filled.png"></img>   \n    </button>\n    <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabindex="-1">\n        My Tasks\n    </button>\n    <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabindex="-1">\n    <img src="./Icons/add.png">New List\n    </button>\n</div>\n'),t.insertAdjacentHTML("beforeend",'\n<div class="tab-panels">\n    <div id="tabPanel-1" role="tabpanel" aria-labelled-by="tab-1" tabindex="0">\n        <img src="./Icons/man-hold-star.png"></img>\n        <p>Mark important tasks with a star so you can easily find them here</p>\n    </div>\n\n    <div id="tabPanel-2" hidden role="tabpanel" aria-labelled-by="tab-2" tabindex="0">\n        <img src="./Icons/idle.png" height="500">\n        <p>No todos! You\'re kinda idle</p>\n    </div>\n\n    <div id="tabPanel-3" hidden role="tabpanel" aria-labelled-by="tab-3" tabindex="0">\n        <p>Make it better</p>\n    </div>\n</div>\n');const o=document.querySelector("[role=tablist]"),s=document.querySelectorAll("[role=tab]"),a=document.querySelectorAll("[role=tabpanel]");o.addEventListener("click",(t=>{const e=t.target.closest("button"),n=o.querySelector('[aria-selected="true"]');e&&e!==n&&function(t){const e=o.querySelector('[aria-selected="true"]'),n=t.getAttribute("aria-controls"),r=o.nextElementSibling.querySelector("#"+CSS.escape(n));s.forEach((t=>{t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1")})),a.forEach((t=>{t.setAttribute("hidden",!0)})),r.removeAttribute("hidden",!1),t.setAttribute("aria-selected",!0),t.setAttribute("tabindex","0"),t.focus(),function(t,e){const n=t.compareDocumentPosition(e),r=e.offsetWidth/o.offsetWidth;let s;4===n?s=e.offsetLeft+e.offsetWidth-t.offsetLeft:(s=t.offsetLeft+t.offsetWidth-e.offsetLeft,o.style.setProperty("--_left",e.offsetLeft+"px")),o.style.setProperty("--_width",s/o.offsetWidth),setTimeout((()=>{o.style.setProperty("--_left",e.offsetLeft+"px"),o.style.setProperty("--_width",r)}),200)}(e,t)}(e)}));const i=document.createElement("div");i.classList.add("group1"),$("img").mousedown((function(){return!1}));const c=document.createElement("button");c.innerHTML='<img class="icon" src="./Icons/list.png" class="icon"></img>';const d=document.createElement("button");d.innerHTML='<img class="icon" src="./Icons/sort.png"></img>';const l=document.createElement("button");l.innerHTML='<img class="icon" src="./Icons/footer_options.png"></img>',i.append(c,d,l);const p=document.createElement("button");p.classList.add("new-task"),p.innerHTML='<p id="add-task">+</p>',e.append(i),e.appendChild(p),l.addEventListener("click",(()=>{!function(){u.classList.add("show");const t=document.createElement("button");t.innerHTML="<p>Rename list</p>",u.appendChild(t);const e=document.createElement("button");e.innerHTML="<p>Delete list</p>",u.appendChild(e);const n=document.createElement("button");n.innerHTML="<p>Delete all completed tasks</p>",u.appendChild(n),document.body.appendChild(u)}()}));const u=document.createElement("div");u.classList.add("listOpsModal")}))})()})();