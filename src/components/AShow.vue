<template>
<dir>
  <p>AShow: {{ content }}</p>
</dir>
  
</template>
<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }

}
</script>

