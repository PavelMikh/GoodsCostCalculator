import {OrderComponent} from '@core/OrderComponent'
import {$} from '@core/dom'

export class List extends OrderComponent {
  static className = 'order__list'

  constructor($rootElement, components) {
    super($rootElement, {
      name: 'List',
      listeners: ['click']
    })
    this.components = components || []
    this.$el = this.getRoot().$el
  }

  getRoot() {
    const $root = $.create('div')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  toHTML() {
    return `${this.$el.innerHTML}`
  }

  onClick(event) {
    console.log('click', event.target)
  }
}

