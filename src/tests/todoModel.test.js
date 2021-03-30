import todoModel from '../model/todoModel';

describe('should test todo model', () => {
  test('should get 0 todo', () => {
    const todo = todoModel().get(0, 0);
    expect(todo).toEqual(undefined);
  });

  test('should save the todo', () => {
    const todoObj = {
      title: 'first todo', priority: 'medium', dueDate: '2021-03-31', description: 'this is first todo.',
    };
    todoModel().save(todoObj, 0);
    const todos = todoModel().all(0);
    expect(todos).toEqual([todoObj]);
  });

  test('should remove the todo', () => {
    todoModel().remove(0, 0);
    const todos = todoModel().all(0);
    expect(todos.length).toBe(0);
  });

  test('should edit the todo', () => {
    const todoObj = {
      title: 'first todo', priority: 'medium', dueDate: '2021-03-31', description: 'this is first todo.',
    };
    todoModel().save(todoObj, 0);
    todoModel().edit(0, 0, { title: 'updated title' });
    const todo = todoModel().get(0, 0);
    expect(todo.title).toBe('updated title');
  });
});
