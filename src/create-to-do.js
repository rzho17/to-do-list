import displayTasks, { removeStrike, strikeThrough } from "./dom-manipulation";
import { createP, clearContent, makeTaskContainer } from "./dom-manipulation";

class ToDo {
  constructor(title, description, dueDate, priority, complete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }

  test() {
    console.log("hi");
  }
}

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

const setCompletion = (arr) => {
  const check = document.querySelectorAll(".complete");

  check.forEach((box) => {
    box.addEventListener("click", (e) => {
      //   if (arr[e.target.dataset.number].complete === false) {
      //     console.log(false);
      //     arr[e.target.dataset.number].complete = true;
      //   }

      //   console.log(arr);

      const dataIndex = e.target.dataset.number;
      console.log(dataIndex);

      if (arr[dataIndex].complete === false) {
        arr[dataIndex].complete = true;
        strikeThrough(e);
        console.log(true);
      } else {
        arr[dataIndex].complete = false;
        removeStrike(e);
        console.log(false);
      }
    });
  });
};

export const displayAllTasks = (arr) => {
  let n = 0;
  arr.forEach((e) => {
    // const keys = Object.keys(e);
    const values = Object.values(e);

    displayTasks(makeTaskContainer(values[0], values[1], values[2], n));

    n++;

    //need a loop to go through array
    //need another loop to loop through each index of the array
    //take the key of the objects and store them or have hard written values for it
    // take the values and store them and display them on the mainContent
  });
  removeItem(arr);
  editToDo(arr);
  setCompletion(arr);
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
    const complete = false;

    const newToDo = new ToDo(title, description, dueDate, priority, complete);
    arr.push(newToDo);

    clearContent();
    displayAllTasks(arr);
    editToDo(arr);
  });
  return { arr };
})();

export default makeToDo;
