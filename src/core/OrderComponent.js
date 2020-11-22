import {DomListerner} from '@core/DomListener';

export class OrderComponent extends DomListerner {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
