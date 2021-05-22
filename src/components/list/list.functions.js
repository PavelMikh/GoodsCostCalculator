export function isDelete(event) {
  return event.target.dataset.type === 'delete'
}

export function deleteLine(event, root) {
  const el = event.target.closest('[data-type="line"]')
  return root.remove(el)
}
