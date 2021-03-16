class App {
  constructor(selector) {
    this.appContent = document.querySelector(selector);
    this.components = {};
  }

  addComponent(component) {
    this.components[component.name] = component;
  }

  showComponent(name) {
    this.currentComponent = this.components[name];
    this.updateView();
    if (this.currentComponent) {
      this.currentComponent.controller(this.currentComponent.model);
    }
  }

  updateView() {
    if (this.currentComponent) {
      this.appContent.innerHTML = this.currentComponent.view(this.currentComponent.model);
    }
  }

  proxify(model) {
    return new Proxy(model, {
      set: (target, property, value) => {
        console.log(target ,'is' , target[property])
        target[property] = value;
        this.updateView();
        return true;
      },
    });
  }

}

export default App;
