'use babel'

import {CompositeDisposable} from 'atom'

export default {
  subscriptions: null,

  activate () {
    this.subscriptions = new CompositeDisposable()
  },

  deactivate () {
    if (this.subscriptions) {
      this.subscriptions.dispose()
    }
    this.subscriptions = null
  }
}
