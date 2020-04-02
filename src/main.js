import Vue from 'vue'
import App from './App.vue'

import './style/tailwind.css'
import './style/fonts/Montserrat/Montserrat.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
