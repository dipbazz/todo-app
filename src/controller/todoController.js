const todoController = (todoModel, todoView) => {
    let model = todoModel();
    let view = todoView();

    const addTodo = (title,priority,dueDate,description,project_id, id = null) => {
      const new_todo = model.todo(title, priority, dueDate, description)
      console.log(id)
      if (id) {
        model.edit(project_id, id, new_todo)
      } else {
        model.save(new_todo, project_id);
      }
    }

    const showTodos = (project_id = 0) => {
      view.render(project_id,model.getProject(project_id), model.all(project_id));
    }

    const removeTodo = (project_id, todo_id) => {
      model.remove(project_id, todo_id);
    }

    const editTodo = (project_id, todo_id) => {
      view.updateTodoModel(model.get(project_id,todo_id),todo_id)

    }


    return { addTodo, showTodos, removeTodo, editTodo };
}

export default todoController;
