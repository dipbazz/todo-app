const projectController = (projectModel, projectView) => {
    let model = projectModel();
    let view = projectView();

    const addProject = (title) => {
      const new_project = model.project(title)
      model.save(new_project);
    }

    const showProjects = (projects) => {
      view.render(model.all());
    }

    return { addProject, showProjects };
}

export default projectController;
