import test from "./dom-manipulation";

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

    test(arr[0].title + arr[0].description + arr[0].dueDate + arr[0].priority);
  });
  return { arr };
})();

const sub = document.querySelector("[data-submit]");
sub.addEventListener("click", () => {
  console.log(makeToDo.arr);
});

// console.log(makeToDo.arr);

// const pushArr = () => {
//   const arr = [];
//   arr.push(makeToDo.newToDo);
// };

export default makeToDo;

// const chore = new ToDo("chore", "clean things", "1998", "high");

// export default chore;

// export default console.log(Object.values(chore));
