<template>
  <div class="ball" :style="style" :id="ballId">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'scroll-ball',
  props:{
    color:{
      type:String,
      default:'white'
    },
    value:{
      type:Number,
      default:0
    },
    target:{
      type:Number,
      default:300
    }
  },
  computed:{
    ballId(){
      return `ball_${this._uid}`
    },
    style(){
      return {background:this.color}
    }
  },
  mounted(){
    let ball = document.getElementById(this.ballId);
  
    let fn = () => {
      let left = this.value;
      if(left >= this.target){ return cancelAnimationFrame(this.timer) }
      this.$emit('input',left+2) // 每执行一次函数，把这个新值传递给父组件更新数据
      this.$emit('update:value',left+2)
      ball.style.transform = `translate(${this.value}px)`;
      this.timer = requestAnimationFrame(fn)
    }
    this.timer = requestAnimationFrame(fn)
  },
  methods:{
    stop(){
      this.$emit('end')
      cancelAnimationFrame(this.timer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ball{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    border: 1px solid red;
  }
</style>
