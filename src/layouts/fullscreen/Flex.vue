<template>
  <div class="fullscreen-layout">
    <header></header>
    <main>全屏布局-弹性盒子</main>
    <footer></footer>
  </div>
</template>

<style lang="less" scoped>
.fullscreen-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;

  header {
    height: 50px;
    background-color: #f66;
  }

  footer {
    height: 50px;
    background-color: #66f;
  }

  main {
    flex: 1;
    background-color: #3c9;
  }
}
</style>
