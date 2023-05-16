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

export const makeTaskContainer = (title, detail, day, n) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");
  taskContainer.dataset.number = n;

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  const taskTitle = document.createElement("div");
  taskTitle.textContent = title;

  const details = document.createElement("div");
  details.textContent = detail;

  const date = document.createElement("div");
  date.textContent = day;

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
