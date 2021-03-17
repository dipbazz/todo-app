import projectModel from '../model/projectModel'

const todoModel = () => {

    const todo = (todo, priority, dueDate, description) => {
      return {title: todo,priority:priority,date: dueDate,description:description}
    }

    const all = (project_id) => {
      console.log(getProject(0));
      const project = getProject(project_id);
      return JSON.parse(localStorage.getItem(project.title)) || [];
    }

    const save = (todo, project_id) => {
      console.log(project_id)
      const project = getProject(project_id)
      const todos = all(project_id)
      if (todos) {
        console.log(todos)
        todos.push(todo)
        localStorage.setItem(project.title, JSON.stringify(todos))
      }  else {
        localStorage.setItem(project.title, JSON.stringify([todo]))
      }

    }


    const get = (todo) => {
      const todos = all(0)
      return todos[todo.title]
    }

    const getProject = (id) => {
      return projectModel().get(id)
    }


    return { todo, all, save, get, getProject };
}

export default todoModel;
