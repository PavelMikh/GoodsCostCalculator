export class Emitter {
  constructor() {
    this.listeners = {}
  }

  emit(eventName, ...data) {
    this.listeners[eventName].forEach(fn => fn(...data))
  }

  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(fn)

    return () => {
      this.listeners[eventName].filter(listener => listener !== fn)
    }
  }
}
