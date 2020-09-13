import Vue from 'vue'
import Router from 'vue-router'
import customers from '../components/customers'
import about from '../components/about'
import add from '../components/add'
import adetails from '../components/adetails'
import edit from '../components/edit'
  
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:customers},
    {path:"/about",component:about},
    {path:'/add',component:add},
    {path:'/customer/:id',component:adetails},
    {path:'/edit/:id',component:edit} 
  ]
})
