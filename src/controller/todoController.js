const todoController = (m) => {
    let model = m;
  
    const addTodo = (todo,priority,dueDate,description) => {
      const new_todo = {title: todo,priority:priority,date: dueDate,description:description}
      model.save(new_todo);
    }
  
    const showTodos = (todos) => {
      todoView().render(model.all());
      console.log(model.all())
    }
  
    return { addTodo, showTodos };
}

export default todoController;