import { addOption, changeProject, createProject } from "./create-project";

import makeToDo from "./create-to-do";
import { displayAllTasks } from "./create-to-do";

//initial page load

export const initialLoad = () => {
  const mainContent = document.querySelector(".mainContent");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = "Home";

  mainContent.append(heading);
};

export const editLoad = (project) => {
  const mainContent = document.querySelector(".mainContent");
  const heading = document.createElement("h2");
  heading.className = "taskTitle";
  heading.textContent = project;

  mainContent.append(heading);
};

//display tasks for nav

export const homeTasks = () => {
  const mainContent = document.querySelector(".mainContent");

  clearContent();
  initialLoad();

  mainContent.append(displayAllTasks(makeToDo.arr));
};

// export const toggleEdit = () => {
//   const displayEdit = document.querySelector("#edit");
//   displayEdit.classList.toggle("displayEdit");

//   console.log("hi");
// };

const toggleHome = (() => {
  const home = document.querySelector(".home");

  home.addEventListener("click", () => {
    homeTasks();
  });
})();

//project dom manip

export const addProject = (project) => {
  const items = document.querySelector(".dropDownItems");
  let n = 0;

  project.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.className = "projectLi";
    newLi.dataset.projectNum = n;

    n++;

    newLi.textContent = item.project;

    items.append(newLi);
  });

  return items;
};

export const removeProjects = () => {
  const items = document.querySelector(".dropDownItems");
  items.innerHTML = "";
};

export const toggleDropDown = () => {
  const items = document.querySelector(".dropDownItems");

  items.classList.toggle("displayItems");
};

export const createOption = (project, selector) => {
  const select = document.querySelector(`#${selector}`);

  const newOption = document.createElement("option");

  newOption.text = project;
  newOption.value = project;

  select.append(newOption);

  return newOption;
};

export const clearOption = (selector) => {
  const select = document.querySelector(`#${selector}`);

  while (select.options.length > 0) {
    select.remove(0);
  }
};

export const toggleProject = () => {
  const displayProject = document.querySelector("#getProject");
  displayProject.classList.toggle("displayProject");
};

export const initialProjectLoad = () => {
  removeProjects();
  addProject(createProject.projectArr);
  addOption();
  changeProject();
};

//task dom manip
const displayTasks = (task) => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.append(task);
};

export const createP = (text, value) => {
  const p = document.createElement("p");
  p.textContent = text;
  p.dataset.number = value;

  return p;
};

export const clearContent = () => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.innerHTML = "";
};

export const strikeThrough = (e) => {
  const parentDiv = e.target.parentElement;
  const strikeTitle = parentDiv.querySelector(".title");
  const strikeDetail = parentDiv.querySelector(".details");
  const strikeDate = parentDiv.querySelector(".date");

  strikeTitle.classList.toggle("toDoChecked");
  strikeDetail.classList.toggle("toDoChecked");
  strikeDate.classList.toggle("toDoChecked");
};

export const testStrike = (dataValue) => {
  console.log(dataValue);

  const parentDiv = document.querySelector(
    '.taskContainer[data-number="' + dataValue + '"]'
  );

  console.log(parentDiv);

  const checkBox = document.querySelector(
    'input[data-number="' + dataValue + '"]'
  );

  console.log(checkBox);

  if (parentDiv === null || checkBox === null) {
    console.log("nothing");
  } else {
    const strikeTitle = parentDiv.querySelector(".title");
    const strikeDetail = parentDiv.querySelector(".details");
    const strikeDate = parentDiv.querySelector(".date");

    checkBox.checked = true;

    strikeTitle.classList.toggle("toDoChecked");
    strikeDetail.classList.toggle("toDoChecked");
    strikeDate.classList.toggle("toDoChecked");
  }
};

export const removeStrike = (e) => {
  const parentDiv = e.target.parentElement;
  const strikeTitle = parentDiv.querySelector(".title");
  const strikeDetail = parentDiv.querySelector(".details");
  const strikeDate = parentDiv.querySelector(".date");

  strikeTitle.classList.remove("toDoChecked");
  strikeDetail.classList.remove("toDoChecked");
  strikeDate.classList.remove("toDoChecked");
};

// export const toggleEditForm = () => {
//   const editForm = document.querySelector("#edit");
//   editForm.classList.toggle("displayEdit");
// };

export const makeTaskContainer = (title, detail, day, n) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");
  taskContainer.dataset.number = n;

  const checkAndTitle = document.createElement("div");
  checkAndTitle.className = "checkAndTitle";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "complete";
  checkBox.dataset.number = n;

  const taskTitle = document.createElement("div");
  taskTitle.textContent = title;
  taskTitle.className = "title";

  const details = document.createElement("div");
  details.textContent = "Details";
  details.className = "details";
  details.dataset.formTarget = "#detailInfo";

  const date = document.createElement("div");
  date.textContent = day;
  date.className = "date";

  const buttonBox = document.createElement("div");
  buttonBox.className = "buttonBox";

  const edit = document.createElement("button");
  edit.className = "editBtn";
  edit.textContent = "E";
  edit.dataset.number = n;
  edit.dataset.formTarget = "#edit";

  const remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "X";
  remove.dataset.number = n;

  checkAndTitle.append(checkBox, taskTitle);
  buttonBox.append(details, edit, remove);

  taskContainer.append(checkAndTitle, buttonBox);
  taskTitle.append(date);

  return taskContainer;
};

//media query toggles

const navToggle = (() => {
  const navBtn = document.querySelector(".navBtn");
  const navBar = document.querySelector("#navContainer");

  navBtn.addEventListener("click", () => {
    navBar.classList.toggle("nav");
    navBar.style.width = "100%";
  });
})();

const closeNav = (() => {
  const navBtn = document.querySelector(".closeNav");
  const navBar = document.querySelector("#navContainer");

  navBtn.addEventListener("click", () => {
    navBar.classList.toggle("nav");
    navBar.style.width = "0";
  });
})();

const openModal = (modal) => {
  //   const openProject = document.querySelector("#getProject");

  const overlay = document.querySelector("#overlay");
  //   openProject.classList.add("active");
  if (modal === undefined) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};

export const closeModal = (modal) => {
  const overlay = document.querySelector("#overlay");

  if (modal === undefined) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

const openModalBtns = (() => {
  const openProject = document.querySelectorAll("[data-form-target]");

  openProject.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.formTarget);
      openModal(modal);
    });
  });
})();

const openProject = document.querySelectorAll("[data-form-target]");

openProject.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.formTarget);
    console.log(modal);
    openModal(modal);
  });
});

export const openModals = () => {
  const openProject = document.querySelectorAll("[data-form-target]");

  openProject.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.formTarget);
      openModal(modal);
    });
  });
};

export const closeModals = () => {
  const closeDetails = document.querySelectorAll("[data-form-close]");

  closeDetails.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });
};

const closeModalBtns = (() => {
  const closeModalBtn = document.querySelectorAll("[data-form-close]");

  closeModalBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      //   console.log(modal);
      closeModal(modal);
    });
  });
})();

const closeOverlayProject = (() => {
  const overlay = document.querySelector("#overlay");

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");

    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
})();

export const displayDetails = (arr) => {
  const details = document.querySelectorAll(".details");
  const detailBox = document.querySelector("#detailInfo");

  details.forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = button.parentNode.parentNode;
      const indexNumber = parent.dataset.number;
      const closeBtn = document.createElement("button");

      detailBox.textContent = "";

      closeBtn.textContent = "X";
      closeBtn.className = "close";
      closeBtn.type = "button";
      closeBtn.dataset.formClose = "";

      detailBox.append(closeBtn);

      closeModals();

      const currentValues = Object.values(arr[indexNumber]);
      const currentKey = Object.keys(arr[indexNumber]);

      currentKey.forEach((key) => {
        const newKey = document.createElement("div");
        newKey.className = "newKey";

        const keyValue = document.createElement("div");
        keyValue.className = "keyValue";

        keyValue.textContent =
          key.charAt(0).toUpperCase() + key.substring(1) + ":";

        newKey.append(keyValue);
        detailBox.append(newKey);
      });

      const appendItem = document.querySelectorAll(".newKey");
      appendItem.forEach((item, index) => {
        const itemValue = document.createElement("div");
        itemValue.className = "itemValue";

        itemValue.textContent = currentValues[index];
        item.append(itemValue);
      });
    });
  });
};

export default displayTasks;
