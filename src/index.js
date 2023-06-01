import createToDo from "./create-to-do";
import test, {
  addProject,
  homeTasks,
  initialProjectLoad,
  removeProjects,
} from "./dom-manipulation";
import demo, { createProjArr, createProject } from "./create-project";
import { initialLoad } from "./dom-manipulation";
import { saveProjects } from "./locale-storage";

initialLoad();
homeTasks();

initialProjectLoad();
// createProjArr();
// saveProjects();
// removeProjects();
// addProject(createProjArr);
// import { makeToDo } from "./create-to-do";
// test();
