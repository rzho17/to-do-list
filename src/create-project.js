import {
  addProject,
  createOption,
  toggleDropDown,
  clearOption,
  toggleProject,
} from "./dom-manipulation";

class Project {
  constructor(project) {
    this.project = project;
  }
}

const demo = new Project("Do Dishes");

const drop = document.querySelector(".displayDropDown");
const items = document.querySelector(".dropDownItems");
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

    project.reset();
  });
};

add.addEventListener("click", (e) => {
  toggleProject();
  createProject();
});

drop.addEventListener("click", () => {
  toggleDropDown();
});

console.log(demo.project);

export default demo;
