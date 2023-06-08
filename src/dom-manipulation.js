import { addOption, changeProject, createProject } from "./create-project";

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

export const editLoad = (project) => {
  const mainContent = document.querySelector(".mainContent");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = project;

  mainContent.append(heading);
};

//display tasks for nav

export const homeTasks = () => {
  const mainContent = document.querySelector(".mainContent");

  clearContent();
  initialLoad();

  mainContent.append(displayAllTasks(makeToDo.arr));
};

export const toggleEdit = () => {
  const displayEdit = document.querySelector("#edit");
  displayEdit.classList.toggle("displayEdit");

  console.log("hi");
};

const toggleHome = (() => {
  const home = document.querySelector(".home");

  home.addEventListener("click", () => {
    homeTasks();
  });
})();

//project dom manip

export const addProject = (project) => {
  const items = document.querySelector(".dropDownItems");
  let n = 0;

  project.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.className = "projectLi";
    newLi.dataset.projectNum = n;

    n++;

    newLi.textContent = item.project;

    items.append(newLi);
  });

  return items;
};

export const removeProjects = () => {
  const items = document.querySelector(".dropDownItems");
  items.innerHTML = "";
};

export const toggleDropDown = () => {
  const items = document.querySelector(".dropDownItems");

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

export const initialProjectLoad = () => {
  removeProjects();
  addProject(createProject.projectArr);
  addOption();
  changeProject();
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
  details.textContent = "Details";
  details.className = "details";

  const date = document.createElement("div");
  date.textContent = day;
  date.className = "date";

  const edit = document.createElement("button");
  edit.className = "editBtn";
  edit.textContent = "E";
  edit.dataset.number = n;

  const remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "X";
  remove.dataset.number = n;

  taskContainer.append(checkBox, taskTitle, details, date, edit, remove);

  return taskContainer;
};

//media query toggles

const navToggle = (() => {
  const navBtn = document.querySelector(".navBtn");
  const navBar = document.querySelector("#navContainer");

  navBtn.addEventListener("click", () => {
    navBar.classList.toggle("nav");
    navBar.style.width = "100%";
  });
})();

const closeNav = (() => {
  const navBtn = document.querySelector(".closeNav");
  const navBar = document.querySelector("#navContainer");

  navBtn.addEventListener("click", () => {
    navBar.classList.toggle("nav");
    navBar.style.width = "0";
  });
})();

const addTask = (() => {
  const taskBtn = document.querySelector(".taskBtn");
  const addTask = document.querySelector("#addTaskForm");

  taskBtn.addEventListener("click", () => {
    addTask.classList.toggle("addTask");
  });
})();

const closeTask = (() => {
  const close = document.querySelector(".close");
  const addTask = document.querySelector("#addTaskForm");
  //   const form = document.querySelector('.add')

  close.addEventListener("click", () => {
    addTask.classList.toggle("addTask");
  });
})();

const closeEditTask = (() => {
  const close = document.querySelector(".closeEdit");
  const editTask = document.querySelector("#edit");

  close.addEventListener("click", () => {
    editTask.classList.toggle("displayEdit");
  });
})();

const closeAddProject = (() => {
  const close = document.querySelector(".closeProject");
  const closeProject = document.querySelector("#getProject");

  close.addEventListener("click", () => {
    closeProject.classList.toggle("displayProject");
  });
})();
export default displayTasks;
