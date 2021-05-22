import {OrderComponent} from '@core/OrderComponent'
import {add} from '@/components/list/list.template'
import {isDelete, deleteLine} from '@/components/list/list.functions'

export class List extends OrderComponent {
  static className = 'order__list'

  constructor($rootElement, options) {
    super($rootElement, {
      name: 'List',
      listeners: ['click'],
      ...options
    })
  }

  prepare() {
    this.adder = () => {
      return add(this.$root)
    }
  }

  init() {
    super.init()

    this.adder()
    this.$on('adder:add-line', this.adder.bind(this))
  }

  toHTML() {
    return `${this.$root.inner}`
  }

  onClick(event) {
    if (isDelete(event)) {
      deleteLine(event, this.$root)
    }
  }
}
