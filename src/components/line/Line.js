import {OrderComponent} from '@core/OrderComponent'

export class Line extends OrderComponent {
  static className = 'order__list-line'

  toHTML() {
    return `
      <input type="text" class="input name" placeholder="Название товара" 
        value="" />
      <div class="price">Цена</div>
      <input type="text" class="input count" placeholder="Кол-во" value="" />
      <div class="cost">Стоимость</div>
      <div class="button">
        <span class="material-icons">delete_outline</span>
      </div>
    `
  }
}
