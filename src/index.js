import { getProjects, addProject } from './modules/projects';
import {project_list} from './dom/projects'

document.getElementById('projects').innerHTML = getProjects().map( project => {
  return project_list(project.title);
}).join('');

document.getElementById('add-project').addEventListener('click', (e) => {
  e.preventDefault();
  const { project } = e.target.form;
  console.log(addProject(project.value));
})
