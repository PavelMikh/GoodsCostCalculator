import {$} from '@core/dom'

export function line() {
  return `
    <input
      type="text"
      data-type="input"
      class="input name"
      placeholder="Название товара" 
      value=""
    />
    <div class="list hidden"></div>
    <div class="price">Цена</div>
    <input type="text" class="input count" placeholder="Кол-во" value="" />
    <div class="cost">Стоимость</div>
    <div class="button">
      <span class="material-icons" data-type="delete">delete_outline</span>
    </div>
  `
}

export function add(root, data) {
  const $line = $.create('div', 'order__list-line')
  $line.attr('data-type', 'line')
  const html = line(data)
  $line.html(html)
  root.append($line)
}

// function getGoodsNames(data) {
//   const namesList = []
//   data.forEach(el => {
//     namesList.push(el.name)
//   })
//   return namesList
// }

// function createNameDatalist(data) {
//   const namesList = getGoodsNames(data)
//   const datalist = $.create('datalist')
//   datalist.attr('id', 'goods-names')
//   namesList.forEach(name => {
//     const option = $.create('option')
//     option.attr('value', name)
//     datalist.append(option)
//   })

//   return datalist.$el.outerHTML
// }
