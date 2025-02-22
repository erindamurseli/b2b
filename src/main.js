import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
