import Projects  from '../model/projects'

class projectsController {
  constructor(project,projectsView) {
    this.project = project
    this.projectsView = projectsView
  }

  addProjects() {
    
  }

  showProjects() {
    const projects = [{ 'title' : 'First' }, { 'title' : 'Second' }]
    this.projectsView.render(projects)
  }
}


export default projectsController 