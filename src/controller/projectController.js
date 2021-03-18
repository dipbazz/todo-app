const projectController = (projectModel, projectView) => {
  const model = projectModel();
  const view = projectView();

  const addProject = title => {
    const newProject = model.project(title);
    model.save(newProject);
  };

  const showProjects = () => {
    view.render(model.all());
  };

  return { addProject, showProjects };
};

export default projectController;
