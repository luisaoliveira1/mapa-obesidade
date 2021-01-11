import Vue from 'vue'
import App from './App.vue'
import panZoom from 'vue-panzoom'
import '@/styles/index.scss'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle, faTimes, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faInfoCircle, faTimes, faExpandAlt)
Vue.use(panZoom)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
