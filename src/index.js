import {Order} from '@/components/order/Order'
import {Header} from '@/components/header/Header'
import {List} from '@/components/list/List'
import {Total} from '@/components/total/Total'
import {Adder} from '@/components/adder/Adder'
import {Line} from '@/components/line/Line'
import './scss/index.scss'

const order = new Order('#app', {
  components: [Header, List, Total],
  childComponents: [Line, Adder]
})

order.render()
