import Vue from 'vue'
import App from './App.vue'
import panZoom from 'vue-panzoom'
import '@/styles/index.scss'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(panZoom)
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
