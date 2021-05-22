import {$} from '@core/dom'

export function line() {
  return `
    <input type="text" class="input name" placeholder="Название товара" 
      value="" />
    <div class="price">Цена</div>
    <input type="text" class="input count" placeholder="Кол-во" value="" />
    <div class="cost">Стоимость</div>
    <div class="button">
      <span class="material-icons" data-type="delete">delete_outline</span>
    </div>
  `
}

export function add(root) {
  const $line = $.create('div', 'order__list-line')
  $line.attr('data-type', 'line')
  const html = line()
  $line.html(html)
  root.append($line)
}
