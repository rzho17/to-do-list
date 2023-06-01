import {
  addWeeks,
  format,
  isSameDay,
  isToday,
  isWithinInterval,
} from "date-fns";

import makeToDo, {
  displayAllTasks,
  removeItem,
  editToDo,
  setCompletion,
  displayCompletion,
  taskFeatures,
} from "./create-to-do";

import displayTasks, {
  addProject,
  createOption,
  toggleDropDown,
  clearOption,
  toggleProject,
  homeTasks,
  makeTaskContainer,
  clearContent,
  removeProjects,
  // changeProject,
} from "./dom-manipulation";

import addDays from "date-fns/addDays";
import { saveProjects } from "./locale-storage";

class Project {
  constructor(project) {
    this.project = project;
  }
}

const demo = new Project("Do Dishes");

const drop = document.querySelector(".displayDropDown");
// const items = document.querySelector(".dropDownItems");
const add = document.querySelector(".addProject");

const addOption = () => {
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

  // removeItem(makeToDo.arr);
  // editToDo(makeToDo.arr);
  // setCompletion(makeToDo.arr);
  // displayCompletion(makeToDo.arr);

  return [];
};

export const filterDays = (date) => {
  // console.log(makeToDo.arr.dueDate);

  const today = new Date();
  const newToday = addDays(today, 1);
  const checkToday = isToday(newToday);

  const addWeek = addWeeks(today, 1);

  // const hehe = new Date("2023-06-01");
  // console.log(today);
  // console.log(addWeek);

  // console.log(hehe > today && hehe < addWeek);

  const hehe = new Date("2023-05-31");

  // console.log(hehe.getDate());
  // console.log(hehe === today);

  // console.log(hehe.getDate() === today.getDate());
  // console.log(newToday);

  let testToday = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  // let testDay = `${hehe.getFullYear()}-${hehe.getMonth()}-${hehe.getDate()}`;
  // console.log(testToday);
  // console.log(testDay);

  makeToDo.arr.forEach((day, index) => {
    // const parse = Date.parse(day);

    const replace = day.dueDate.replaceAll("-", "/");

    // console.log(replace);

    // console.log(day.dueDate);
    const test = new Date(replace);

    // console.log(test);
    // console.log(test.toLocaleDateString());
    // const testAdd = addDays(test, 1);
    // let testDay = `${test.getFullYear()}-${test.getMonth()}-${test.getDate()}`;

    // console.log(day.dueDate);
    // console.log(testToday);
    // console.log(testDay);
    const result = isSameDay(test, today);
    // console.log(today);
    // console.log(test);
    // console.log(testAdd);
    // console.log(addWeek(test, 1));

    // if (result) {
    //   console.log("hi");
    //   // filterTasks();
    // }

    if (result) {
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

  // console.log(test.getDate());
  // console.log(day);
  // console.log(test);
  // console.log(today.getFullYear(), today.getMonth(), today.getDate());
  // console.log(test.getFullYear(), test.getMonth(), test.getDate());
};

export const filterWeek = () => {
  const currentToday = new Date();

  makeToDo.arr.forEach((day, index) => {
    const replace = day.dueDate.replaceAll("-", "/");

    const selectedDate = new Date(replace);

    //need to change the time

    currentToday.setHours(0, 0, 0, 0);

    console.log(currentToday);

    const addWeek = addWeeks(currentToday, 1);

    // console.log(currentToday);

    // console.log(selectedDate);
    console.log(addWeek);

    const withinWeek = isWithinInterval(selectedDate, {
      start: currentToday,
      end: addWeek,
    });

    console.log(withinWeek);

    const result = isSameDay(selectedDate, currentToday);

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

const changeProject = () => {
  const mainContent = document.querySelector(".mainContent");
  const projectLi = document.querySelectorAll(".projectLi");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = "Home";

  projectLi.forEach((item) => {
    // console.log(item.innerText);
    item.addEventListener("click", (e) => {
      mainContent.innerHTML = "";
      heading.textContent = e.target.textContent;

      // console.log(makeToDo.arr);

      mainContent.append(heading);
      // console.log(e.target.textContent);
      // if (e.target.textContent !== undefined) {
      //   console.log("nothin");
      // } else {
      //   mainContent.append(filterTasks(e.target.textContent));
      // }
      // console.log(e.target.textContent);
      mainContent.append(filterTasks(e.target.textContent));

      // homeTasks(); //Will display each task for the home section, which will be all of the tasks created
      // filterTasks();

      // mainContent.append(filterTasks());
      //   console.log(e.target.textContent);
    });
  });
};

changeProject();

// filterTasks();

export const createProject = () => {
  const project = document.querySelector("#getProject");
  console.log(localStorage.getItem("project"));

  let projectArr = [];

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

    project.reset();
  });

  return projectArr;
};

const createProjArr = createProject();

add.addEventListener("click", (e) => {
  // console.log(localStorage.getItem("project"));
  toggleProject();
  createProject();
  // console.log(createProjArr);
  // filterWeek();

  // filterDays();
  // filterTasks();
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

export default demo;
