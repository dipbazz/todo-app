const todoController = (todoModel, todoView) => {
    let model = todoModel();
    let view = todoView();

    const addTodo = (todo,priority,dueDate,description) => {
      const new_todo = model.todo(todo, priority, dueDate, description)
      model.save(new_todo);
    }

    const showTodos = (project_id = 0) => {
      view.render(model.getProject(project_id), model.getProject(project_id).tasks);
    }


    return { addTodo, showTodos };
}

export default todoController;
