import { changeProject, submitProject } from "./create-project";
import displayTasks, {
  initialLoad,
  removeStrike,
  strikeThrough,
  testStrike,
  clearContent,
  makeTaskContainer,
  editLoad,
  toggleEdit,
  openModals,
  displayDetails,
  closeModals,
  closeModal,
} from "./dom-manipulation";

import { saveLocale } from "./locale-storage";

class ToDo {
  constructor(title, description, dueDate, priority, complete, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.project = project;
  }
}

export const removeItem = (arr) => {
  const removeTask = document.querySelectorAll(".remove");

  removeTask.forEach((item) => {
    item.addEventListener("click", (e) => {
      arr.splice(e.target.dataset.number, 1);

      clearContent();
      initialLoad();
      displayAllTasks(arr);
    });
  });
};

export const editToDo = (arr) => {
  const editForm = document.querySelector("#edit");
  const editButton = document.querySelectorAll(".editBtn");
  openModals();

  editButton.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      let num = e.target.dataset.number;
      const specificObject = arr[num];

      openModals();

      editForm.addEventListener("submit", (e) => {
        e.preventDefault();

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
          editLoad(editProject);
          displayAllTasks(arr);
          submitProject(editProject);
        }

        num = "";

        closeModal(editForm);
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
      } else {
        arr[dataIndex].complete = false;
        removeStrike(e);
      }
      saveLocale(arr);
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
    const values = Object.values(e);

    displayTasks(makeTaskContainer(values[0], values[1], values[2], n));

    n++;
  });

  removeItem(arr);
  editToDo(arr);
  setCompletion(arr);
  displayCompletion(arr);
  saveLocale(arr);
  displayDetails(arr);

  return [];
};

export const taskFeatures = (arr) => {
  removeItem(arr);
  editToDo(arr);
  setCompletion(arr);
  displayCompletion(arr);
  displayDetails(arr);
};

const makeToDo = (() => {
  const form = document.querySelector("#addTaskForm");
  let arr = [];

  if (localStorage.length === 0) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("tasks"));
  }

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
    submitProject(project);
    form.reset();

    closeModal(form);
  });
  return { arr };
})();

export default makeToDo;
