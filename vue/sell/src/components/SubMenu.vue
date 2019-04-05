<template>
   <div>
     <!-- 具名的slot插槽是匹配SubMenu组件内带#title的内容 -->
     <div class="title" @click="change">
       <slot name="title"></slot>
     </div>
    <!-- slot 是将使用SubMenu组件内的内容(除了具名匹配外)保留在下面的slot中 -->
    <!-- slot外的div是配合里面的slot加样式或事件逻辑的 -->
     <div class="sub" v-show="flag" >
         <slot></slot>
     </div>

   </div>
</template>

<script>
export default {
  data () {
    return { flag: false }
  },
  methods: {
    change () {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
  .sub{
      padding-left:20px;
  }
  div.title:after {
    content: ">";
    background-color: yellow;
  }
</style>
