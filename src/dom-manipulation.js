import chore from "./create-to-do";
// import { makeToDo } from "./create-to-do";
import makeToDo from "./create-to-do";
import { displayAllTasks } from "./create-to-do";

//project dom manip

export const addProject = (project) => {
  const items = document.querySelector(".dropDownItems");

  const newLi = document.createElement("li");

  newLi.textContent = project.project;

  items.appendChild(newLi);

  return items;
};

//task dom manip
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

export const strikeThrough = (e) => {
  const parentDiv = e.target.parentElement;
  const strikeTitle = parentDiv.querySelector(".title");
  const strikeDetail = parentDiv.querySelector(".details");
  const strikeDate = parentDiv.querySelector(".date");

  strikeTitle.classList.toggle("toDoChecked");
  strikeDetail.classList.toggle("toDoChecked");
  strikeDate.classList.toggle("toDoChecked");
};

export const testStrike = (dataValue) => {
  const parentDiv = document.querySelector(
    '.taskContainer[data-number="' + dataValue + '"]'
  );

  const checkBox = document.querySelector(
    'input[data-number="' + dataValue + '"]'
  );
  const strikeTitle = parentDiv.querySelector(".title");
  const strikeDetail = parentDiv.querySelector(".details");
  const strikeDate = parentDiv.querySelector(".date");

  checkBox.checked = true;

  strikeTitle.classList.toggle("toDoChecked");
  strikeDetail.classList.toggle("toDoChecked");
  strikeDate.classList.toggle("toDoChecked");
};

export const removeStrike = (e) => {
  const parentDiv = e.target.parentElement;
  const strikeTitle = parentDiv.querySelector(".title");
  const strikeDetail = parentDiv.querySelector(".details");
  const strikeDate = parentDiv.querySelector(".date");

  strikeTitle.classList.remove("toDoChecked");
  strikeDetail.classList.remove("toDoChecked");
  strikeDate.classList.remove("toDoChecked");
};

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
