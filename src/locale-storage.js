export const saveLocale = (arr) => {
  const stringify = JSON.stringify(arr);
  localStorage.setItem("tasks", stringify);

  //   localStorage.removeItem("tasks");
  //   localStorage.removeItem("key");
  //   console.log(stringify);
};
