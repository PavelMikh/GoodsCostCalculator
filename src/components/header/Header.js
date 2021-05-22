import {OrderComponent} from '@core/OrderComponent'
import * as actions from '@/redux/actions'
import {$} from '@core/dom'
import {createHeader} from '@/components/header/header.template'

export class Header extends OrderComponent {
  static className = 'order__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  toHTML() {
    return createHeader(this.store.getState())
  }

  init() {
    super.init()

    this.$adress = this.$root.find('#adress')
    this.$phone = this.$root.find('#phone')
  }

  onInput(event) {
    if ($(event.target).data.id === 'adress') {
      this.$dispatch(actions.changeAdress({
        value: $(event.target).text()
      }))
    } else if ($(event.target).data.id === 'phone') {
      this.$dispatch(actions.changePhone({
        value: $(event.target).text()
      }))
    }
  }
}
