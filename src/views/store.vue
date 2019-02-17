<template>
  <div>
    <!-- <a-input v-model="inputValue"/> -->
    <!-- 展示AShow时不需要修改input值，去掉v-model,写法如下 -->
    <a-input @input="handleInput"/>
    <p>{{ inputValue }} -> lastLatter is {{ inputValueLastLetter }}</p>
    <!-- <a-show :content="inputValue"/> -->
  <!-- <p>appName: {{ appName }} appNameWithVersion: {{ appNameWithVersion }}</p> -->
  <p>userName: {{ userName }} firstLetter is: {{ firstLetter }}</p>

  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'
// 在模块中使用命名空间的写法
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  // 引入AInput后注册
  components: {
    AInput,
    AShow
  },
  computed: {
    // 第一种写法
    // ...mapState([
    //   'appName'
    // ])
    // 第二种写法
    ...mapState('user', {
      // appName: state => state.appName,
      userName: state => state.userName
    }),
    // ...mapState({
    //   userName: state => state.userName
    // })
    ...mapGetters('user', [
      // 'appNameWithVersion',
      'firstLetter'
    ]),
    appName () {
      return this.$store.state.appName
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    userName () {
      return this.$store.state.user.userName
    },
    //定义一个inputValue属性
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }  
}
</script>


