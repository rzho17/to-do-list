import makeToDo, {
  displayAllTasks,
  removeItem,
  editToDo,
  setCompletion,
  displayCompletion,
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
  // changeProject,
} from "./dom-manipulation";

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

  removeItem(makeToDo.arr);
  editToDo(makeToDo.arr);
  setCompletion(makeToDo.arr);
  displayCompletion(makeToDo.arr);

  return [];
};

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

  project.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(project);

    const getProject = formData.get("newProject");

    const newProject = new Project(getProject);

    if (newProject.project !== "") {
      addProject(newProject);
    }
    addOption();

    changeProject();

    project.reset();
  });
};

add.addEventListener("click", (e) => {
  toggleProject();
  createProject();
  // filterTasks();
});

drop.addEventListener("click", () => {
  toggleDropDown();
});

export default demo;
