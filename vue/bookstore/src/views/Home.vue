<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Home page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '+/HelloWorld.vue'

export default {
  name: 'HelloWorld',
  components: {
    HelloWorld
  }
}
</script>
