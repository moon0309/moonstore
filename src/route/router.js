// 配置路由列表
/* jshint esversion: 6 */
import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    // 为home页设置别名
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // if (from.name === 'login') alert('这是从登录页来的')
      // else alert('这不是从登录页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  // 动态路由
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named-view',
    name: 'named-view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    // 重定向
    path: '/main',
    // 第一种方法
    // redirect: '/'
    // 第二种方法
    // redirect: {
    //   name: 'home'
    // }
    // 第三种方法
    // redirect: to => {
    //   return {
    //     name: 'home'
    //   }
    // }
    //   redirect: to => {
    //     return '/'
    //   }
    // }
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
