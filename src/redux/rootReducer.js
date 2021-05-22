import {CHANGE_ADRESS, CHANGE_PHONE} from '@/redux/types'

export function rootReducer(state = {}, action) {
  // let tmpState
  // console.log('reducer: ', state)
  console.log('action type: ', action.type)
  switch (action.type) {
    case CHANGE_ADRESS:
      // tmpState = state['orderAdress']
      // tmpState[action.data.id] = action.data.value
      return {...state, orderAdress: action.data.value}
    case CHANGE_PHONE:
      return {...state, phoneNumber: action.data.value}
    default: return state
  }
}
