(()=>{"use strict";const e=()=>{const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.className="taskTitle",t.textContent="Home",e.append(t)},t=()=>{const t=document.querySelector(".mainContent");document.querySelector(".taskTitle"),document.createElement("div"),r(),e(),t.append(p(y.arr))};document.querySelector(".home").addEventListener("click",(()=>{t()}));const o=(e,t)=>{const o=document.querySelector(`#${t}`),n=document.createElement("option");return n.text=e,n.value=e,o.append(n),n},n=e=>{const t=document.querySelector(`#${e}`);for(;t.options.length>0;)t.remove(0)},r=()=>{document.querySelector(".mainContent").innerHTML=""},c=(e,t,o,n)=>{const r=document.createElement("div");r.setAttribute("class","taskContainer"),r.dataset.number=n;const c=document.createElement("input");c.setAttribute("type","checkbox"),c.className="complete",c.dataset.number=n;const s=document.createElement("div");s.textContent=e,s.className="title";const a=document.createElement("div");a.textContent=t,a.className="details";const l=document.createElement("div");l.textContent=o,l.className="date";const i=document.createElement("button");i.className="editBtn",i.textContent="edit",i.dataset.number=n;const u=document.createElement("button");return u.className="remove",u.textContent="remove",u.dataset.number=n,r.append(c,s,a,l,i,u),r},s=e=>{document.querySelector(".mainContent").append(e)},a=e=>{const t=JSON.stringify(e);localStorage.setItem("tasks",t)};class l{constructor(e,t,o,n,r,c){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.complete=r,this.project=c}test(){console.log("hi")}}console.log(JSON.parse(localStorage.getItem("tasks")));const i=t=>{document.querySelectorAll(".remove").forEach((o=>{o.addEventListener("click",(o=>{t.splice(o.target.dataset.number,1),r(),e(),p(t)}))}))},u=e=>{const t=document.querySelector("#edit");document.querySelectorAll(".editBtn").forEach((o=>{o.addEventListener("click",(o=>{let n=o.target.dataset.number;const c=e[n];t.addEventListener("submit",(o=>{o.preventDefault();const s=new FormData(t),a=s.get("editTitle"),i=s.get("editDescription"),u=s.get("editDate"),d=s.get("editPriority"),m=c.complete,g=s.get("editProject"),y=new l(a,i,u,d,m,g);console.log(e),""!==n&&(e.splice(n,1,y),r(),p(e)),n=""}))}))}))},d=e=>{document.querySelectorAll(".complete").forEach((t=>{t.addEventListener("click",(t=>{const o=t.target.dataset.number;!1===e[o].complete?(e[o].complete=!0,(e=>{const t=e.target.parentElement,o=t.querySelector(".title"),n=t.querySelector(".details"),r=t.querySelector(".date");o.classList.toggle("toDoChecked"),n.classList.toggle("toDoChecked"),r.classList.toggle("toDoChecked")})(t),console.log(e[o].complete)):(e[o].complete=!1,(e=>{const t=e.target.parentElement,o=t.querySelector(".title"),n=t.querySelector(".details"),r=t.querySelector(".date");o.classList.remove("toDoChecked"),n.classList.remove("toDoChecked"),r.classList.remove("toDoChecked")})(t),console.log(e[o].complete)),a(e)}))}))},m=e=>{let t=0;e.forEach((e=>{!0===e.complete&&(e=>{console.log(e);const t=document.querySelector('.taskContainer[data-number="'+e+'"]');console.log(t);const o=document.querySelector('input[data-number="'+e+'"]');if(console.log(o),null===t||null===o)console.log("nothing");else{const e=t.querySelector(".title"),n=t.querySelector(".details"),r=t.querySelector(".date");o.checked=!0,e.classList.toggle("toDoChecked"),n.classList.toggle("toDoChecked"),r.classList.toggle("toDoChecked")}})(t),t++}))},p=e=>{let t=0;return e.forEach((e=>{const o=Object.values(e);s(c(o[0],o[1],o[2],t)),t++})),i(e),u(e),d(e),m(e),a(e),[]},g=e=>{i(e),u(e),d(e),m(e)},y=(()=>{const t=document.querySelector("form");let o=[];return o=0===localStorage.length?[]:JSON.parse(localStorage.getItem("tasks")),t.addEventListener("submit",(n=>{n.preventDefault();const c=new FormData(t),s=c.get("title"),a=c.get("description"),i=c.get("date"),u=c.get("priority"),d=c.get("project"),m=new l(s,a,i,u,!1,d);o.push(m),r(),e(),p(o)})),{arr:o}})();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function f(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===S(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function D(e){h(1,arguments);var t=f(e);return t.setHours(0,0,0,0),t}function E(e,t){h(2,arguments);var o=D(e),n=D(t);return o.getTime()===n.getTime()}function q(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(e,t){h(2,arguments);var o=f(e),n=q(t);return isNaN(n)?new Date(NaN):n?(o.setDate(o.getDate()+n),o):o}function b(e,t){return h(2,arguments),v(e,7*q(t))}class k{constructor(e){this.project=e}}new k("Do Dishes");const L=document.querySelector(".displayDropDown"),w=document.querySelector(".addProject");document.querySelector(".week").addEventListener("click",(()=>{r();const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.textContent="This Week",t.classList="taskTitle",e.append(t),(()=>{const e=new Date;y.arr.forEach(((t,o)=>{const n=t.dueDate.replaceAll("-","/"),r=new Date(n);e.setHours(0,0,0,0),console.log(e);const a=b(e,1);console.log(a);const l=function(e,t){h(2,arguments);var o=f(e).getTime(),n=f(t.start).getTime(),r=f(t.end).getTime();if(!(n<=r))throw new RangeError("Invalid interval");return o>=n&&o<=r}(r,{start:e,end:a});console.log(l),E(r,e),l&&s(c(t.title,t.description,t.dueDate,o))})),g(y.arr)})()}));const C=()=>{const e=document.querySelector(".mainContent"),t=document.querySelectorAll(".projectLi"),o=document.createElement("h2");o.className="taskTitle",o.textContent="Home",t.forEach((t=>{t.addEventListener("click",(t=>{var n;e.innerHTML="",o.textContent=t.target.textContent,e.append(o),e.append((n=t.target.textContent,y.arr.forEach(((e,t)=>{e.project===n&&s(c(e.title,e.description,e.dueDate,t))})),g(y.arr),[]))}))}))};C();const j=()=>{const e=document.querySelector("#getProject");console.log(localStorage.getItem("project"));let t=[];return e.addEventListener("submit",(r=>{r.preventDefault();const c=new FormData(e).get("newProject"),s=new k(c);""!==s.project&&(t.push(s),(e=>{console.log(e);const t=JSON.stringify(e);localStorage.setItem("project",t),console.log(t)})(t),document.querySelector(".dropDownItems").innerHTML=""),(e=>{const t=document.querySelector(".dropDownItems");document.querySelectorAll(".projectLi"),e.forEach((e=>{const o=document.createElement("li");o.className="projectLi",o.textContent=e.project,t.append(o),console.log(o)}))})(t),(()=>{const e=document.querySelectorAll(".projectLi");n("project"),n("editProject"),o("Home","project"),o("Home","editProject"),e.forEach((e=>{o(e.innerText,"project"),o(e.innerText,"editProject")}))})(),C(),e.reset()})),t};j(),w.addEventListener("click",(e=>{document.querySelector("#getProject").classList.toggle("displayProject"),j()})),document.querySelector(".today").addEventListener("click",(()=>{r();const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.textContent="Today",t.classList="taskTitle",e.append(t),(e=>{const t=new Date;(function(e){h(1,arguments),E(e,Date.now())})(v(t,1)),b(t,1),new Date("2023-05-31"),t.getFullYear(),t.getMonth(),t.getDate(),y.arr.forEach(((e,o)=>{const n=e.dueDate.replaceAll("-","/");E(new Date(n),t)&&s(c(e.title,e.description,e.dueDate,o))})),g(y.arr)})()})),L.addEventListener("click",(()=>{document.querySelector(".dropDownItems").classList.toggle("displayItems")})),e(),t()})();