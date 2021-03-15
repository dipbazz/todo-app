const todoContainer = (project) => {
  return `
  <div class="" id="task-list-container">
    <h1 class="text-center">${project}</h1>
    <div  class="d-flex justify-content-end mb-2">
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
        Add Task
      </button>
    </div>

    <ul class="list-group list-group-flush mb-4">
      <li class="task-list-item mb-3 list-group-item list-group-item-action border-danger border-left border-bottom-0">
        <div class="d-flex align-items-center">
          <input type="checkbox" id="todo1" class="custom-checkbox">
          <label for="todo1" class="ml-3 d-flex justify-content-between w-100 align-items-center mb-0">
            <div class="mb-0">
              <h3>Heading of to do</h3>
              <p class="mb-0"><span>Due Date:</span> <span>2021-03-12</span></p>
            </div>
            <a href="#" class="link" data-toggle="modal" data-target="#detailModel1">Details</a>
          </label>
        </div>
      </li>
      <li class="task-list-item mb-3 list-group-item list-group-item-action border-warning">
        <div class="d-flex align-items-center">
          <input type="checkbox" id="todo2" class="custom-checkbox">
          <label for="todo2" class="ml-3 d-flex justify-content-between w-100 align-items-center mb-0">
            <div class="mb-0">
              <h3>Heading of to do</h3>
              <p class="mb-0"><span>Due Date:</span> <span>2021-03-12</span></p>
            </div>
            <a href="#" class="link" data-toggle="modal" data-target="#detailModel2">Details</a>
          </label>
        </div>
      </li>
    </ul>
    <!-- Add Todo Detail Modal -->
    <div class="modal fade" id="detailModel1" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="detailModelLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailModelLabel">Heading of detail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Id asperiores dolores, commodi doloremque aperiam, eveniet culpa necessitatibus debitis aspernatur dolorem
                voluptatum maxime fugit repellendus incidunt.
              </p>
              <div class="d-flex justify-content-between">
                <span>Due date: 2021-10-10</span>
                <span>High</span>
              </div>

          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-outline-success">Edit</button>
            <button type="submit" class="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Add Todo Modal -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Todo Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form class="form">
          <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-control" name="title" id="todoTitle" placeholder="Add title">
          </div>
              <div class="row">
                <div class="col">
                  <select class="form-control priority-option mb-2">
                    <option selected disabled>Prioroty</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div class="col">
                  <input type="date" class="form-control" name="date" id="todoDate" placeholder="Add date">
                </div>
              </div>
              <div class="my-2">
                <textarea type="text" class="form-control" name="description" id="todoDescription" placeholder="Add description"></textarea>
              </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Add Task</button>
          </div>
        </form>
        </div>
      </div>
    </div>


  </div>
  `
}

export { todoContainer };
