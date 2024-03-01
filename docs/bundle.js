(()=>{var t={96:(t,e,n)=>{var o={"./add.png":238,"./clock.png":765,"./details.png":245,"./footer_options.png":281,"./list.png":431,"./radio_button_unchecked.png":518,"./sort.png":723,"./star.png":215,"./star_empty.png":933,"./star_filled.png":364,"./tick.png":992};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id=96},226:(t,e,n)=>{var o={"./idle.png":343,"./man-hold-star.png":878,"./work.png":822};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id=226},79:(t,e,n)=>{"use strict";function o(t,e,n,o){const s={title:t,description:e,isStarred:n};return o&&(s.dueDate=o),s}n.r(e),n.d(e,{createTask:()=>o})},238:(t,e,n)=>{"use strict";t.exports=n.p+"6f34f45a59e809a73afd.png"},765:(t,e,n)=>{"use strict";t.exports=n.p+"e81665922655b43498c7.png"},245:(t,e,n)=>{"use strict";t.exports=n.p+"66db1c6626adf7050cd3.png"},281:(t,e,n)=>{"use strict";t.exports=n.p+"d24359d57bd56efb2578.png"},431:(t,e,n)=>{"use strict";t.exports=n.p+"161dd805329ebb2fb985.png"},518:(t,e,n)=>{"use strict";t.exports=n.p+"791042159d189191df21.png"},723:(t,e,n)=>{"use strict";t.exports=n.p+"9a4021b752f86021550b.png"},215:(t,e,n)=>{"use strict";t.exports=n.p+"038834b918f91b0fedb2.png"},933:(t,e,n)=>{"use strict";t.exports=n.p+"7f098d3b36c4bade9ce0.png"},364:(t,e,n)=>{"use strict";t.exports=n.p+"8b06b7b3073d5a5f98ad.png"},992:(t,e,n)=>{"use strict";t.exports=n.p+"dea5a056814528eda978.png"},343:(t,e,n)=>{"use strict";t.exports=n.p+"55dee6bbf5c1ecc6c6a1.png"},878:(t,e,n)=>{"use strict";t.exports=n.p+"cc13d6a8d408652a5639.png"},822:(t,e,n)=>{"use strict";t.exports=n.p+"1304ea31113d90584096.png"}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=o[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";n.d({},{c:()=>s,S:()=>a});const t=[{name:"Starred",tasks:[]},{name:"My Tasks",tasks:[]},{name:"Completed Tasks",tasks:[]}],e='\n    <img src="./Icons/man-hold-star.png"></img>\n    <p>Mark important tasks with a star so you can easily find them here</p>',o='\n    <img src="./Icons/idle.png" height="500">\n    <p>No todos! You\'re kinda idle</p>\n';function s(){var n=document.getElementById("tabPanel-1"),o=t[0].tasks;0===o.length?n.innerHTML=e:(n.innerHTML="",o.forEach((t=>{const e=t.dueDate?`<p id="dueDateP">${t.dueDate.dateValue} ${t.dueDate.timeValue}</p>`:"",o=`\n            <div class="starred_task_row">\n                <input type="checkbox" style="height:20px"></input>\n                <h3>${t.title}</h3>\n                <p>${t.description}</p>\n                ${e}\n            </div>\n            `;n.innerHTML+=o})))}function a(){var e=document.getElementById("tabPanel-2"),n=t[1].tasks;0===n.length?e.innerHTML=o:(e.innerHTML="",n.forEach((t=>{const n=t.dueDate?`<p id="dueDateP">${t.dueDate.dateValue} ${t.dueDate.timeValue}</p>`:"",o=`\n            <div class="my_task_row">\n                <input type="checkbox" style="height:20px"></input>\n                <h3>${t.title}</h3>\n                <p>${t.description}</p>\n                ${n}\n            </div>\n            `;e.innerHTML+=o})))}function i(){var e=document.getElementById("tabPanel-3"),n=t[2].tasks;0===n.length?e.innerHTML='\n    <img src="./Icons/work.png" height="400">\n    <p>Get to work and complete some tasks</p>\n':(e.innerHTML="",n.forEach((t=>{const n=t.dueDate?`<p id="dueDateP">${t.dueDate.dateValue} ${t.dueDate.timeValue}</p>`:"",o=`\n            <div class="completed_task_row">\n                <h3>${t.title}</h3>\n                <p>${t.description}</p>\n                ${n}\n            </div>\n            `;e.innerHTML+=o})))}const{createTask:d}=n(79),r=document.getElementById("header"),c=document.getElementById("footer"),l=(n(96),n(226),document.createElement("h1"));l.textContent="Tasks",r.appendChild(l),r.insertAdjacentHTML("beforeend",'\n<div role="tablist" aria-labelledby="channel-name">\n    <button id="tab-1" role="tab" aria-controls="tabPanel-1" aria-selected="true" tabindex="0">\n        <img src="./Icons/star_filled.png"></img>   \n    </button>\n    <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabindex="-1">\n        My Tasks\n    </button>\n\n    <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabindex="-1">\n    Completed Tasks\n    </button>\n\n    <button id="tab-4" role="tab" aria-controls="tabPanel-4" aria-selected="false" tabindex="-1">\n    <img src="./Icons/add.png">New List\n    </button>\n</div>\n'),r.insertAdjacentHTML("beforeend",'\n<div class="tab-panels">\n    <div id="tabPanel-1" role="tabpanel" aria-labelledby="tab-1" tabindex="0">\n        <img src="./Icons/man-hold-star.png"></img>\n        <p>Mark important tasks with a star so you can easily find them here</p>\n    </div>\n\n    <div id="tabPanel-2" hidden role="tabpanel" aria-labelledby="tab-2" tabindex="0">\n        <img src="./Icons/idle.png" height="500">\n        <p>No todos! You\'re kinda idle</p>\n    </div>\n\n    <div id="tabPanel-3" hidden role="tabpanel" aria-labelledby="tab-3" tabindex="0">\n        <img src="./Icons/work.png" height="400">\n        <p>Get to work and complete some tasks</p>\n    </div>\n\n    <div id="tabPanel-4" hidden role="tabpanel" aria-labelledby="tab-4" tabindex="0">\n        <p>Add a new list</p>\n    </div>\n</div>\n'),document.addEventListener("change",(function(e){const n=e.target;if(n.matches('input[type="checkbox"]')){const e=n.dataset.id;if(n.checked){const n=t[0].tasks.findIndex((t=>t.id===e));if(-1!==n){const e=t[0].tasks.splice(n,1)[0];e.completed=!0,t[2].tasks.push(e),s(),i()}else{const n=t[1].tasks.findIndex((t=>t.id===e));if(-1!==n){const e=t[1].tasks.splice(n,1)[0];e.completed=!0,t[2].tasks.push(e),a(),i()}}console.log("Updated Starred List:",t[0].tasks),console.log("Updated My Tasks List:",t[1].tasks),console.log("Updated Completed Tasks List:",t[2].tasks)}}}));const p=document.querySelector("[role=tablist]"),u=document.querySelectorAll("[role=tab]"),m=document.querySelectorAll("[role=tabpanel]");p.addEventListener("click",(t=>{const e=t.target.closest("button"),n=p.querySelector('[aria-selected="true"]'),o=x.some((t=>t.classList.contains("show")));e&&e!==n&&!o&&function(t){const e=p.querySelector('[aria-selected="true"]'),n=t.getAttribute("aria-controls"),o=p.nextElementSibling.querySelector("#"+CSS.escape(n));u.forEach((t=>{t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1")})),m.forEach((t=>{t.setAttribute("hidden",!0)})),o.removeAttribute("hidden",!1),t.setAttribute("aria-selected",!0),t.setAttribute("tabindex","0"),function(t,e){const n=t.compareDocumentPosition(e),o=e.offsetWidth/p.offsetWidth;let s;4===n?s=e.offsetLeft+e.offsetWidth-t.offsetLeft:(s=t.offsetLeft+t.offsetWidth-e.offsetLeft,p.style.setProperty("--_left",e.offsetLeft+"px")),p.style.setProperty("--_width",s/p.offsetWidth),setTimeout((()=>{p.style.setProperty("--_left",e.offsetLeft+"px"),p.style.setProperty("--_width",o)}),200)}(e,t)}(e)}));const b=document.createElement("div");b.classList.add("group1"),$("img").mousedown((function(){return!1}));const f=document.createElement("button");f.classList.add("button-effect"),f.innerHTML='<img class="icon" src="./Icons/list.png" class="icon"></img>';const g=document.createElement("button");g.classList.add("buttolistsn-effect"),g.innerHTML='<img class="icon" src="./Icons/sort.png"></img>';const h=document.createElement("button");h.classList.add("button-effect"),h.innerHTML='<img class="icon" src="./Icons/footer_options.png"></img>',b.append(f,g,h);const y=document.createElement("button");y.classList.add("new-task"),y.classList.add("button-effect"),y.innerHTML='<p id="add-task">+</p>',c.append(b),c.appendChild(y),y.addEventListener("click",(e=>{e.stopPropagation(),function(){v.classList.add("show");v.innerHTML='\n            <form id="taskForm" action="">\n                <input type="text" name="newTaskTitle" placeholder="New Task" required></input>\n                <input type="text" name="description" placeholder="Add description" required></input>\n                <div id="row22">\n                    <button type="button" id="dueDateBtn">\n                        <img src="./Icons/clock.png">\n                    </button>\n                    \n                    <button type="button" id="star-task">\n                        <img id="star-img" src="./Icons/star_empty.png">\n                    </button>\n\n                    <button type="submit" id="save-task">\n                        Save\n                    </button>\n                </div>\n            </form>\n        ',document.body.appendChild(v),document.getElementById("dueDateBtn").addEventListener("click",T),document.getElementById("hidePopup");const e=document.getElementById("taskForm"),n=document.getElementById("star-task");var o=!1;const i=document.getElementById("star-img");n.addEventListener("click",(t=>{t.stopPropagation(),o=!o,i.src=o?"./Icons/star_filled.png":"./Icons/star_empty.png"})),e.addEventListener("submit",(n=>{n.preventDefault();const r=document.querySelector("input[name='newTaskTitle']").value,c=document.querySelector("input[name='description']").value;var l;(l=d(r,c,o,w)).isStarred?(t[0].tasks.push(l),s()):(t[1].tasks.push(l),a()),i.src="./Icons/star_empty.png",o=!1,w=null,e.reset()}))}()}));const v=document.createElement("div");v.classList.add("newTaskModal"),f.addEventListener("click",(t=>{t.stopPropagation(),function(){k.classList.add("show");k.innerHTML='\n            <div>\n                <button id="row1">\n                    <img src="./Icons/star_filled.png">\n                    <p>Starred</p>\n                </button>\n            </div>   \n\n            <div>\n                <button id="row2">\n                    <p></p>\n                    <p> My Tasks</p>\n                </button>\n            </div>\n\n            <div>\n                <button id="row3">\n                    <img src="./Icons/add.png">\n                    <p>Create new list</p>\n                </button>\n            </div>\n        ',document.body.appendChild(k)}()}));const k=document.createElement("div");k.classList.add("viewModal"),g.addEventListener("click",(t=>{t.stopPropagation(),function(){L.classList.add("show");L.innerHTML='\n        <form>\n\n            <p id="sort-title">Sort By</p>\n\n            <input id="date" class="radio-custom" type="radio" name="sort_by" value="date" checked>\n            <label class="radio-custom-label" for="date">Date</label><br>\n\n            <input id="starred" class="radio-custom" type="radio" name="sort_by" value="starred">\n            <label class="radio-custom-label" for="starred">Starred recently</label><br>\n\n        </form>\n        ',document.body.appendChild(L),document.querySelectorAll("*:not(body):not(html)").forEach((t=>{t.classList.contains("show")||t.closest(".show")||(t.style.filter="blur(0.7px)")}))}()}));const L=document.createElement("div");L.classList.add("sortOpsModal"),h.addEventListener("click",(t=>{t.stopPropagation(),function(){E.classList.add("show");const t=document.createElement("button");t.innerHTML="<p>Rename list</p>",E.appendChild(t);const e=document.createElement("button");e.innerHTML="<p>Delete list</p>",E.appendChild(e);const n=document.createElement("button");n.innerHTML="<p>Delete all completed tasks</p>",E.appendChild(n),document.body.appendChild(E),document.querySelectorAll("*:not(body):not(html)").forEach((t=>{t.classList.contains("show")||t.closest(".show")||(t.style.filter="blur(0.7px)")}))}()}));const E=document.createElement("div");var w;function T(){const t=document.createElement("div");t.innerHTML='\n    <div id="popupForm">\n        <form id="dateForm" action="">\n            \n            <label for="appt"></label>\n            <input type="date" id="date" name="date">\n    \n            <label for="appt"></label>\n            <input type="time" id="time" name="time">\n\n            <button type="button" id="submitDateBtn">Submit</button>\n        </form>\n        <button id="hidePopup">Close</button>\n    </div>\n    ';const e=t;document.body.appendChild(e),document.getElementById("dateForm"),document.getElementById("submitDateBtn").addEventListener("click",(t=>{t.preventDefault();const e=document.getElementById("time").value,n=document.getElementById("date").value;w={dateValue:n,timeValue:e}})),document.getElementById("hidePopup").addEventListener("click",(t=>{document.getElementById("popupForm").style.display="none",t.preventDefault(),t.stopPropagation()}))}E.classList.add("listOpsModal");const x=[E,L,k,v];document.addEventListener("click",(function(t){x.some((e=>e.contains(t.target)))||t.target.matches("#dateForm, #dateForm *, #popupForm")||x.forEach((t=>{t.classList.contains("show")&&function(t){t.classList.contains("show")&&(t.classList.add("hide"),function(t){document.querySelectorAll("*").forEach((t=>{t.style.filter="none"})),setTimeout((()=>{t.classList.remove("show","hide"),function(t){document.body.removeChild(t)}(t)}),400)}(t))}(t)}))})),$("button").on("click",(function(){$(this).addClass("button-click")})),$("button").on("webkitAnimationEnd",(function(){$(this).removeClass("button-click")}))})()})();