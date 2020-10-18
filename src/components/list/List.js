import {OrderComponent} from '@core/OrderComponent'

export class List extends OrderComponent {
  static className = 'order__list'

  constructor($root, components) {
    super($root)
    this.components = components || []
    this.$el = this.getRoot()
  }

  getRoot() {
    const $root = document.createElement('div')

    this.components.forEach(Component => {
      const $el = document.createElement('div')
      $el.classList.add(Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    })

    return $root
  }

  toHTML() {
    return `${this.$el.innerHTML}`
  }
}
