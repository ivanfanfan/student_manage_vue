import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Signin from "../components/Signin";
import Query from "../components/Query";


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/signin',
      component: Signin
    },
    {
      path: '/query',
      component: Query
    }

]

const router = new VueRouter({
  routes
})

export default router
