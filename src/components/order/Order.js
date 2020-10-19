import {$} from '@core/dom'

export class Order {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
    this.childComponents = options.childComponents || []
  }

  getRoot() {
    const $root = $.create('div', 'order')
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)
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
