import {OrderComponent} from '@core/OrderComponent'

export class Adder extends OrderComponent {
  static className = 'order__list-add'
  constructor($root, options) {
    super($root, {
      name: 'Adder',
      listeners: ['click'],
      ...options
    })
  }

  toHTML() {
    return `
      <div class="add-button">
        <span class="material-icons" data-type="add">add</span>
      </div>
    `
  }

  onClick(event) {
    if (event.target.dataset.type === 'add') {
      this.$emit('adder:add-line')
    }
  }
}
