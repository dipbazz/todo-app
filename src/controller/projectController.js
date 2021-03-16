const projectController = (m) => {
    let model = m;
  
    const addProject = (project) => {
      const new_project = {title: project}
      model.save(new_project);
    }
  
    const showProjects = (projects) => {
      projectView().render(model.all());
      console.log(model.all())
    }
  
    return { addProject, showProjects };
}

export default projectController;