<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in list" :key="i">
          <img :src="item.img" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      console.log('updated')
    },
    updated(){
      this.init();
    },
    methods: {
      init() {
        var mySwiper = new Swiper ('.swiper-container', {
          autoplay:{
            disableOnInteraction:false
          },
          //direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        }) 
      }
    },
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    width: 100%;
    height: 4rem;
    background-color: rgb(236, 235, 241);
  } 
  .swiper-slide img {
    width:100%;
    height:100%
  }
</style>