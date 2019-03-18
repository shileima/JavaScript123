<template>
   <div>
     <div class="title" @click="change">
       <slot name="title"></slot>     
     </div>  
     <div v-show="flag" class="sub">
         <slot></slot>
     </div>
   </div>
</template>

<script>
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
export default {
  data(){
      return {flag:false}
  },
  methods:{
      change(){
          this.flag = !this.flag
      }
  }
}
</script>

<style>
  .sub{
      padding-left:20px;
  }
</style>