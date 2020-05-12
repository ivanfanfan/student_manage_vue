import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Signin from "../components/Signin";
import Query from "../components/Query";
import news from "../components/header/news";
import DongTai from "../components/dir/DongTai";
import DaGang from "../components/dir/DaGang";
import CET from "../components/dir/CET";
import JieXi from "../components/dir/JieXi";
import NeiRong from "../components/dir/NeiRong";
import Time from "../components/dir/Time";
import project from "../components/project";
import Write from "../components/Write";
import Talk from "../components/Talk";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
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
    },
    {
      path: '/news',
      component: news,
      children: [
        {
          path: '/dongtai',
          component: DongTai
        },
        {
          path: '/dagang',
          component: DaGang
        },
        {
          path: '/cet',
          component: CET
        },
        {
          path: '/jiexi',
          component: JieXi
        },
        {
          path: '/neirong',
          component: NeiRong
        },
        {
          path: '/time',
          component: Time
        },


      ]
    },
    {
      path: '/project',
      component: project
    },
    {
      path: '/write',
      component: Write
    },
    {
      path: '/talk',
      component: Talk
    }

]

const router = new VueRouter({
  routes
})

export default router
