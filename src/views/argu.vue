<template>
  <div>
    <!-- {{ $route.params.name }} -->
    {{ name }}
  </div>
</template>
<script>
export default {
  //为了解耦，把name作为属性传入，首先定义属性
  props: {
    name: {
      type: [String, Number],
      default: 'moon'
    }
  },
  beforeRouteUpdate () {
    //
  }
}
</script>

