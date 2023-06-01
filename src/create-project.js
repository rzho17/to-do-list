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

    //need to change the time

    currentToday.setHours(0, 0, 0, 0);

    // console.log(currentToday);

    const addWeek = addWeeks(currentToday, 1);

    // console.log(addWeek);

    const withinWeek = isWithinInterval(selectedDate, {
      start: currentToday,
      end: addWeek,
    });

    // const result = isSameDay(selectedDate, currentToday);

    if (withinWeek) {
      //need to be able to keep the data number on change to each respective item
      //so when they are being edited or changed they will still reflect on the original array
      // console.log(index);
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

  projectLi.forEach((item) => {
    item.addEventListener("click", (e) => {
      mainContent.innerHTML = "";
      heading.textContent = e.target.textContent;

      mainContent.append(heading);

      mainContent.append(filterTasks(e.target.textContent));
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

export const createProject = (() => {
  const project = document.querySelector("#getProject");

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
