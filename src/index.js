import 'bootstrap'
import 'jquery'

const form = document.getElementById('project-form');

const projectModel = () => {
  let projects = [];

  const all = () => {
    return projects;
  }

  const save = (project) => {
    console.log(project);
    projects.push(project)
    console.log(projects);
  }

  return { all, save };
}

const projectView = () => {
  const render = projects => {
    const element = `
      <ul class="list-group list-group-flush mb-4">
       ${projects.map((project, index) => {
         return `<li class="list-group-item" data-index=${index}> ${project.title}</li>`
        }).join('')}
      </ul>
    `
    document.getElementById('projects').innerHTML = element;
  }

  return { render };
}

const projectController = (m) => {
  let model = m();

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

form.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const { project } = form;
  if(project.value != "" && project.value != " "){
    const controller = projectController(projectModel);
    controller.addProject(project.value);
    controller.showProjects();
    form.reset();
    $('#projectModal').modal('hide');
  }
})
