import {$} from '@core/dom'

export class Order {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.childComponents = options.childComponents || []
  }

  getRoot() {
    const $root = $.create('div', 'order')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, this.childComponents)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())

    this.components.forEach(component => {
      component.init()
      if (component.components) {
        const childComponents = component.components
        childComponents.forEach(childComponent => childComponent.init())
      }
    })
  }
}
