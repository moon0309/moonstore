<template>
  <div class="tel"> 
    <P>{{ message }}</P>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>
<style>
.tel{
  border: 1px solid red;
}
</style>

