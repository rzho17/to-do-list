import { addProject } from "./dom-manipulation";

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

    addProject(newProject);
    // console.log(newProject);
    // console.log(newProject.project);
    project.reset();
  });
};

createProject();

add.addEventListener("click", (e) => {
  // createProject();
  //
});

drop.addEventListener("click", () => {
  items.classList.toggle("displayItems");
});

console.log(demo.project);

export default demo;
