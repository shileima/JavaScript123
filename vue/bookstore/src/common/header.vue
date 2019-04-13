<template>
  <div class="header"><slot></slot></div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .header {
    width:100%;
    height:1.5rem;
    z-index: 999;
    position: fixed;
    top:0;
    text-align: center;
    line-height: 1.5rem;
    background-color: rgb(86,164,209);
    color:#fff;
  }
</style>