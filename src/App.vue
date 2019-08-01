<template>
  <div id="app">
    App.vue------
    <div class="box"></div>
    <!-- 测试vant组件库 -->
    <van-button type="info">信息按钮</van-button>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
  .box {
    width: 700px;
    height: 100px;
    background: yellow;
  }
</style>
