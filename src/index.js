import {Order} from '@/components/order/Order'
import {Header} from '@/components/header/Header'
import {List} from '@/components/list/List'
import {Total} from '@/components/total/Total'
import {Adder} from '@/components/adder/Adder'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/redux/rootReducer'
import {storage} from '@core/utils'
import {initialState} from '@/redux/initialState'
import {getData} from '@/http/getData'
import {httpConfig} from '@/http/config'
import './scss/index.scss'

const store = createStore(rootReducer, initialState)

store.subscribe(state => {
  storage('calc-state', state)
})

getData(httpConfig.url)
    .then(data => {
      const order = new Order('#app', {
        components: [Header, List, Adder, Total],
        store,
        data
      })

      order.render()
    })
    .catch(err => {
      // TODO: Дописать класс Empty
      // const empty = new Empty('#app')
      // empty.html('<h1 style="textAlign: center;">No data.</h1>')
      console.warn(err.message)
    })
