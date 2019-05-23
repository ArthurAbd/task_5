import VueRouter from 'vue-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Login from './pages/Login'
import Reg from './pages/Reg'


export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reg',
      component: Reg
    }
  ],
  mode: 'history'
})
