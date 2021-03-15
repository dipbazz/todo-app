import 'bootstrap'
import 'jquery'
import  Projects  from './model/projects';
import projectsController from './controller/projectsController'
import projectsView from "./view/projectsView";

const model = new Projects();
const view = new projectsView()
const controller = new projectsController(model, view);

controller.showProjects()















// import 'bootstrap';
// import 'jquery';

// import projectController from './controller/projectsController'
// import { projectList } from './dom/projects';
// import { todoContainer } from './dom/todo'


// const loadProject = () => {
//   document.getElementById('projects').innerHTML = getProjects().map(project => projectList(project.title)).join('');
// };

// loadProject();

// document.getElementById('add-project').addEventListener('click', (e) => {
//   e.preventDefault();
//   const { project } = e.target.form;
//   addProject(project.value);
//   e.target.form.reset();
//   $('#projectModel').modal('hide'); // eslint-disable-line
//   loadProject();
// });


// document.querySelectorAll('.project-list-item').forEach(item => {
//   item.addEventListener('click', (e) => {
//     const project = e.target.innerHTML;

//     document.getElementById('task-container').innerHTML = todoContainer(project);
//   })
// })
