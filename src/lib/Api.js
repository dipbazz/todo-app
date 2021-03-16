export default {
  getProjects() {
    return JSON.parse(localStorage.getItem('projects'))
  },

  setProject(project) {
    localStorage.setItem('projects', JSON.stringify(project))
  }
};
