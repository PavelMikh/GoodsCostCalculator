import {OrderComponent} from '@core/OrderComponent'
import {$} from '@core/dom'

export class Total extends OrderComponent {
  static className = 'order__total'

  constructor($root, options) {
    super($root, {
      name: 'Total',
      listeners: [],
      // subscribe: ['phoneNumber'],
      ...options
    })
  }
  prepare() {
    this.defaultTotal = '0 руб.'
    this.text = this.createText(this.defaultTotal)
  }

  init() {
    super.init()
    this.$total = $(this.$root.find('#total'))
  }

  toHTML() {
    return `<strong id="total">${this.text}</strong>`
  }

  createText(text) {
    return `Итоговая стоимость: ${text}`
  }

  // storeChanged({phoneNumber}) {
  //   const text = this.createText(phoneNumber)
  //   this.$total.text(text)
  // }
}
