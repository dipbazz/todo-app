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
    const controller = projectController(projectModel, projectView);
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
  const project_id = document.getElementById('project-title').getAttribute('data-project-index');
  console.log(project_id,'11111')
  if(title.value != "" && title.value != " "){
    const controller = todoController(todoModel, todoView);
    controller.addTodo(title.value,priority.value,date.value,description.value, parseInt(project_id));
    controller.showTodos(project_id);
    form.reset();
    $('#todoModal').modal('hide');
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const projects = projectModel().all()
  projectController(projectModel, projectView).showProjects();
  if(projects.length > 0) {
    todoController(todoModel, todoView).showTodos();
  }
})

document.addEventListener('click', e => {
  if (e.target.classList.contains('project-item')){
    const controller = todoController(todoModel, todoView);
    controller.showTodos(parseInt(e.target.getAttribute('data-index')));
  }
  if(e.target.classList.contains('link')) {
    const todo = {"title":"How To Invest in Your 20'","priority":"…low","date":"2021-03-03","description":"asdasd"}
    todoView().detailTemplate(todo)
  }
})


