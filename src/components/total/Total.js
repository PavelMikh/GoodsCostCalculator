import {OrderComponent} from '@core/OrderComponent'

export class Total extends OrderComponent {
  static className = 'order__total'

  toHTML() {
    return `<strong>Итоговая стоимость: 0 руб.</strong>`
  }
}
