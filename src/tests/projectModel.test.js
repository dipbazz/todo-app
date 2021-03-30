import projectModel from "../model/projectModel";

describe("should test project model", () => {
  test("should get default added project", () => {
    const project = projectModel().get(0);
    expect(project.title).toEqual("Today");
  });

  test("should save the project", () => {
    const projectObj = { title: "Home" };
    const project = projectModel().save(projectObj);
    const projects = projectModel().all();
    expect(projects).toEqual([{ title: "Today" }, { title: "Home" }]);
  });
});
