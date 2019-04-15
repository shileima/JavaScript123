<template>
  <div class="hello">
    <myHeader>收藏</myHeader>
    <item v-for="(item,i) in collectList" :key="i" :data="item" />
  </div>
</template>

<script>
import myHeader from '@/common/header.vue';
import item from '+/collect/item.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    myHeader,
    item
  },
  created(){
    this.$store.dispatch('getCollectList')
  },
  updated(){
    this.$store.dispatch('getCollectList')
  },
  computed:{
    collectList(){
      return this.$store.state.collectList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
.hello {
  list-style-type: none;
  padding: 1.8rem 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
