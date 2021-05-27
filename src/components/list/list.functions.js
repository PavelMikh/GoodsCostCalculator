export function isDelete(event) {
  return event.target.dataset.type === 'delete'
}

export function deleteLine(event, root) {
  const el = event.target.closest('[data-type="line"]')
  return root.remove(el)
}

export function isInput(event) {
  return event.target.dataset.type === 'input'
}

export function searchByInputValue(event, data) {
  const inputValue = event.target.value.toLowerCase()
  return data.filter(el => {
    return el.name.toLowerCase().includes(inputValue)
  })
}
