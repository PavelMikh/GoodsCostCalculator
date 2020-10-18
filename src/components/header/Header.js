import {OrderComponent} from '@core/OrderComponent'

export class Header extends OrderComponent {
  static className = 'order__header'

  toHTML() {
    return `
      <div>
        <input type="text" class="input" placeholder="Адрес заявки" value="" />
        <input type="text" class="input" placeholder="Дата" value="" />
      </div>
      <div>
        <div class="button">
          <span class="material-icons">delete</span>
        </div>
        <div class="button">
          <span class="material-icons">exit_to_app</span>
        </div>
      </div>
    `
  }
}
