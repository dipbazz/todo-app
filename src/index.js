import 'bootstrap'
import 'jquery'
import projectModel from './model/projectModel'
import projectController from './controller/projectController'
import projectView from './view/projectView'
import todoModel from './model/todoModel'
import todoController from './controller/todoController'
import todoView from './view/todoView'

const form = document.getElementById('project-form');
const todoForm = document.getElementById('todo-form')

form.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const { project } = form;
  if(project.value != "" && project.value != " "){
    const controller = projectController(projectModel());
    controller.addProject(project.value);
    controller.showProjects();
    form.reset();
    $('#projectModal').modal('hide');
  }
})

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const { title,priority,date,description } = form;
  if(title.value != "" && title.value != " "){
    const controller = todoController(todoModel());
    controller.addTodo(title.value,priority.value,date.value,description.value);
    controller.showTodos();
    form.reset();
    $('#todoModal').modal('hide');
  }
})

document.addEventListener('DOMContentLoaded', () => {
  projectView().render(projectModel().all())
  todoView().render(todoModel().all())
})
