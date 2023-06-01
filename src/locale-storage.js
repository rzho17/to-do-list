export const saveLocale = (arr) => {
  const stringify = JSON.stringify(arr);
  localStorage.setItem("tasks", stringify);
};

export const saveProjects = (project) => {
  const stringify = JSON.stringify(project);
  localStorage.setItem("project", stringify);

  //   console.log(stringify);
};
