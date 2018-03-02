<template>

  <div :class="typeMessage.class">
    {{typeMessage.message}}
  </div>
</template>
<script>
  export default {
    props: {
      typeMessage: {type: Object, required: true}
    }
  }
</script>
<style scoped>
  div {
    margin: 1rem auto;
  }
</style>