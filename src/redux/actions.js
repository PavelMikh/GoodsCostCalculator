import {CHANGE_ADRESS, CHANGE_PHONE} from '@/redux/types'

export function changeAdress(data = {}) {
  return {
    type: CHANGE_ADRESS,
    data
  }
}

export function changePhone(data = {}) {
  return {
    type: CHANGE_PHONE,
    data
  }
}
