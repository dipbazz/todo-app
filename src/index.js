import 'bootstrap';
import 'jquery';

import { getProjects, addProject } from './modules/projects';
import { projectList } from './dom/projects';
import { todoContainer } from './dom/todo'


const loadProject = () => {
  document.getElementById('projects').innerHTML = getProjects().map(project => projectList(project.title)).join('');
};

loadProject();

document.getElementById('add-project').addEventListener('click', (e) => {
  e.preventDefault();
  const { project } = e.target.form;
  addProject(project.value);
  e.target.form.reset();
  $('#projectModel').modal('hide'); // eslint-disable-line
  loadProject();
});


document.querySelectorAll('.project-list-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const project = e.target.innerHTML;

    document.getElementById('task-container').innerHTML = todoContainer(project);
  })
})
