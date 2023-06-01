export const saveLocale = (arr) => {
  const stringify = JSON.stringify(arr);
  localStorage.setItem("tasks", stringify);

  //   localStorage.removeItem("tasks");
  //   localStorage.removeItem("key");
  //   console.log(stringify);
};

export const saveProjects = (project) => {
  console.log(project);
  const stringify = JSON.stringify(project);
  localStorage.setItem("project", stringify);

  console.log(stringify);
};

// saveProjects();
