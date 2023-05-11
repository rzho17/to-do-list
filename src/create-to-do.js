import displayTasks from "./dom-manipulation";
import { createP, clearContent } from "./dom-manipulation";

class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  test() {
    console.log("hi");
  }
}

const testRun = (arr) => {
  //   console.log("test");

  arr.forEach((e) => {
    // console.log(

    const keys = Object.keys(e);
    const values = Object.values(e);

    for (let i = 0; i < values.length; i++) {
      //   displayTasks(values[i]);
      displayTasks(createP(values[i]));
      //   console.log(values[i]);
    }
    // Object.keys(e).forEach((item) => {
    //   displayTasks(item);
    //   console.log(item);
    // });
    // Object.values(e).forEach((item) => {
    //   displayTasks(item);
    //   console.log(item);
    // });

    //need a loop to go through array
    //need another loop to loop through each index of the array
    //take the key of the objects and store them or have hard written values for it
    // take the values and store them and display them on the mainContent
  });
};

const makeToDo = (() => {
  const form = document.querySelector("form");
  const arr = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("date");
    const priority = formData.get("priority");

    const newToDo = new ToDo(title, description, dueDate, priority);
    // console.log(newToDo);
    arr.push(newToDo);

    clearContent();
    testRun(arr);

    // displayTasks(
    //   arr[0].title + arr[0].description + arr[0].dueDate + arr[0].priority
    // );
  });
  return { arr };
})();

// const blah = document.querySelector("[data-submit]");

// blah.addEventListener("click", () => {
//   console.log(makeToDo.arr);
// });

export default makeToDo;
