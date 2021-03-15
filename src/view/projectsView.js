class projectsView {
    constructor() {
        this.projects = document.createElement('ul')
        this.projects.classList.add(...["list-group", "list-group-flush", "mb-4"])
    }


    render(projects) {
        projects.forEach((project) => {
           const listItem = document.createElement('li')
           listItem.classList.add('list-group-item')
           listItem.innerHTML = project.title
           this.projects.append(listItem)
        })

        document.querySelector('aside').append(this.projects)
    }


    .addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
    })

}

export default projectsView