import projectModel from '../model/projectModel'

const todoModel = () => {

    const todo = (title, priority, dueDate, description) => {
      return {title: title,priority:priority,date: dueDate,description:description}
    }

    const all = (project_id) => {
      const project = getProject(project_id);
      return JSON.parse(localStorage.getItem(project.title)) || [];
    }

    const save = (todo, project_id) => {
      const project = getProject(project_id)
      const todos = all(project_id)
      if (todos) {
        todos.push(todo)
        localStorage.setItem(project.title, JSON.stringify(todos))
      }  else {
        localStorage.setItem(project.title, JSON.stringify([todo]))
      }
    }

    const remove = (project_id, todo_id) => {
      const todos = all(project_id);
      const project = getProject(project_id);
      todos.splice(todo_id, 1);
      localStorage.setItem(project.title, JSON.stringify(todos));
    }

    const edit = (project_id, todo_id, new_todo) => {
      const todos = all(project_id)
      const todo = todos[todo_id]
      const project = getProject(project_id);
      todo.title = new_todo.title
      todo.priority = new_todo.priority
      todo.date = new_todo.date
      todo.description = new_todo.description
      localStorage.setItem(project.title, JSON.stringify(todos));
    }


    const get = (project_id, todo_id) => {
      const todos = all(project_id)
      return todos[todo_id]
    }

    const getProject = (id) => {
      return projectModel().get(id)
    }


    return { todo, all, save, get, remove, getProject, edit };
}

export default todoModel;
