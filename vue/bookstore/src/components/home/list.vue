<template>
  <div class="hot_list">
    <h2>热门图书</h2>
    <ul>
      <li v-for="(item, i) in this.hot" :key="i">
        <div>
          <img :src="item.img" alt="">
        </div>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hot:[]
      }
    },
    created(){
      this.$store.dispatch('getHot',data => {
        console.log(data)
        this.hot = data.data;
      })
    }
  }
</script>

<style lang="less" scoped>
  .hot_list {
    h2 {
      padding: 0.2rem;
      font-size: 0.6rem;
      color:#333
    }
    ul {
      overflow: hidden;
      li {
        float:left;
        width:50%;
        box-sizing: border-box;
        padding:0.2rem;
        div {
          width:100%;
          //height:3rem;
          img {
            width:100%
          }
        }
        p {
          text-align: center;
          font-size: 0.4rem;
        }
      }
    }
  }
</style>