(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(n){t(1,arguments);var o=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===o?new Date(n.getTime()):"number"==typeof n||"[object Number]"===o?new Date(n):("string"!=typeof n&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){t(1,arguments);var o=n(e);return o.setHours(0,0,0,0),o}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}const c=()=>{const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.className="taskTitle",t.textContent="Home",e.append(t)},a=()=>{const e=document.querySelector(".mainContent");m(),c(),e.append(M(F.arr))},s=(document.querySelector(".home").addEventListener("click",(()=>{a(),S(),y()})),e=>{const t=document.querySelector(".dropDownItems");let n=0;return e.forEach((e=>{const o=document.createElement("li");o.className="projectLi",o.dataset.projectNum=n,n++,o.textContent=e.project,t.append(o)})),t}),l=()=>{document.querySelector(".dropDownItems").innerHTML=""},d=(e,t)=>{const n=document.querySelector(`#${t}`),o=document.createElement("option");return o.text=e,o.value=e,n.append(o),o},i=e=>{const t=document.querySelector(`#${e}`);for(;t.options.length>0;)t.remove(0)},u=()=>{l(),s(x.projectArr),L(),j()},m=()=>{document.querySelector(".mainContent").innerHTML=""},p=(e,t,n,o)=>{const r=document.createElement("div");r.setAttribute("class","taskContainer"),r.dataset.number=o;const c=document.createElement("div");c.className="checkAndTitle";const a=document.createElement("input");a.setAttribute("type","checkbox"),a.className="complete",a.dataset.number=o;const s=document.createElement("div");s.textContent=e,s.className="title";const l=document.createElement("div");l.textContent="Details",l.className="details",l.dataset.formTarget="#detailInfo";const d=document.createElement("div");d.textContent=n,d.className="date";const i=document.createElement("div");i.className="buttonBox";const u=document.createElement("img");u.className="editBtn",u.src="assets/edit.svg",u.alt="edit button",u.dataset.number=o,u.dataset.formTarget="#edit";const m=document.createElement("img");return m.src="assets/trash.svg",m.alt="trash button",m.className="remove",m.textContent="X",m.dataset.number=o,c.append(a,s),i.append(l,u,m),r.append(c,i),s.append(d),r},y=()=>{document.querySelector("body");const e=document.querySelector("#navContainer");window.screen.availWidth>=768?(e.style.width="250px",e.style.display="flex"):(e.style.width="100%",S()),g()},g=()=>{document.querySelectorAll("li").forEach((e=>{e.classList.remove("targeted"),e.addEventListener("click",(e=>{e.target.classList.toggle("targeted")}))}))},S=((()=>{const e=document.querySelector(".navBtn"),t=document.querySelector("#navContainer");e.addEventListener("click",(()=>{window.screen.availWidth<=768?(t.classList.toggle("nav"),t.style.width="100%"):t.style.width="250px"}))})(),(()=>{const e=document.querySelector(".closeNav"),t=document.querySelector("#navContainer");e.addEventListener("click",(()=>{t.classList.toggle("nav"),t.style.width="0"}))})(),()=>{document.querySelector(".closeNav");const e=document.querySelector("#navContainer");e.classList.toggle("nav"),e.style.width="0"}),v=e=>{const t=document.querySelector("#overlay");void 0!==e&&(e.classList.add("active"),t.classList.add("active"))},f=e=>{const t=document.querySelector("#overlay");void 0!==e&&(e.classList.remove("active"),t.classList.remove("active"))};document.querySelectorAll("[data-form-target]").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(e.dataset.formTarget);v(t)}))})),document.querySelectorAll("[data-form-target]").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(e.dataset.formTarget);v(t)}))}));const E=()=>{document.querySelectorAll("[data-form-target]").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(e.dataset.formTarget);v(t)}))}))},h=(document.querySelectorAll("[data-form-close]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".modal");f(t)}))})),document.querySelector("#overlay").addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{f(e)}))})),e=>{const t=document.querySelectorAll(".details"),n=document.querySelector("#detailInfo");t.forEach((t=>{t.addEventListener("click",(o=>{const r=t.parentNode.parentNode.dataset.number,c=document.createElement("button");n.textContent="",c.textContent="X",c.className="close",c.type="button",c.dataset.formClose="",n.append(c),document.querySelectorAll("[data-form-close]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".modal");f(t)}))}));const a=Object.values(e[r]);Object.keys(e[r]).forEach((e=>{const t=document.createElement("div");t.className="newKey";const o=document.createElement("div");o.className="keyValue",o.textContent=e.charAt(0).toUpperCase()+e.substring(1)+":",t.append(o),n.append(t)})),document.querySelectorAll(".newKey").forEach(((e,t)=>{const n=document.createElement("div");n.className="itemValue",n.textContent=a[t],e.append(n)}))}))}))}),q=e=>{document.querySelector(".mainContent").append(e)},b=e=>{const t=JSON.stringify(e);localStorage.setItem("tasks",t)},C=e=>{const t=JSON.stringify(e);localStorage.setItem("project",t)};class k{constructor(e){this.project=e}}const L=()=>{const e=document.querySelectorAll(".projectLi");i("project"),i("editProject"),d("Home","project"),d("Home","editProject"),e.forEach((e=>{d(e.innerText,"project"),d(e.innerText,"editProject")}))},N=e=>(F.arr.forEach(((t,n)=>{t.project===e&&q(p(t.title,t.description,t.dueDate,n))})),B(F.arr),[]),w=()=>{const e=new Date;return F.arr.forEach(((o,c)=>{const a=o.dueDate.replaceAll("-","/"),s=new Date(a);e.setHours(0,0,0,0);const l=function(e,o){return t(2,arguments),function(e,o){t(2,arguments);var c=n(e),a=r(o);return isNaN(a)?new Date(NaN):a?(c.setDate(c.getDate()+a),c):c}(e,7*r(o))}(e,1);(function(e,o){t(2,arguments);var r=n(e).getTime(),c=n(o.start).getTime(),a=n(o.end).getTime();if(!(c<=a))throw new RangeError("Invalid interval");return r>=c&&r<=a})(s,{start:e,end:l})&&q(p(o.title,o.description,o.dueDate,c))})),B(F.arr),[]},j=()=>{const e=document.querySelector(".mainContent"),t=document.querySelectorAll(".projectLi"),n=document.createElement("h2");n.className="taskTitle",n.textContent="Home";const o=document.querySelector(".remove");t.forEach((t=>{t.addEventListener("click",(t=>{e.innerHTML="",n.textContent=t.target.textContent;const r=Number(t.target.dataset.projectNum);o.value=r,e.append(n),e.append(N(t.target.textContent)),e.childElementCount<=1&&T(r),y(),g()}))}))},D=e=>{const t=document.querySelector(".mainContent"),n=document.createElement("h2");n.className="taskTitle",n.textContent="Home",t.innerHTML="",n.textContent=e,t.append(n),"Home"===e?a():t.append(N(e))};j();const T=e=>{const t=document.querySelector(".mainContent"),n=document.querySelector(".taskTitle");n.className="taskTitle";const o=document.createElement("button");return o.className="removeProject",n.textContent="All Done? Create a new task or delete this project",o.textContent="Remove Project",o.addEventListener("click",(t=>{o.dataset.num=e;const n=o.dataset.num;x.projectArr.splice(n,1),l(),C(x.projectArr),u(),m(),a()})),t.append(o),t},x=(()=>{const e=document.querySelector("#getProject"),t=document.querySelector(".mainContent");let n=[];return n=0===localStorage.length&&"undefined"!=typeof localStorage||null===localStorage.getItem("project")?[]:JSON.parse(localStorage.getItem("project")),e.addEventListener("submit",(o=>{o.preventDefault();const r=new FormData(e).get("newProject"),c=new k(r);""!==c.project&&(n.push(c),C(n),l()),s(n),L(),j(),t.childElementCount<=1&&T(),console.log(n),e.reset(),f(e)})),{projectArr:n}})();document.querySelector(".addProject").addEventListener("click",(e=>{e.stopPropagation()})),document.querySelector(".displayDropDown").addEventListener("click",(()=>{document.querySelector(".dropDownItems").classList.toggle("displayItems")})),document.querySelector(".today").addEventListener("click",(()=>{m();const e=document.querySelector(".mainContent"),n=document.createElement("h2");n.textContent="Today",n.classList="taskTitle",e.append(n),(()=>{const e=new Date;F.arr.forEach(((n,r)=>{const c=n.dueDate.replaceAll("-","/");(function(e,n){t(2,arguments);var r=o(e),c=o(n);return r.getTime()===c.getTime()})(new Date(c),e)&&q(p(n.title,n.description,n.dueDate,r))})),B(F.arr)})(),y()})),document.querySelector(".week").addEventListener("click",(()=>{m();const e=document.querySelector(".mainContent"),t=document.createElement("h2");t.textContent="This Week",t.classList="taskTitle",e.append(t),w(),y()}));class A{constructor(e,t,n,o,r,c){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.complete=r,this.project=c}}const I=e=>{document.querySelectorAll(".remove").forEach((t=>{t.addEventListener("click",(t=>{e.splice(t.target.dataset.number,1),m(),c(),M(e)}))}))},H=e=>{const t=document.querySelector("#edit"),n=document.querySelectorAll(".editBtn");E(),n.forEach((n=>{n.addEventListener("click",(n=>{let o=n.target.dataset.number;const r=e[o];E(),t.addEventListener("submit",(n=>{n.preventDefault();const c=new FormData(t),a=c.get("editTitle"),s=c.get("editDescription"),l=c.get("editDate"),d=c.get("editPriority"),i=r.complete,u=c.get("editProject"),p=new A(a,s,l,d,i,u);console.log(e),""!==o&&(e.splice(o,1,p),m(),(e=>{const t=document.querySelector(".mainContent"),n=document.createElement("h2");n.className="taskTitle",n.textContent=e,t.append(n)})(u),M(e),D(u)),o="",f(t)}))}))}))},P=e=>{document.querySelectorAll(".complete").forEach((t=>{t.addEventListener("click",(t=>{const n=t.target.dataset.number;!1===e[n].complete?(e[n].complete=!0,(e=>{const t=e.target.parentElement.parentElement,n=t.querySelector(".title");t.querySelector(".details"),t.querySelector(".date"),n.classList.toggle("toDoChecked")})(t)):(e[n].complete=!1,(e=>{const t=e.target.parentElement,n=t.querySelector(".title");t.querySelector(".details"),t.querySelector(".date"),n.classList.remove("toDoChecked")})(t)),b(e)}))}))},O=e=>{let t=0;e.forEach((e=>{!0===e.complete&&(e=>{const t=document.querySelector('.taskContainer[data-number="'+e+'"]'),n=document.querySelector('input[data-number="'+e+'"]');if(null===t||null===n)console.log("nothing");else{const e=t.querySelector(".title");t.querySelector(".details"),t.querySelector(".date"),n.checked=!0,e.classList.toggle("toDoChecked")}})(t),t++}))},M=e=>{let t=0;return e.forEach((e=>{const n=Object.values(e);q(p(n[0],n[1],n[2],t)),t++})),I(e),H(e),P(e),O(e),b(e),h(e),[]},B=e=>{I(e),H(e),P(e),O(e),h(e)},F=(()=>{const e=document.querySelector("#addTaskForm");let t=[];return t=0===localStorage.length?[]:JSON.parse(localStorage.getItem("tasks")),e.addEventListener("submit",(n=>{n.preventDefault();const o=new FormData(e),r=o.get("title"),a=o.get("description"),s=o.get("date"),l=o.get("priority"),d=o.get("project"),i=new A(r,a,s,l,!1,d);t.push(i),m(),c(),M(t),D(d),e.reset(),f(e)})),{arr:t}})();c(),a(),u(),E()})();