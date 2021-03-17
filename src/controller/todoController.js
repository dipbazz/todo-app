const todoController = (todoModel, todoView) => {
    let model = todoModel();
    let view = todoView();

    const addTodo = (todo,priority,dueDate,description,project_id) => {
      const new_todo = model.todo(todo, priority, dueDate, description)
      model.save(new_todo, project_id);
      console.log(project_id,'cccc')
    }

    const showTodos = (project_id = 0) => {
      view.render(project_id,model.getProject(project_id), model.all(project_id));
    }


    return { addTodo, showTodos };
}

export default todoController;
