<template>
  <div class="padBT">
    <myHeader>首页</myHeader>
    <mySwiper :list='banner'/>
    <list/>
  </div>
</template>

<script>
import myHeader from '@/common/header.vue';
import mySwiper from '@/common/swiper.vue';
import list from '+/home/list.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      banner: []
    }
  },
  components:{
    myHeader,
    mySwiper,
    list
  },
  created(){
    this.$store.dispatch('getBanner',data => {
      this.banner = data.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
