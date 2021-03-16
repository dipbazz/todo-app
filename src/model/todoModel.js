const todoModel = () => {

    const all = () => {
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
  
  
    return { all, save, get };
}

export default todoModel;