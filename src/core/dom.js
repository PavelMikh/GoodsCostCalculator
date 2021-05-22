export class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
  }

  get inner() {
    return this.$el.innerHTML
  }

  get data() {
    return this.$el.dataset
  }

  text(text) {
    if (typeof text === 'string') {
      this.$el.textContent = text
    }

    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value
    }

    return this.$el.textContent
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  attr(name, value) {
    this.$el.setAttribute(name, value)
  }

  find(selector) {
    return this.$el.querySelector(selector)
  }

  remove(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    node.parentNode.removeChild(node)
    return node
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}


