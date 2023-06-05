import { addWeeks, isSameDay, isWithinInterval } from "date-fns";

import makeToDo, { taskFeatures } from "./create-to-do";

import displayTasks, {
  addProject,
  createOption,
  toggleDropDown,
  clearOption,
  toggleProject,
  makeTaskContainer,
  clearContent,
  removeProjects,
  homeTasks,
  toggleEdit,
  initialProjectLoad,
  initialLoad,
  // changeProject,
} from "./dom-manipulation";

import { saveProjects } from "./locale-storage";

class Project {
  constructor(project) {
    this.project = project;
  }
}

// const demo = new Project("Do Dishes");

const drop = document.querySelector(".displayDropDown");
// const items = document.querySelector(".dropDownItems");
const add = document.querySelector(".addProject");

export const addOption = () => {
  const list = document.querySelectorAll(".projectLi");

  clearOption("project");
  clearOption("editProject");
  createOption("Home", "project");
  createOption("Home", "editProject");
  list.forEach((item) => {
    createOption(item.innerText, "project");
    createOption(item.innerText, "editProject");
  });
};

export const filterTasks = (taskTitle) => {
  makeToDo.arr.forEach((item, index) => {
    if (item.project === taskTitle) {
      //need to be able to keep the data number on change to each respective item
      //so when they are being edited or changed they will still reflect on the original array

      // console.log(index);

      displayTasks(
        makeTaskContainer(item.title, item.description, item.dueDate, index)
      );
    }
  });

  taskFeatures(makeToDo.arr);

  return [];
};

// localStorage.clear();

export const filterDays = () => {
  const today = new Date();

  makeToDo.arr.forEach((day, index) => {
    const replace = day.dueDate.replaceAll("-", "/");
    const test = new Date(replace);
    const result = isSameDay(test, today);

    if (result) {
      //need to be able to keep the data number on change to each respective item
      //so when they are being edited or changed they will still reflect on the original array

      displayTasks(
        makeTaskContainer(day.title, day.description, day.dueDate, index)
      );
    }
  });

  taskFeatures(makeToDo.arr);
  return [];
};

export const filterWeek = () => {
  const currentToday = new Date();

  makeToDo.arr.forEach((day, index) => {
    const replace = day.dueDate.replaceAll("-", "/");
    const selectedDate = new Date(replace);
    currentToday.setHours(0, 0, 0, 0);
    const addWeek = addWeeks(currentToday, 1);
    const withinWeek = isWithinInterval(selectedDate, {
      start: currentToday,
      end: addWeek,
    });

    if (withinWeek) {
      //need to be able to keep the data number on change to each respective item
      //so when they are being edited or changed they will still reflect on the original array
      displayTasks(
        makeTaskContainer(day.title, day.description, day.dueDate, index)
      );
    }
  });

  taskFeatures(makeToDo.arr);
  return [];
};

const toggleWeek = document.querySelector(".week");

toggleWeek.addEventListener("click", () => {
  clearContent();

  const mainContent = document.querySelector(".mainContent");
  const todayTitle = document.createElement("h2");

  todayTitle.textContent = "This Week";
  todayTitle.classList = "taskTitle";

  mainContent.append(todayTitle);

  filterWeek();
});

export const changeProject = () => {
  const mainContent = document.querySelector(".mainContent");
  const projectLi = document.querySelectorAll(".projectLi");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = "Home";

  const removeBtn = document.querySelector(".remove");

  // const li = document.querySelector(".projectLi");

  // projectLi.dataset.projectNum = n;

  projectLi.forEach((item) => {
    item.addEventListener("click", (e) => {
      mainContent.innerHTML = "";
      heading.textContent = e.target.textContent;

      // console.log(e.target.dataset.projectNum);

      // let x = parseInt(e.target.dataset.projectNum);
      const x = Number(e.target.dataset.projectNum);

      // console.log(x);
      removeBtn.value = x;

      // console.log(removeBtn.value);
      // removeBtn.dataset.value = e.target.dataset.value;

      // removeBtn.dataset.num = parseInt(x);
      // removeBtn.dataset.test = 5;
      mainContent.append(heading);

      mainContent.append(filterTasks(e.target.textContent));

      // console.log(mainContent.childElementCount);

      if (mainContent.childElementCount <= 1) {
        showEmptyProject(x);
        // removeBtn.dataset.num = x;
      }
    });
  });
};

export const submitProject = (project) => {
  const mainContent = document.querySelector(".mainContent");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = "Home";

  mainContent.innerHTML = "";
  heading.textContent = project;

  mainContent.append(heading);

  if (project === "Home") {
    homeTasks();
  } else {
    mainContent.append(filterTasks(project));
  }
};

changeProject();

const removeProjectItem = (e) => {
  // console.log(e.target.);
  const listItem = document.querySelector(".projectLi");
  const removeBtn = document.querySelector(".remove");

  const li = document.querySelectorAll(".projectLi");
};

const showEmptyProject = (num) => {
  const mainContent = document.querySelector(".mainContent");
  // const heading = document.createElement("h2");
  const heading = document.querySelector(".taskTitle");
  heading.className = "taskTitle";
  const deleteProject = document.createElement("button");
  deleteProject.className = "remove";

  // mainContent.innerHTML = "";

  // mainContent.append(heading, deleteProject);
  heading.textContent = "All Done? Create a new task or delete this project";
  deleteProject.textContent = "Remove Project";

  deleteProject.addEventListener("click", (e) => {
    deleteProject.dataset.num = num;

    const projectNum = deleteProject.dataset.num;
    // console.log(projectNum);

    createProject.projectArr.splice(projectNum, 1);

    removeProjects();
    initialProjectLoad();
    clearContent();
    homeTasks();
  });

  mainContent.append(deleteProject);

  return mainContent;
};

// localStorage.clear();

// on initial project creation it will be empty
// so we will show the empty project screen with option to remove
// when a task is added with the matching project, we will clear the project content and put the task and title
// when all tasks are removed then the delete project screen reappears

export const createProject = (() => {
  const project = document.querySelector("#getProject");
  const mainContent = document.querySelector(".mainContent");

  let projectArr = [];

  if (
    (localStorage.length === 0 && typeof localStorage !== "undefined") ||
    localStorage.getItem("project") === null
  ) {
    projectArr = [];
  } else {
    projectArr = JSON.parse(localStorage.getItem("project"));
  }

  // console.log(localStorage.getItem("project"));

  project.addEventListener("submit", (e) => {
    e.preventDefault();
    // removeProjects();

    const formData = new FormData(project);

    const getProject = formData.get("newProject");

    const newProject = new Project(getProject);

    if (newProject.project !== "") {
      projectArr.push(newProject);
      saveProjects(projectArr);
      removeProjects();
    }

    addProject(projectArr);

    addOption();

    changeProject();

    if (mainContent.childElementCount <= 1) {
      showEmptyProject();
    }

    console.log(projectArr);

    project.reset();
  });

  // console.log(projectArr);
  // console.log("yuo");
  return { projectArr };
})();

// localStorage.clear();

add.addEventListener("click", (e) => {
  toggleProject();
  // console.log("hi");
  // console.log(createProject.projectArr);
});

const today = document.querySelector(".today");

today.addEventListener("click", () => {
  clearContent();

  const mainContent = document.querySelector(".mainContent");
  const todayTitle = document.createElement("h2");

  todayTitle.textContent = "Today";
  todayTitle.classList = "taskTitle";

  mainContent.append(todayTitle);

  filterDays();
});

drop.addEventListener("click", () => {
  toggleDropDown();
});

// export default demo;
