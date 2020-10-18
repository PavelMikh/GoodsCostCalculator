import {OrderComponent} from '@core/OrderComponent'

export class Adder extends OrderComponent {
  static className = 'order__list-add'

  toHTML() {
    return `
      <div class="add-button">
        <span class="material-icons">add</span>
      </div>
    `
  }
}
