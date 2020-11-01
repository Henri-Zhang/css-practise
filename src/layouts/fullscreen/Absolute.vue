<template>
  <div class="fullscreen-layout">
    <header></header>
    <main>全屏布局-绝对定位</main>
    <footer></footer>
  </div>
</template>

<style lang="less" scoped>
.fullscreen-layout {
  position: relative;
  width: 100%;
  height: 800px;

  header,
  main,
  footer {
    position: absolute;
    left: 0;
    right: 0;
  }

  header {
    top: 0;
    height: 50px;
    background-color: #f66;
  }

  footer {
    bottom: 0;
    height: 50px;
    background-color: #66f;
  }

  main {
    top: 50px;
    bottom: 50px;
    height: calc(100% - 100px);
    background-color: #3c9;
  }
}
</style>
