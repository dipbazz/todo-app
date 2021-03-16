const projectView = () => {
    const render = projects => {
      const element = `
        <ul class="list-group list-group-flush mb-4">
         ${projects.map((project, index) => {
           return `<li class="list-group-item" data-index=${index}> ${project.title}</li>`
          }).join('')}
        </ul>
      `
      document.getElementById('projects').innerHTML = element;
    }
  
    return { render };
}

export default projectView;