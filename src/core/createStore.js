export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  const subscribers = []

  return {
    subscribe(fn) {
      subscribers.push(fn)
      return {
        unsubscribe() {
          subscribers.filter(sub => sub !== fn)
        }
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(fn => fn(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}
