import displayTasks from "./dom-manipulation";
import { createP, clearContent, makeTaskContainer } from "./dom-manipulation";

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

export const displayAllTasks = (arr) => {
  let n = 0;
  arr.forEach((e) => {
    const keys = Object.keys(e);
    const values = Object.values(e);

    // for (let i = 0; i < values.length; i++) {
    //   //   displayTasks(createP(keys[i], n));
    //   //   displayTasks(createP(values[i], n));
    //   //   makeTaskContainer(values[0], values[1], values[2]);
    //   //   console.log(values[0], values[1], values[2]);
    //   //   console.log(n);
    // }
    displayTasks(makeTaskContainer(values[0], values[1], values[2], n));

    n++;

    //need a loop to go through array
    //need another loop to loop through each index of the array
    //take the key of the objects and store them or have hard written values for it
    // take the values and store them and display them on the mainContent
  });
  removeItem(arr);
  editToDo(arr);
};

const removeItem = (arr) => {
  const removeTask = document.querySelectorAll(".remove");
  console.log(arr);

  removeTask.forEach((item) => {
    item.addEventListener("click", (e) => {
      arr.splice(e.target.dataset.number, 1);

      clearContent();
      displayAllTasks(arr);
      console.log(arr);
    });
  });
};

const editToDo = (arr) => {
  const editForm = document.querySelector("#edit");
  const editButton = document.querySelectorAll(".editBtn");

  editButton.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      //give the edit a data number
      //edit that specic number by using it as the index of the arr
      // edit the info in that array index by usinga pop up

      let num = e.target.dataset.number;

      editForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(editForm);

        const editTitle = formData.get("editTitle");
        const editDescription = formData.get("editDescription");
        const editDueDate = formData.get("editDate");
        const editPriority = formData.get("editPriority");

        const editTask = new ToDo(
          editTitle,
          editDescription,
          editDueDate,
          editPriority
        );

        if (num !== "") {
          arr.splice(num, 1, editTask);
          clearContent();
          displayAllTasks(arr);
        }

        num = "";
      });
    });
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
    arr.push(newToDo);

    clearContent();
    displayAllTasks(arr);
    editToDo(arr);
  });
  return { arr };
})();

export default makeToDo;
