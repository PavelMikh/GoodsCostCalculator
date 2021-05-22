import {Order} from '@/components/order/Order'
import {Header} from '@/components/header/Header'
import {List} from '@/components/list/List'
import {Total} from '@/components/total/Total'
import {Adder} from '@/components/adder/Adder'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/redux/rootReducer'
import {storage} from '@core/utils'
import {initialState} from '@/redux/initialState'
import './scss/index.scss'

const store = createStore(rootReducer, initialState)

store.subscribe(state => {
  storage('calc-state', state)
})

const order = new Order('#app', {
  components: [Header, List, Adder, Total],
  store
})

order.render()
