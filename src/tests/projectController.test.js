import projectController from '../controller/projectController';
import projectModel from '../model/projectModel';
import projectView from '../view/projectView';

const pController = projectController(projectModel, projectView);

describe('tests for porjectController', () => {
  test('should add new project', () => {
    pController.addProject('Home');
    const projects = projectModel().all();
    expect(projects.length).toBe(2);
  });

  test('should get added new project', () => {
    pController.addProject('Home');
    const project = projectModel().get(1);
    expect(project.title).toEqual('Home');
  });

  test('should get all projects', () => {
    pController.addProject('Home');
    pController.addProject('Weekly');
    pController.addProject('Monthly');
    const projects = projectModel().all();
    expect(projects).toEqual([
      { title: 'Today' },
      { title: 'Home' },
      { title: 'Weekly' },
      { title: 'Monthly' },
    ]);
  });
});
