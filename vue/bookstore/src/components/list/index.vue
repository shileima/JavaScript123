<template>
  <div class="hello">
    <myHeader>列表</myHeader>
    <ul>
      <!-- <li v-for="(item,i) in list" :key="i">
        <item :data="item"/>
      </li> -->
      <item v-for="(item,i) in list" :key="i" :data="item" />
    </ul>
  </div>
</template>

<script>
import myHeader from '@/common/header.vue';
import item from '+/list/item.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    myHeader,
    item
  },
  data() {
     return {
    //   list:[]
     }
  },
  created(){
    // this.$store.dispatch('getList',data => {
    //   console.log(data)
    //   this.list = data.data;
    // })
    
    this.$store.dispatch('getList')
  },
  computed: {
    list(){
      return this.$store.state.list;
    }
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
