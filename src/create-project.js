import { addProject, createOption, toggleDropDown } from "./dom-manipulation";

class Project {
  constructor(project) {
    this.project = project;
  }
}

const demo = new Project("Do Dishes");

const drop = document.querySelector(".displayDropDown");
const items = document.querySelector(".dropDownItems");
const add = document.querySelector(".addProject");

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
    project.reset();
  });
};

createOption("sheesh");

add.addEventListener("click", (e) => {
  createProject();
});

drop.addEventListener("click", () => {
  toggleDropDown();
});

console.log(demo.project);

export default demo;
