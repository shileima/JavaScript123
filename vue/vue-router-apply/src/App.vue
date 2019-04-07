<template>
  <div id="app">

    <!-- vue 官方推荐 :value.sync="pos6" = :value + @update:value + this.$emit('update:value',left+2)-->
    <ScrollBall color="orange" :value.sync="pos6" :target="350" ref="ball6">橘球</ScrollBall>
    <ScrollBall color="lightblue" :value="pos5" :target="450" @update:value="value=>pos5=value">红球</ScrollBall>

    <!-- v-model = :value + @input -->
    <ScrollBall color="red" v-model="pos3" :target="650" ref="ball3">红球</ScrollBall>
    <ScrollBall color="purple" v-model="pos4" :target="500">紫球</ScrollBall>

    <!-- 传递事件 -->
    <!-- <ScrollBall color="red" :pos="pos1" :target="500" @input="input">红球</ScrollBall>
    <ScrollBall color="blue" :pos="pos2" :target="550" @input="input">蓝球</ScrollBall> -->
    <button @click="getPos">获取球一的位置</button>
    <button @click="stopBall">停止红球</button>
  </div>
</template>

<script>
import ScrollBall from '+/ScrollBall.vue'

export default {
  name: 'app',
  data(){
    return {pos1:50,pos2:100,pos3:80,pos4:120,pos5:10,pos6:20}
  },
  components: {
    ScrollBall
  },
  methods:{
    input(value){
      this.pos1 = value,
      this.pos2 = value
    },
    getPos(){
      console.log(this.pos3)
      console.log(this.pos4)
    },
    stopBall(){
      this.$refs.ball3.stop()
      console.log(this.$refs.ball3)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
