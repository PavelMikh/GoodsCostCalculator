import {storage} from '@core/utils'

const defaultState = {
  orderAdress: '',
  phoneNumber: ''
}

export const initialState = storage('calc-state') || defaultState

