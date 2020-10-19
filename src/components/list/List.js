import {OrderComponent} from '@core/OrderComponent'
import {$} from '@core/dom'

export class List extends OrderComponent {
  static className = 'order__list'

  constructor($rootElement, components) {
    super($rootElement)
    this.components = components || []
    this.$el = this.getRoot()
  }

  getRoot() {
    const $root = $.create('div')
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)
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
