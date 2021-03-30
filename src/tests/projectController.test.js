import projectController from "../controller/projectController";
import projectModel from "../model/projectModel";
import projectView from "../view/projectView";

const pController = projectController(projectModel, projectView);

describe("tests for porjectController", () => {
  test("should add new project", () => {
    const project = pController.addProject("Home");
    const projects = projectModel().all();
    expect(projects.length).toBe(2);
  });

  test("should get added new project", () => {
    const newProject = pController.addProject("Home");
    const project = projectModel().get(1);
    expect(project.title).toEqual("Home");
  });

  test("should get all projects", () => {
    const newProject1 = pController.addProject("Home");
    const newProject2 = pController.addProject("Weekly");
    const newProject3 = pController.addProject("Monthly");
    const projects = projectModel().all();
    expect(projects).toEqual([
      { title: "Today" },
      { title: "Home" },
      { title: "Weekly" },
      { title: "Monthly" },
    ]);
  });
});
