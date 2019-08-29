import Vue from 'vue'
import Router from 'vue-router'
// @相当于一个绝对路径 src 官方帮我们配置了别名
import Home from '@/views/home'
import Friends from '@/views/friends'
import Cart from '@/views/cart'
import Search from '@/views/search'

import NewsList from '@/views/home/news/newslist'
import NewsInfo from '@/views/home/news/newsinfo'
import PhotoList from '@/views/home/photos/photolist'
import PhotoInfo from '@/views/home/photos/photoinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      // 并不是嵌套的意思
      path: '/home/newslist',
      component: NewsList
    },
    {
      // 并不是嵌套的意思
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    }
    // {
    //   path: '/about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
