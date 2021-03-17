const projectModel = () => {

 
    const project = (title) =>{
      return { title: title }
    }

    const all = () => {
      return JSON.parse(localStorage.getItem('projects')) || [ {title: 'Today'},{title:'7-Days'}];
    }

    const save = (project) => {
      const projects = all()
      if (projects) {
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
      }  else {
        localStorage.setItem('projects', JSON.stringify([project]))
      }

    }

    const get = (id) => {
      const projects = all()
      return projects[id]
    }



    return { project, all, save, get };
}

export default projectModel;
