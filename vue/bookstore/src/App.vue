<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Home page"/> -->
    <router-view/>
  </div>
</template>

/* <script>
// @ is an alias to /src
import HelloWorld from '+/HelloWorld.vue'

export default {
  name: 'HelloWorld',
  components: {
    HelloWorld
  }
}
</script> */
<style scoped lang="less">
  .home {text-align: center}
  #app {
  font-size: 0.5rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
