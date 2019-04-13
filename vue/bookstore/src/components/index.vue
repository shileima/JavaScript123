<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/home">
        <div class="iconfont icon-home"></div>
        <div>首页</div>
      </router-link> |
      <router-link to="/list">
        <div class="iconfont icon-listalt"></div>
        <div>列表</div>
      </router-link> |
      <router-link to="/collect">
        <div class="iconfont icon-heart"></div>
        <div>收藏页</div>
      </router-link> |
      <router-link to="/add">
        <div class="iconfont icon-add_circle"></div>
        <div>添加页</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
  #nav {
  position: fixed;
  bottom: 0;
  background-color: #eee;
  z-index: 999;
  width: 100%;
  height: 1.5rem;
  border-top: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 0.4rem;
    &.router-link-exact-active {
      color: #42b983;
    }
    .iconfont {
      font-size: 0.6rem;
    }
  }
}
</style>
