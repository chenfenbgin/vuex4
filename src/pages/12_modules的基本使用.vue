<template>
  <div>
    <h2>当前计数: {{ $store.state.rootCounter }}</h2>
    <h2>当前计数: {{ $store.state.home.homeCounter }}</h2>
    <h2>当前计数: {{ $store.state.user.userCounter }}</h2>
    
  </div>
</template>

<script>

  export default {
    setup(){
      
    }
  }
</script>

<style scoped>

</style>