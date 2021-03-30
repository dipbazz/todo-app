import todoController from '../controller/todoController';
import todoModel from '../model/todoModel';
import todoView from '../view/todoView';


const tController = todoController(todoModel, todoView);

describe('tests for todoController', () => {
  test('should add todo for a project', () => {
    tController.addTodo('test todo first', 'high', '2021-03-21', 'this is a description', 0);
    const todos = todoModel().all(0);
    expect(todos.length).toBe(1);
  });

  test('should remove Todos for a project', () => {
    tController.addTodo('test todo', 'high', '2021-03-21', 'this is a description', 0);
    tController.removeTodo(0, 1);
    const todos = todoModel().all(0);
    expect(todos.length).toBe(1);
  });

  test('should complete todo for a project', () => {
    tController.completeTodo(0, 0);
    const todo = todoModel().get(0, 0);
    expect(todo.isCompleted).toBeTruthy();
  });
});
