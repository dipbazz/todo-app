const todoView = () => {
    const render = (project_id, project, todos) => {
      const element = `
      <h1 class="text-center" data-project-index="${project_id}" id="project-title">${project.title}</h1>
      <div  class="d-flex justify-content-end mb-2">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#todoModal">
          Add Task
        </button>
      </div>
      <ul class="list-group list-group-flush mb-4">
      ${todos.map((todo, index) => {
        return `
        <li class="task-list-item mb-3 list-group-item list-group-item-action border-${priorityClass(todo.priority)} border-left border-bottom-0">
            <div class="d-flex align-items-center">
              <input type="checkbox" id="todo1" class="custom-checkbox">
              <label for="todo1" class="ml-3 d-flex justify-content-between w-100 align-items-center mb-0">
                <div class="mb-0">
                  <h3>${todo.title}</h3>
                  <p class="mb-0"><span>Due Date:</span> <span>${todo.date}</span></p>
                </div>
                <a href="#" class="link" data-toggle="modal" data-target="#detailModel${index}">Details</a>
              </label>
            </div>
          </li>

          ${detailTemplate(todo, index, project_id)}
        `
       }).join('')}
      </ul>
      `
      document.getElementById('todos').innerHTML = element;
    }

    const detailTemplate = (todo, index, project_id) => {
      return `
      <div class="modal fade" id="detailModel${index}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="detailModelLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title task-title" id="detailModelLabel">${todo.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <p class="task-description">
                ${todo.description}
                </p>
                <div class="d-flex justify-content-between">
                  <span>Due date: ${todo.date}</span>
                  <span class='task-volume text-${priorityClass(todo.priority)}'>${todo.priority}</span>
                </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-outline-success">Edit</button>
              <button type="submit" class="btn btn-outline-danger delete-todo" data-todo="${index}" data-project="${project_id}" >Delete</button>
            </div>
          </div>
        </div>
      </div>
      `;
    }

    const priorityClass = priority => {
      return priority == 'high' ? 'danger' : priority == 'medium' ? 'warning' : 'info';
    }

    return { render };
}

export default todoView;
