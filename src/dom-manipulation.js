import chore from "./create-to-do";

const test = () => {
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML = "";
  mainContent.append(Object.values(chore));
  //   console.log(Object.values(chore));
};

export default test;
