// 创建路由实例
/* jshint esversion: 6 */

import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  routes
})

// 把是否登录保存在一个常量里，实际中此状态通过接口获取
const HAS_LOGINING = true

// 在router实例上做全局前置守卫,router.beforeEach()方法可以创建一个全局前置守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINING) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINING) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve 在导航被确认之后判断  用法与上同

// 后置钩子
router.afterEach((to, from) => {
  // logining = false
})

/** 完整的导航解析流程
 * 1.导航被触发
 * 2.在失活的组件（即将离开的页面组件）中，调用离开守卫beforeRouteLaeve（演示在home.vue中）
 * 3.调用全局的前置守卫 beforeEach（演示在index.vue中）
 * 4.在重用的组件里调用 beforeRouteUpadte (在argu.vue中演示)
 * 5.调用路由独享的守卫 beforeEnter (在route.vue中演示)
 * 6.解析异步路由组件
 * 7.在被激活的组件（即将进入的页面）里调用beforeRouteEnter （演示在home.vue中）
 * 8.调用全局的解析守卫 beforeEnterSolve（演示在home.vue中）
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEach （演示在index.vue中）
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数
*/

export default router
