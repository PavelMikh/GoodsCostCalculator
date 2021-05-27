import {$} from '@core/dom'
import {Emitter} from '@/core/Emitter'
import {StoreSubscriber} from '@core/StoreSubscriber'

export class Order {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.emitter = new Emitter()
    this.store = options.store
    this.subscriber = new StoreSubscriber(this.store)
    this.data = options.data
  }

  getRoot() {
    const options = {
      emitter: this.emitter,
      store: this.store,
      data: this.data
    }

    const $root = $.create('div', 'order')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, options)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.subscriber.subscribeComponents(this.components)
    this.components.forEach(component => component.init())
  }

  destroy() {
    this.subscriber.unsubscribeFromStore()
    this.components.forEach(component => component.destroy())
  }
}
