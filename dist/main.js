(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(o){t(1,arguments);var n=Object.prototype.toString.call(o);return o instanceof Date||"object"===e(o)&&"[object Date]"===n?new Date(o.getTime()):"number"==typeof o||"[object Number]"===n?new Date(o):("string"!=typeof o&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function n(e){t(1,arguments);var n=o(e);return n.setHours(0,0,0,0),n}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}const c=e=>{const t=JSON.stringify(e);localStorage.setItem("tasks",t)};class a{constructor(e,t,o,n,r,c){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.complete=r,this.project=c}}console.log(JSON.parse(localStorage.getItem("tasks")));const s=e=>{document.querySelectorAll(".remove").forEach((t=>{t.addEventListener("click",(t=>{e.splice(t.target.dataset.number,1),P(),b(),d(e)}))}))},l=e=>{const t=document.querySelector("#edit");document.querySelectorAll(".editBtn").forEach((o=>{o.addEventListener("click",(o=>{let n=o.target.dataset.number;const r=e[n];L(),t.addEventListener("submit",(o=>{o.preventDefault();const c=new FormData(t),s=c.get("editTitle"),l=c.get("editDescription"),i=c.get("editDate"),u=c.get("editPriority"),m=r.complete,p=c.get("editProject"),g=new a(s,l,i,u,m,p);console.log(e),""!==n&&(e.splice(n,1,g),P(),k(p),d(e),v(p)),n=""}))}))}))},i=e=>{document.querySelectorAll(".complete").forEach((t=>{t.addEventListener("click",(t=>{const o=t.target.dataset.number;!1===e[o].complete?(e[o].complete=!0,O(t),console.log(e[o].complete)):(e[o].complete=!1,J(t),console.log(e[o].complete)),c(e)}))}))},u=e=>{let t=0;e.forEach((e=>{!0===e.complete&&M(t),t++}))},d=e=>{let t=0;return e.forEach((e=>{const o=Object.values(e);B(F(o[0],o[1],o[2],t)),t++})),s(e),l(e),i(e),u(e),c(e),[]},m=e=>{s(e),l(e),i(e),u(e)},p=(()=>{const e=document.querySelector("form");let t=[];return t=0===localStorage.length?[]:JSON.parse(localStorage.getItem("tasks")),e.addEventListener("submit",(o=>{o.preventDefault();const n=new FormData(e),r=n.get("title"),c=n.get("description"),s=n.get("date"),l=n.get("priority"),i=n.get("project"),u=new a(r,c,s,l,!1,i);t.push(u),P(),b(),d(t),v(i)})),{arr:t}})();class g{constructor(e){this.project=e}}const y=document.querySelector(".displayDropDown"),S=document.querySelector(".addProject"),h=()=>{const e=document.querySelectorAll(".projectLi");A("project"),A("editProject"),x("Home","project"),x("Home","editProject"),e.forEach((e=>{x(e.innerText,"project"),x(e.innerText,"editProject")}))},f=e=>(p.arr.forEach(((t,o)=>{t.project===e&&B(F(t.title,t.description,t.dueDate,o))})),m(p.arr),[]),E=()=>{const e=new Date;return p.arr.forEach(((n,c)=>{const a=n.dueDate.replaceAll("-","/"),s=new Date(a);e.setHours(0,0,0,0);const l=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var c=o(e),a=r(n);return isNaN(a)?new Date(NaN):a?(c.setDate(c.getDate()+a),c):c}(e,7*r(n))}(e,1);(function(e,n){t(2,arguments);var r=o(e).getTime(),c=o(n.start).getTime(),a=o(n.end).getTime();if(!(c<=a))throw new RangeError("Invalid interval");return r>=c&&r<=a})(s,{start:e,end:l})&&B(F(n.title,n.description,n.dueDate,c))})),m(p.arr),[]};document.querySelector(".week").addEventListener("click",(()=>{P();const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.textContent="This Week",t.classList="taskTitle",e.append(t),E()}));const q=()=>{const e=document.querySelector(".mainContent"),t=document.querySelectorAll(".projectLi"),o=document.createElement("h2");o.className="taskTitle",o.textContent="Home";const n=document.querySelector(".remove");t.forEach((t=>{t.addEventListener("click",(t=>{e.innerHTML="",o.textContent=t.target.textContent;const r=Number(t.target.dataset.projectNum);n.value=r,e.append(o),e.append(f(t.target.textContent)),e.childElementCount<=1&&C(r)}))}))},v=e=>{const t=document.querySelector(".mainContent"),o=document.createElement("h2");o.className="taskTitle",o.textContent="Home",t.innerHTML="",o.textContent=e,t.append(o),"Home"===e?j():t.append(f(e))};q();const C=e=>{const t=document.querySelector(".mainContent"),o=document.querySelector(".taskTitle");o.className="taskTitle";const n=document.createElement("button");return n.className="remove",o.textContent="All Done? Create a new task or delete this project",n.textContent="Remove Project",n.addEventListener("click",(t=>{console.log(typeof e),n.dataset.num=e;const o=n.dataset.num;console.log(o),D.projectArr.splice(o,1),w(),I()})),t.append(n),t},D=(()=>{const e=document.querySelector("#getProject");let t=[];return t=0===localStorage.length&&"undefined"!=typeof localStorage||null===localStorage.getItem("project")?[]:JSON.parse(localStorage.getItem("project")),e.addEventListener("submit",(o=>{o.preventDefault();const n=new FormData(e).get("newProject"),r=new g(n);""!==r.project&&(t.push(r),(e=>{const t=JSON.stringify(e);localStorage.setItem("project",t)})(t),w()),N(t),h(),q(),C(t),console.log(t),e.reset()})),{projectArr:t}})();S.addEventListener("click",(e=>{H()})),document.querySelector(".today").addEventListener("click",(()=>{P();const e=document.querySelector(".mainContent"),o=document.createElement("h2");o.textContent="Today",o.classList="taskTitle",e.append(o),(()=>{const e=new Date;p.arr.forEach(((o,r)=>{const c=o.dueDate.replaceAll("-","/");(function(e,o){t(2,arguments);var r=n(e),c=n(o);return r.getTime()===c.getTime()})(new Date(c),e)&&B(F(o.title,o.description,o.dueDate,r))})),m(p.arr)})()})),y.addEventListener("click",(()=>{T()}));const b=()=>{const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.className="taskTitle",t.textContent="Home",e.append(t)},k=e=>{const t=document.querySelector(".mainContent"),o=document.createElement("h2");o.className="taskTitle",o.textContent=e,t.append(o)},j=()=>{const e=document.querySelector(".mainContent");P(),b(),e.append(d(p.arr))},L=()=>{document.querySelector("#edit").classList.toggle("displayEdit"),console.log("hi")};document.querySelector(".home").addEventListener("click",(()=>{j()}));const N=e=>{const t=document.querySelector(".dropDownItems");let o=0;return e.forEach((e=>{const n=document.createElement("li");n.className="projectLi",n.dataset.projectNum=o,console.log(o),o++,n.textContent=e.project,t.append(n)})),t},w=()=>{document.querySelector(".dropDownItems").innerHTML=""},T=()=>{document.querySelector(".dropDownItems").classList.toggle("displayItems")},x=(e,t)=>{const o=document.querySelector(`#${t}`),n=document.createElement("option");return n.text=e,n.value=e,o.append(n),n},A=e=>{const t=document.querySelector(`#${e}`);for(;t.options.length>0;)t.remove(0)},H=()=>{document.querySelector("#getProject").classList.toggle("displayProject")},I=()=>{w(),N(D.projectArr),h(),q()},P=()=>{document.querySelector(".mainContent").innerHTML=""},O=e=>{const t=e.target.parentElement,o=t.querySelector(".title"),n=t.querySelector(".details"),r=t.querySelector(".date");o.classList.toggle("toDoChecked"),n.classList.toggle("toDoChecked"),r.classList.toggle("toDoChecked")},M=e=>{console.log(e);const t=document.querySelector('.taskContainer[data-number="'+e+'"]');console.log(t);const o=document.querySelector('input[data-number="'+e+'"]');if(console.log(o),null===t||null===o)console.log("nothing");else{const e=t.querySelector(".title"),n=t.querySelector(".details"),r=t.querySelector(".date");o.checked=!0,e.classList.toggle("toDoChecked"),n.classList.toggle("toDoChecked"),r.classList.toggle("toDoChecked")}},J=e=>{const t=e.target.parentElement,o=t.querySelector(".title"),n=t.querySelector(".details"),r=t.querySelector(".date");o.classList.remove("toDoChecked"),n.classList.remove("toDoChecked"),r.classList.remove("toDoChecked")},F=(e,t,o,n)=>{const r=document.createElement("div");r.setAttribute("class","taskContainer"),r.dataset.number=n;const c=document.createElement("input");c.setAttribute("type","checkbox"),c.className="complete",c.dataset.number=n;const a=document.createElement("div");a.textContent=e,a.className="title";const s=document.createElement("div");s.textContent=t,s.className="details";const l=document.createElement("div");l.textContent=o,l.className="date";const i=document.createElement("button");i.className="editBtn",i.textContent="edit",i.dataset.number=n;const u=document.createElement("button");return u.className="remove",u.textContent="remove",u.dataset.number=n,r.append(c,a,s,l,i,u),r},B=e=>{document.querySelector(".mainContent").append(e)};b(),j(),I()})();