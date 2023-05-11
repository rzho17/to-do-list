import chore from "./create-to-do";
// import { makeToDo } from "./create-to-do";
import makeToDo from "./create-to-do";

const displayTasks = (arr) => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.append(arr);
};

export const createP = (text) => {
  const p = document.createElement("p");
  p.textContent = text;

  return p;
};

export const clearContent = () => {
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML = "";
};

export default displayTasks;
