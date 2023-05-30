import displayTasks, {
  initialLoad,
  removeStrike,
  strikeThrough,
  testStrike,
  toggleEditForm,
} from "./dom-manipulation";

import { createP, clearContent, makeTaskContainer } from "./dom-manipulation";

class ToDo {
  constructor(title, description, dueDate, priority, complete, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.project = project;
  }

  test() {
    console.log("hi");
  }
}

export const removeItem = (arr) => {
  const removeTask = document.querySelectorAll(".remove");
  //   console.log(arr);

  removeTask.forEach((item) => {
    item.addEventListener("click", (e) => {
      arr.splice(e.target.dataset.number, 1);

      clearContent();
      initialLoad();
      displayAllTasks(arr);
      //   console.log(arr);
    });
  });
};

// const filterTasks = (arr) => {
//     console.log(makeToDo.arr)
// };

// filterTasks();

export const editToDo = (arr) => {
  const editForm = document.querySelector("#edit");
  const editButton = document.querySelectorAll(".editBtn");

  //   console.log(arr);

  editButton.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      let num = e.target.dataset.number;
      const specificObject = arr[num];

      //   toggleEditForm(); turn this back on when nearing completetion

      editForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // console.log(arr);
        // console.log(arr[num].complete);
        // console.log(arr, num);

        const formData = new FormData(editForm);

        const editTitle = formData.get("editTitle");
        const editDescription = formData.get("editDescription");
        const editDueDate = formData.get("editDate");
        const editPriority = formData.get("editPriority");

        const editComplete = specificObject.complete;
        const editProject = formData.get("editProject");

        const editTask = new ToDo(
          editTitle,
          editDescription,
          editDueDate,
          editPriority,
          editComplete,
          editProject
        );

        console.log(arr);

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

export const setCompletion = (arr) => {
  const check = document.querySelectorAll(".complete");

  check.forEach((box) => {
    box.addEventListener("click", (e) => {
      const dataIndex = e.target.dataset.number;

      if (arr[dataIndex].complete === false) {
        arr[dataIndex].complete = true;
        strikeThrough(e);
        console.log(arr[dataIndex].complete);
      } else {
        arr[dataIndex].complete = false;
        removeStrike(e);
        console.log(arr[dataIndex].complete);
      }
    });
  });
};

export const displayCompletion = (arr) => {
  let n = 0;
  arr.forEach((obj) => {
    if (obj.complete === true) {
      testStrike(n);
    }
    n++;
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
  displayCompletion(arr);

  return [];
  //   console.log(arr);
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
    const project = formData.get("project");

    const newToDo = new ToDo(
      title,
      description,
      dueDate,
      priority,
      complete,
      project
    );
    arr.push(newToDo);

    clearContent();
    initialLoad();
    displayAllTasks(arr);
    // editToDo(arr);
  });
  return { arr };
})();

export default makeToDo;
