<template>
  <div id="menu">
    <MainMenu>
      <template v-for="menu in menuList">
        <MenuItem :key="menu.title" v-if="!menu.children">{{menu.title}}</MenuItem>
        <ReSubMenu :key="menu.title" v-else :data="menu"></ReSubMenu>
      </template>
    </MainMenu>
  </div>
</template>

<script>
import MainMenu from './MainMenu'
import MenuItem from './MenuItem'
import ReSubMenu from './ReSubMenu'
export default {
  name: 'Login',
  data () {
    return {
      menuList: [
        {
          title: '菜单1',
          children: [
            {
              title: '菜单1-1',
              children: [
                { title: '菜单1-1-1' },
                { title: '菜单1-1-2' },
                {
                  title: '菜单1-1-3',
                  children: [
                    { title: '菜单1-1-1' },
                    { title: '菜单1-1-2' },
                    {
                      title: '菜单1-1-3',
                      children: [
                        { title: '菜单1-1-1' },
                        { title: '菜单1-1-2' },
                        { title: '菜单1-1-3' }
                      ]
                    }
                  ]
                }
              ]
            },
            { title: '菜单1-2' },
            { title: '菜单1-3' }
          ]
        },
        {
          title: '菜单2'
        },
        {
          title: '菜单3'
        }
      ]

    }
  },
  components: {
    MainMenu, MenuItem, ReSubMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #menu {
    text-align: left;
    color: brown;
  }
  #menu div.title:after {
    content: ">";
    background-color: yellow;
  }
</style>
