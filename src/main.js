//入口js
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header'
import Star from './components/Star/Star'
import store from './store'

Vue.component('Header',Header)
Vue.component('Star',Star)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
