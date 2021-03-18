const todoController = (todoModel, todoView) => {
  const model = todoModel();
  const view = todoView();

  const addTodo = (title, priority, dueDate, description, projectId, id = null) => {
    const newTodo = model.todo(title, priority, dueDate, description);
    if (id) {
      model.edit(projectId, id, newTodo);
    } else {
      model.save(newTodo, projectId);
    }
  };

  const showTodos = (projectId = 0) => {
    view.render(projectId, model.getProject(projectId), model.all(projectId));
  };

  const removeTodo = (projectId, todoId) => {
    model.remove(projectId, todoId);
  };

  const editTodo = (projectId, todoId) => {
    view.updateTodoModel(model.get(projectId, todoId), todoId);
  };

  const completeTodo = (projectId, todoId) => {
    const todo = model.get(projectId, todoId);
    todo.isCompleted = !todo.isCompleted;
    model.edit(projectId, todoId, todo);
  };


  return {
    addTodo, showTodos, removeTodo, editTodo, completeTodo,
  };
};

export default todoController;
