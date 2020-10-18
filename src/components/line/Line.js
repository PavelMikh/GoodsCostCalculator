import {OrderComponent} from '@core/OrderComponent'

export class Line extends OrderComponent {
  static className = 'order__list-line'

  toHTML() {
    return `
      <input type="text" class="input name" placeholder="Наименование товара" 
      value="" />
      <div class="price">154.52</div>
      <input type="text" class="input count" placeholder="Кол-во" value="" />
      <div class="cost">154.52</div>
      <div class="button">
        <span class="material-icons">delete_outline</span>
      </div>
    `
  }
}
