import {OrderComponent} from '@core/OrderComponent'
import {add} from '@/components/list/list.template'
import {
  isDelete,
  deleteLine,
  isInput,
  searchByInputValue
} from '@/components/list/list.functions'

export class List extends OrderComponent {
  static className = 'order__list'

  constructor($rootElement, options) {
    super($rootElement, {
      name: 'List',
      listeners: ['click', 'input'],
      ...options
    })
    this.data = options.data
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

  onInput(event) {
    if (isInput(event)) {
      const searchResult = searchByInputValue(event, this.data)
      console.log(searchResult)
    }
  }
}
