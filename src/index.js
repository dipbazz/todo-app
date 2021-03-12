import 'bootstrap';
import 'jquery';
import $ from 'jquery'
import { getProjects, addProject } from './modules/projects';
import {project_list} from './dom/projects'


const loadProject = () => {
  return document.getElementById('projects').innerHTML = getProjects().map( project => {
    return project_list(project.title);
  }).join('');
}

loadProject()

document.getElementById('add-project').addEventListener('click', (e) => {
  e.preventDefault();
  const { project } = e.target.form;
  console.log(addProject(project.value));
  e.target.form.reset()
  $('#projectModal').modal('hide')
  loadProject()
})

