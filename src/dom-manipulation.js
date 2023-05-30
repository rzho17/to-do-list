import chore from "./create-to-do";
// import { makeToDo } from "./create-to-do";
import makeToDo from "./create-to-do";
import { displayAllTasks } from "./create-to-do";

//initial page load

export const initialLoad = () => {
  const mainContent = document.querySelector(".mainContent");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = "Home";

  mainContent.append(heading);
};

//display tasks for nav

export const homeTasks = () => {
  const mainContent = document.querySelector(".mainContent");
  const homeTask = document.querySelector(".taskTitle");

  const test = document.createElement("div");

  //   test.textContent = "yo";
  clearContent();
  initialLoad();
  //   console.log(displayAllTasks(makeToDo.arr));
  //   console.log(makeToDo.arr);

  //   console.log(displayAllTasks(makeToDo.arr));

  //   if (displayAllTasks(makeToDo.arr) === undefined) {
  //     console.log("hi");
  //   } else {
  //     mainContent.append(displayAllTasks(makeToDo.arr));
  //   }
  mainContent.append(displayAllTasks(makeToDo.arr));

  // homeTask.append(displayAllTasks(makeToDo.arr));
};

const home = document.querySelector(".home");

home.addEventListener("click", () => {
  homeTasks();
});
//project dom manip

export const addProject = (project) => {
  const items = document.querySelector(".dropDownItems");

  const newLi = document.createElement("li");
  newLi.className = "projectLi";

  newLi.textContent = project.project;

  items.appendChild(newLi);

  return items;
};

export const toggleDropDown = () => {
  const items = document.querySelector(".dropDownItems");

  //   items.classList.toggle("displayItems");
  items.classList.toggle("displayItems");
};

export const createOption = (project, selector) => {
  const select = document.querySelector(`#${selector}`);

  const newOption = document.createElement("option");

  newOption.text = project;
  newOption.value = project;

  select.append(newOption);

  return newOption;
};

export const clearOption = (selector) => {
  const select = document.querySelector(`#${selector}`);

  while (select.options.length > 0) {
    select.remove(0);
  }
};

export const toggleProject = () => {
  const displayProject = document.querySelector("#getProject");
  displayProject.classList.toggle("displayProject");
};

// export const changeProject = () => {
//   const mainContent = document.querySelector(".mainContent");
//   const projectLi = document.querySelectorAll("li");
//   const heading = document.createElement("h2");
//   heading.className = "taskTitle";

//   projectLi.forEach((item) => {
//     // console.log(item.innerText);
//     item.addEventListener("click", (e) => {
//       mainContent.innerHTML = "";
//       heading.textContent = e.target.textContent;

//       mainContent.append(heading);

//       homeTasks(); //Will display each task for the home section, which will be all of the tasks created

//       //   console.log(e.target.textContent);
//     });
//   });
// };

//task dom manip
const displayTasks = (task) => {
  const mainContent = document.querySelector(".mainContent");
  // const heading = document.querySelector(".taskTitle");

  //   heading.append(task);

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
  //need to figure out how to clear this without clearing the title as i am appending things to the title
};

export const strikeThrough = (e) => {
  const parentDiv = e.target.parentElement;
  //   console.log(e.target.parentElement);
  const strikeTitle = parentDiv.querySelector(".title");
  const strikeDetail = parentDiv.querySelector(".details");
  const strikeDate = parentDiv.querySelector(".date");

  strikeTitle.classList.toggle("toDoChecked");
  strikeDetail.classList.toggle("toDoChecked");
  strikeDate.classList.toggle("toDoChecked");
};

export const testStrike = (dataValue) => {
  console.log(dataValue);

  const parentDiv = document.querySelector(
    '.taskContainer[data-number="' + dataValue + '"]'
  );

  console.log(parentDiv);

  const checkBox = document.querySelector(
    'input[data-number="' + dataValue + '"]'
  );

  console.log(checkBox);

  if (parentDiv === null || checkBox === null) {
    console.log("nothing");
  } else {
    const strikeTitle = parentDiv.querySelector(".title");
    const strikeDetail = parentDiv.querySelector(".details");
    const strikeDate = parentDiv.querySelector(".date");

    checkBox.checked = true;

    strikeTitle.classList.toggle("toDoChecked");
    strikeDetail.classList.toggle("toDoChecked");
    strikeDate.classList.toggle("toDoChecked");
  }
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

export const toggleEditForm = () => {
  const editForm = document.querySelector("#edit");
  editForm.classList.toggle("displayEdit");
  console.log("hi");
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
