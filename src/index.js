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
  const { title,priority,date,description,id } = form;
  const project_id = document.getElementById('project-title').getAttribute('data-project-index');
  if(title.value != "" && title.value != " "){
    const controller = todoController(todoModel, todoView);
    controller.addTodo(title.value,priority.value,date.value,description.value, parseInt(project_id), id.value);
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
  if(e.target.classList.contains('delete-todo')) {
    const todo = e.target.getAttribute('data-todo');
    const project = e.target.getAttribute('data-project');
    todoModel().remove(project , todo);
    $(e.target.closest('.modal')).modal('hide');
    const controller = todoController(todoModel, todoView);
    controller.showTodos(parseInt(e.target.getAttribute('data-project')));
  }

  if(e.target.classList.contains('edit-todo')) {
    const todo = e.target.getAttribute('data-todo');
    const project = e.target.getAttribute('data-project');
    const controller = todoController(todoModel, todoView);
    controller.editTodo(parseInt(project),parseInt(todo));
    $(e.target.closest('.modal')).modal('hide');
  }

  if(e.target.classList.contains('add-todo')) {
    document.querySelector('.add-task-btn').style.display = 'block'
    document.querySelector('.update-task-btn').style.display = 'none'
    todoForm.reset()
    todoForm['id'].value = ''
  }

})





