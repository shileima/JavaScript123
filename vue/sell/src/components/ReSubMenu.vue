<template>
  <SubMenu>
    <template #title> <!-- #title 是传递模板中的slot name="title" -->
      {{data.title}}
    </template>
    <template v-for="child in data.children">
      <MenuItem :key="child.title" v-if="!child.children">{{child.title}}</MenuItem>
      <ReSub :key="child.title" :data="child" v-else></ReSub>
    </template>
  </SubMenu>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  name: 'ReSub', // 递归组件 循环自己
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SubMenu, MenuItem
  }
}
</script>
<style>
  div.title:after {
    content: ">";
    background-color: yellow;
  }
</style>
