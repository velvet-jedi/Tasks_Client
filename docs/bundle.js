(()=>{var t={96:(t,e,n)=>{var o={"./add.png":238,"./clock.png":765,"./details.png":245,"./footer_options.png":281,"./list.png":431,"./radio_button_unchecked.png":518,"./sort.png":723,"./star.png":215,"./star_empty.png":933,"./star_filled.png":364,"./tick.png":992};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id=96},226:(t,e,n)=>{var o={"./idle.png":343,"./man-hold-star.png":878};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id=226},127:(t,e,n)=>{"use strict";n.d(e,{UT:()=>s,k8:()=>a,nd:()=>i});var o=n(44);function s(t,e,n,o){return{title:t,description:e,isStarred:n,dueDate:o}}const a=[{name:"Starred",tasks:[]},{name:"My Tasks",tasks:[]}];function i(t){t.isStarred?a[0].tasks.push(t):a[1].tasks.push(t),(0,o.c)()}},44:(t,e,n)=>{"use strict";n.d(e,{c:()=>d});var o=n(127);const s=document.getElementById("header"),a=document.getElementById("footer"),i=(n(96),n(226),document.createElement("h1"));i.textContent="Tasks",s.appendChild(i);const r='\n    <img src="./Icons/man-hold-star.png"></img>\n    <p>Mark important tasks with a star so you can easily find them here</p>';function d(){var t=document.getElementById("tabPanel-1"),e=o.k8[0].tasks;0===e.length?t.innerHTML=r:(t.innerHTML="",e.forEach((e=>{const n=`\n            <div class="starred_task_row">\n                <input type="checkbox" style="height:20px"></input>\n                <h3>${e.title}</h3>\n                <p>${e.description}</p>\n            </div>\n            `;t.innerHTML+=n})))}s.insertAdjacentHTML("beforeend",'\n<div role="tablist" aria-labelledby="channel-name">\n    <button id="tab-1" role="tab" aria-controls="tabPanel-1" aria-selected="true" tabindex="0">\n        <img src="./Icons/star_filled.png"></img>   \n    </button>\n    <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabindex="-1">\n        My Tasks\n    </button>\n    <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabindex="-1">\n    <img src="./Icons/add.png">New List\n    </button>\n</div>\n'),s.insertAdjacentHTML("beforeend",'\n<div class="tab-panels">\n    <div id="tabPanel-1" role="tabpanel" aria-labelledby="tab-1" tabindex="0">\n        <img src="./Icons/man-hold-star.png"></img>\n        <p>Mark important tasks with a star so you can easily find them here</p>\n    </div>\n\n    <div id="tabPanel-2" hidden role="tabpanel" aria-labelledby="tab-2" tabindex="0">\n        <img src="./Icons/idle.png" height="500">\n        <p>No todos! You\'re kinda idle</p>\n    </div>\n\n    <div id="tabPanel-3" hidden role="tabpanel" aria-labelledby="tab-3" tabindex="0">\n        <p>Make it better</p>\n    </div>\n</div>\n');const c=document.querySelector("[role=tablist]"),l=document.querySelectorAll("[role=tab]"),p=document.querySelectorAll("[role=tabpanel]");c.addEventListener("click",(t=>{const e=t.target.closest("button"),n=c.querySelector('[aria-selected="true"]'),o=w.some((t=>t.classList.contains("show")));e&&e!==n&&!o&&function(t){const e=c.querySelector('[aria-selected="true"]'),n=t.getAttribute("aria-controls"),o=c.nextElementSibling.querySelector("#"+CSS.escape(n));l.forEach((t=>{t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1")})),p.forEach((t=>{t.setAttribute("hidden",!0)})),o.removeAttribute("hidden",!1),t.setAttribute("aria-selected",!0),t.setAttribute("tabindex","0"),function(t,e){const n=t.compareDocumentPosition(e),o=e.offsetWidth/c.offsetWidth;let s;4===n?s=e.offsetLeft+e.offsetWidth-t.offsetLeft:(s=t.offsetLeft+t.offsetWidth-e.offsetLeft,c.style.setProperty("--_left",e.offsetLeft+"px")),c.style.setProperty("--_width",s/c.offsetWidth),setTimeout((()=>{c.style.setProperty("--_left",e.offsetLeft+"px"),c.style.setProperty("--_width",o)}),200)}(e,t)}(e)}));const u=document.createElement("div");u.classList.add("group1"),$("img").mousedown((function(){return!1}));const m=document.createElement("button");m.classList.add("button-effect"),m.innerHTML='<img class="icon" src="./Icons/list.png" class="icon"></img>';const b=document.createElement("button");b.classList.add("button-effect"),b.innerHTML='<img class="icon" src="./Icons/sort.png"></img>';const f=document.createElement("button");f.classList.add("button-effect"),f.innerHTML='<img class="icon" src="./Icons/footer_options.png"></img>',u.append(m,b,f);const g=document.createElement("button");g.classList.add("new-task"),g.classList.add("button-effect"),g.innerHTML='<p id="add-task">+</p>',a.append(u),a.appendChild(g),g.addEventListener("click",(t=>{t.stopPropagation(),function(){h.classList.add("show");h.innerHTML='\n            <form id="taskForm" action="">\n                <input type="text" name="newTaskTitle" placeholder="New Task" required></input>\n                <input type="text" name="description" placeholder="Add description" required></input>\n                <div id="row22">\n                    <button type="button" id="dueDateBtn">\n                        <img src="./Icons/clock.png">\n                    </button>\n                    \n                    <button type="button" id="star-task">\n                        <img id="star-img" src="./Icons/star_empty.png">\n                    </button>\n\n                    <button type="submit" id="save-task">\n                        Save\n                    </button>\n                </div>\n            </form>\n        ',document.body.appendChild(h),document.getElementById("dueDateBtn").addEventListener("click",k),document.getElementById("hidePopup");const t=document.getElementById("taskForm"),e=document.getElementById("star-task");var n=!1;const s=document.getElementById("star-img");e.addEventListener("click",(t=>{t.stopPropagation(),n=!n,s.src=n?"./Icons/star_filled.png":"./Icons/star_empty.png"})),t.addEventListener("submit",(e=>{e.preventDefault();const a=document.querySelector("input[name='newTaskTitle']").value,i=document.querySelector("input[name='description']").value;var r=(0,o.UT)(a,i,n);(0,o.nd)(r),s.src="./Icons/star_empty.png",n=!1,t.reset()}))}()}));const h=document.createElement("div");h.classList.add("newTaskModal"),m.addEventListener("click",(t=>{t.stopPropagation(),function(){y.classList.add("show");y.innerHTML='\n            <div>\n                <button id="row1">\n                    <img src="./Icons/star_filled.png">\n                    <p>Starred</p>\n                </button>\n            </div>   \n\n            <div>\n                <button id="row2">\n                    <p></p>\n                    <p> My Tasks</p>\n                </button>\n            </div>\n\n            <div>\n                <button id="row3">\n                    <img src="./Icons/add.png">\n                    <p>Create new list</p>\n                </button>\n            </div>\n        ',document.body.appendChild(y)}()}));const y=document.createElement("div");y.classList.add("viewModal"),b.addEventListener("click",(t=>{t.stopPropagation(),function(){v.classList.add("show");v.innerHTML='\n        <form>\n\n            <p id="sort-title">Sort By</p>\n\n            <input id="date" class="radio-custom" type="radio" name="sort_by" value="date" checked>\n            <label class="radio-custom-label" for="date">Date</label><br>\n\n            <input id="starred" class="radio-custom" type="radio" name="sort_by" value="starred">\n            <label class="radio-custom-label" for="starred">Starred recently</label><br>\n\n        </form>\n        ',document.body.appendChild(v),document.querySelectorAll("*:not(body):not(html)").forEach((t=>{t.classList.contains("show")||t.closest(".show")||(t.style.filter="blur(0.7px)")}))}()}));const v=document.createElement("div");v.classList.add("sortOpsModal"),f.addEventListener("click",(t=>{t.stopPropagation(),function(){L.classList.add("show");const t=document.createElement("button");t.innerHTML="<p>Rename list</p>",L.appendChild(t);const e=document.createElement("button");e.innerHTML="<p>Delete list</p>",L.appendChild(e);const n=document.createElement("button");n.innerHTML="<p>Delete all completed tasks</p>",L.appendChild(n),document.body.appendChild(L),document.querySelectorAll("*:not(body):not(html)").forEach((t=>{t.classList.contains("show")||t.closest(".show")||(t.style.filter="blur(0.7px)")}))}()}));const L=document.createElement("div");function k(){const t=document.createElement("div");t.innerHTML='\n    <div id="popupForm">\n        <form action="">\n            <label for="appt"></label>\n            <input type="time" id="time" name="time">\n    \n            <label for="appt"></label>\n            <input type="date" id="date" name="date">\n    \n            <input type="submit">\n        </form>\n        <button id="hidePopup">Close</button>\n    </div>\n    ';const e=t;document.body.appendChild(e),document.getElementById("hidePopup").addEventListener("click",E)}function E(){document.getElementById("popupForm").style.display="none"}L.classList.add("listOpsModal");const w=[L,v,y,h];document.addEventListener("click",(function(t){w.some((e=>e.contains(t.target)))||w.forEach((t=>{t.classList.contains("show")&&function(t){t.classList.contains("show")&&(t.classList.add("hide"),function(t){document.querySelectorAll("*").forEach((t=>{t.style.filter="none"})),setTimeout((()=>{t.classList.remove("show","hide"),function(t){document.body.removeChild(t)}(t)}),400)}(t))}(t)}))})),$("button").on("click",(function(){$(this).addClass("button-click")})),$("button").on("webkitAnimationEnd",(function(){$(this).removeClass("button-click")}))},238:(t,e,n)=>{"use strict";t.exports=n.p+"6f34f45a59e809a73afd.png"},765:(t,e,n)=>{"use strict";t.exports=n.p+"e81665922655b43498c7.png"},245:(t,e,n)=>{"use strict";t.exports=n.p+"66db1c6626adf7050cd3.png"},281:(t,e,n)=>{"use strict";t.exports=n.p+"d24359d57bd56efb2578.png"},431:(t,e,n)=>{"use strict";t.exports=n.p+"161dd805329ebb2fb985.png"},518:(t,e,n)=>{"use strict";t.exports=n.p+"791042159d189191df21.png"},723:(t,e,n)=>{"use strict";t.exports=n.p+"9a4021b752f86021550b.png"},215:(t,e,n)=>{"use strict";t.exports=n.p+"038834b918f91b0fedb2.png"},933:(t,e,n)=>{"use strict";t.exports=n.p+"7f098d3b36c4bade9ce0.png"},364:(t,e,n)=>{"use strict";t.exports=n.p+"8b06b7b3073d5a5f98ad.png"},992:(t,e,n)=>{"use strict";t.exports=n.p+"dea5a056814528eda978.png"},343:(t,e,n)=>{"use strict";t.exports=n.p+"55dee6bbf5c1ecc6c6a1.png"},878:(t,e,n)=>{"use strict";t.exports=n.p+"cc13d6a8d408652a5639.png"}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=o[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n(44),n(127)})();