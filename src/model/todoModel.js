import projectModel from '../model/projectModel'

const todoModel = () => {

    const todo = (todo, priority, dueDate, description) => {
      return {title: todo,priority:priority,date: dueDate,description:description}
    }

    const all = () => {
      console.log(getProject(0));
      return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const save = (todo) => {
      const todos = all()
      if (todos) {
        console.log(todos)
        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos))
      }  else {
        localStorage.setItem('todos', JSON.stringify([todo]))
      }

    }

    const get = (todo) => {
      const todos = all()
      return todos[todo.title]
    }

    const getProject = (id) => {
      return projectModel().get(id)
    }


    return { todo, all, save, get, getProject };
}

export default todoModel;
