class Projects {
  constructor(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }
}


const projects = [];


const addProject = title => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  projects.push(JSON.parse(JSON.stringify(new Projects(title))));
  localStorage.setItem('projects', JSON.stringify(projects));
};

const getProjects = () => (JSON.parse(localStorage.getItem('projects')));


const storeProject = () => {
  if (localStorage.getItem('projects')) {
  } else {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

window.addEventListener('DOMContentLoaded', () => {
  storeProject();
});


export { getProjects, addProject, storeProject };


// MVC

// Model => todo and projects
// view => display sidebar, dispaly the todo section
// controller => acces our model to update view
//
