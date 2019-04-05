<template>
  <li><slot></slot></li>
</template>
<style>
  div.title:after {
    content: ">";
    background-color: yellow;
  }
  li {list-style: none}
</style>
