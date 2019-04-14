<template>
  <div class="item_box">
      <div class="img_box">
          <img :src="data.bookCover" alt="">
      </div>
      <div class="conten_box">
          <h2>{{data.bookName}}</h2>
          <p class="desc">{{data.bookInfo}}</p>
          <div class="price">{{data.bookPrice}}</div>
          <div class="btn_box">
              <button @click='del'>删除</button>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
        data: {
            type: Object,
            default(){
                return {}
            }
        },
    },
    methods: {
        del(){
            this.$store.commit('delCollect',this.data)
        }
    }
  }
</script>

<style lang="less" scoped>
  .item_box{
        overflow: hidden;
        text-align: left;
        border-bottom:1px solid #ccc;
        .img_box{
            float: left;
            width: 29%;
            img{
                width: 100%;

            }
        }
        .conten_box{
            float: right;
            width: 70%;
            h2{
                font-size: 0.5rem;
            }
            p{
                font-size: 0.4rem;
            }
            .price{
                font-size: 0.4rem;
                color: red;

            }
            .btn_box{
              button{
                background-color: rgba(199, 76, 42, 0.79);
                border-color: rgba(199, 76, 42, 0.79);
                margin-right: 0.1rem;
                padding: 0 0.1rem;
                color: rgb(255, 255, 255);
              }
            }
        }
    }
</style>