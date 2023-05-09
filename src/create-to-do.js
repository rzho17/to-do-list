class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const chore = new ToDo("chore", "clean things", "1998", "high");

export default chore;

// export default console.log(Object.values(chore));
