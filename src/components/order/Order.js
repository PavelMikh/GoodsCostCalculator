export class Order {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
    this.childComponents = options.childComponents || []
  }

  getRoot() {
    const $root = document.createElement('div')
    $root.classList.add('order')
    this.components.forEach(Component => {
      const $el = document.createElement('div')
      $el.classList.add(Component.className)
      const component = new Component($el, this.childComponents)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
