import API from '../lib/Api.js'

const projectController = (model,app) => {
  function addProject() {
    document.getElementById('add-project').addEventListener('click', (e) => {
      const projectInput = document.getElementById('projectInput').value
      const obj = {
        title:projectInput
      }
      API.setProject(obj)
      app.updateView()
    })
  }

  return addProject()
}


export default projectController;