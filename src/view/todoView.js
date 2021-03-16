const todoView = () => {
    const render = todos => {
      const element = `
      <ul class="list-group list-group-flush mb-4">
      ${todos.map((todo, index) => {
        return `
        <li class="task-list-item mb-3 list-group-item list-group-item-action border-danger border-left border-bottom-0">
            <div class="d-flex align-items-center">
              <input type="checkbox" id="todo1" class="custom-checkbox">
              <label for="todo1" class="ml-3 d-flex justify-content-between w-100 align-items-center mb-0">
                <div class="mb-0">
                  <h3>${todo.title}</h3>
                  <p class="mb-0"><span>Due Date:</span> <span>${todo.date}</span></p>
                </div>
                <a href="#" class="link" data-toggle="modal" data-target="#detailModel1">Details</a>
              </label>
            </div>
          </li>
        `
       }).join('')}

      `
      document.getElementById('todos').innerHTML = element;
    }
  
    return { render };
}

export default todoView;