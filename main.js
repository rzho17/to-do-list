(()=>{"use strict";const t=()=>{document.querySelector(".mainContent").innerHTML=""};class e{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}test(){console.log("hi")}}const n=t=>{let e=0;t.forEach((t=>{Object.keys(t);const n=Object.values(t);var o;o=((t,e,n,o)=>{const c=document.createElement("div");c.setAttribute("class","taskContainer"),c.dataset.number=o;const r=document.createElement("input");r.setAttribute("type","checkbox");const s=document.createElement("div");s.textContent=t;const i=document.createElement("div");i.textContent=e;const a=document.createElement("div");a.textContent=n;const d=document.createElement("button");d.className="editBtn",d.textContent="edit",d.dataset.number=o;const l=document.createElement("button");return l.className="remove",l.textContent="remove",l.dataset.number=o,c.append(r,s,i,a,d,l),c})(n[0],n[1],n[2],e),document.querySelector(".mainContent").append(o),e++})),o(t),c(t)},o=e=>{const o=document.querySelectorAll(".remove");console.log(e),o.forEach((o=>{o.addEventListener("click",(o=>{e.splice(o.target.dataset.number,1),t(),n(e),console.log(e)}))}))},c=o=>{const c=document.querySelector("#edit");document.querySelectorAll(".editBtn").forEach((r=>{r.addEventListener("click",(r=>{let s=r.target.dataset.number;c.addEventListener("submit",(r=>{r.preventDefault();const i=new FormData(c),a=i.get("editTitle"),d=i.get("editDescription"),l=i.get("editDate"),u=i.get("editPriority"),m=new e(a,d,l,u);""!==s&&(o.splice(s,1,m),t(),n(o)),s=""}))}))}))};(()=>{const o=document.querySelector("form"),r=[];o.addEventListener("submit",(s=>{s.preventDefault();const i=new FormData(o),a=i.get("title"),d=i.get("description"),l=i.get("date"),u=i.get("priority"),m=new e(a,d,l,u);r.push(m),t(),n(r),c(r)}))})()})();