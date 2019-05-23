import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


