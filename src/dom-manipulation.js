import chore from "./create-to-do";
// import { makeToDo } from "./create-to-do";
import makeToDo from "./create-to-do";
import { displayAllTasks } from "./create-to-do";

const displayTasks = (task) => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.append(task);
};

export const createP = (text, value) => {
  const p = document.createElement("p");
  p.textContent = text;
  p.dataset.number = value;

  return p;
};

export const clearContent = () => {
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML = "";
};

export const strikeThrough = () => {
  //   const check = document.querySelectorAll(".complete");
  const strikeTitle = document.querySelector(".title");
  const strikeDetail = document.querySelector(".details");
  const strikeDate = document.querySelector(".date");

  strikeTitle.style.textDecoration = "line-through";
  strikeDetail.style.textDecoration = "line-through";
  strikeDate.style.textDecoration = "line-through";
};

export const removeStrike = () => {
  //   const check = document.querySelectorAll(".complete");
  const strikeTitle = document.querySelector(".title");
  const strikeDetail = document.querySelector(".details");
  const strikeDate = document.querySelector(".date");

  strikeTitle.style.textDecoration = "none";
  strikeDetail.style.textDecoration = "none";
  strikeDate.style.textDecoration = "none";
};

// export const checkCompletion = (arr) => {
//   const check = document.querySelectorAll(".complete");
//   const strikeTitle = document.querySelector(".title");
//   const strikeDetail = document.querySelector(".details");
//   const strikeDate = document.querySelector(".date");

//   check.forEach((box) => {
//     box.addEventListener("click", (e) => {
//       if (arr[e.target.dataset.value].complete === false) {
//         strikeTitle.style.textDecoration = "line-through";
//         strikeDetail.style.textDecoration = "line-through";
//         strikeDate.style.textDecoration = "line-through";
//       }
//     });
//   });
// };

export const makeTaskContainer = (title, detail, day, n) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");
  taskContainer.dataset.number = n;

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "complete";
  checkBox.dataset.number = n;

  const taskTitle = document.createElement("div");
  taskTitle.textContent = title;
  taskTitle.className = "title";

  const details = document.createElement("div");
  details.textContent = detail;
  details.className = "details";

  const date = document.createElement("div");
  date.textContent = day;
  date.className = "date";

  const edit = document.createElement("button");
  edit.className = "editBtn";
  edit.textContent = "edit";
  edit.dataset.number = n;

  const remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "remove";
  remove.dataset.number = n;

  taskContainer.append(checkBox, taskTitle, details, date, edit, remove);

  return taskContainer;
};

export default displayTasks;
