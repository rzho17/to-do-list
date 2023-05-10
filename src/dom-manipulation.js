import chore from "./create-to-do";
import { makeToDo } from "./create-to-do";

const test = (arr) => {
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML = "";
  mainContent.textContent = arr;
  //   console.log(Object.values(chore));
};

export default test;
