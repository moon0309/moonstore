<template>
  <div id="app">
    <div id="nav">
      <router-link v-bind:to="{ name: 'home'}">Home</router-link> |    
      <!-- /* 封装了一个a标签（链接标签）*/ -->
      <router-link v-bind:to="{ name: 'about'}">About</router-link>
    </div>
    <!-- 命名视图 -->
    <transition-group :name="routerTransition">
    <router-view key="default"/>
    <router-view key="email" name="email"/>
    <router-view key="tel" name="tel"/>
    </transition-group>
    <!-- //视图渲染组件  通过router-link跳转加载的组件都会在这里渲染 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>


<style lang="less">
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
