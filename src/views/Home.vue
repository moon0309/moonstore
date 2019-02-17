<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="handleclick('back')">返回上一页</button>
    <button @click="handleclick('push')">跳转到parent</button>
    <button @click="handleclick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
   props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 组件内守卫 3种
  // 1.路由触发要进来这个页面的时候被调用，此时页面还没有渲染，使用this获取不到当前组件的实例,如果想使用实例，在next中加vm,vm就是组件的实例
  beforeRouteEnter (to, from, next) {
    // this
    next(vm => {
      console.log(vm)
    })
  },
  // 2.在编辑页面将要离开时提醒用户是否保存
  // beforeRouteLeave (to, from, naxt) {
  //   const leave = confirm('您确定要离开吗')
  //   if (leave) next()
  //   else next(false)
  // },
  // 3.beforeRouteUpdate 组件路由发生变化，组件被复用的时候调用，在argu.vue中演示
  methods: {
    handleclick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        // 第一种写法
        const name = 'moon'
        this.$router.push({
         path: `/argu/${name}`
        //第二种写法
      // this.$router.push({
      //     name: 'argu',
      //     params: {
      //       name: 'moon'
      //     }
          //第三种写法
          // query: {
          //   name: 'moon'
          // }
        })
      }else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
