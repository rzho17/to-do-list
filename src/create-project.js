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
  displayDetails,
  closeModals,
  closeProjectModal,
  closeModal,
  closeNavFunc,
  // changeProject,
} from "./dom-manipulation";

import { saveProjects } from "./locale-storage";

class Project {
  constructor(project) {
    this.project = project;
  }
}

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
      displayTasks(
        makeTaskContainer(item.title, item.description, item.dueDate, index)
      );
    }
  });

  taskFeatures(makeToDo.arr);

  return [];
};

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

export const changeProject = () => {
  const mainContent = document.querySelector(".mainContent");
  const projectLi = document.querySelectorAll(".projectLi");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = "Home";

  const removeBtn = document.querySelector(".remove");

  projectLi.forEach((item) => {
    item.addEventListener("click", (e) => {
      mainContent.innerHTML = "";
      heading.textContent = e.target.textContent;

      const projectIndex = Number(e.target.dataset.projectNum);

      removeBtn.value = projectIndex;

      mainContent.append(heading);

      mainContent.append(filterTasks(e.target.textContent));

      if (mainContent.childElementCount <= 1) {
        showEmptyProject(projectIndex);
      }

      closeNavFunc();
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

const showEmptyProject = (num) => {
  const mainContent = document.querySelector(".mainContent");
  // const heading = document.querySelector(".taskTitle");
  const heading = document.querySelector(".taskTitle");
  heading.className = "taskTitle";
  // heading.style.marginTop = "12rem";
  const deleteProject = document.createElement("button");
  deleteProject.className = "removeProject";

  heading.textContent = "All Done? Create a new task or delete this project";
  deleteProject.textContent = "Remove Project";

  deleteProject.addEventListener("click", (e) => {
    deleteProject.dataset.num = num;

    const projectNum = deleteProject.dataset.num;

    createProject.projectArr.splice(projectNum, 1);

    removeProjects();
    saveProjects(createProject.projectArr);
    initialProjectLoad();
    clearContent();
    homeTasks();
  });

  mainContent.append(deleteProject);

  return mainContent;
};

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

  project.addEventListener("submit", (e) => {
    e.preventDefault();

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
    // closeModal(project);
    closeModal(project);
    // closeModal();
  });

  return { projectArr };
})();

const addToggle = (() => {
  const add = document.querySelector(".addProject");
  add.addEventListener("click", (e) => {
    e.stopPropagation();
    // toggleProject();
  });
})();

const toggleDrop = (() => {
  const drop = document.querySelector(".displayDropDown");
  drop.addEventListener("click", () => {
    toggleDropDown();
  });
})();

const toggleDays = (() => {
  const today = document.querySelector(".today");

  today.addEventListener("click", () => {
    clearContent();

    const mainContent = document.querySelector(".mainContent");
    const todayTitle = document.createElement("h2");

    todayTitle.textContent = "Today";
    todayTitle.classList = "taskTitle";

    mainContent.append(todayTitle);

    filterDays();
    closeNavFunc();
  });
})();

const toggleWeeks = (() => {
  const toggleWeek = document.querySelector(".week");

  toggleWeek.addEventListener("click", () => {
    clearContent();

    const mainContent = document.querySelector(".mainContent");
    const todayTitle = document.createElement("h2");

    todayTitle.textContent = "This Week";
    todayTitle.classList = "taskTitle";

    mainContent.append(todayTitle);

    filterWeek();
    closeNavFunc();
  });
})();
