const projectModel = () => {

    const project = (title) =>{
      return { title: title, tasks: [{"title":"first task","priority":"low","date":"2021-03-29","description":""}] }
    }

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

    const get = (id) => {
      const projects = all()
      return projects[id]
    }


    return { project, all, save, get };
}

export default projectModel;
