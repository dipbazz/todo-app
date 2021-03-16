const projectModel = () => {

    const all = () => {
      return JSON.parse(localStorage.getItem('projects')) || [];
    }
  
    const save = (project) => {
      const projects = all()
      if (projects) {
        console.log(projects)
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
      }  else {
        localStorage.setItem('projects', JSON.stringify([project]))
      }
      
    }
  
    const get = (project) => {
      const projects = all()
      return projects[project.title]
    }
  
  
    return { all, save, get };
}

export default projectModel;