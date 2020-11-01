<template>
  <div class="double-wings-layout">
    <div class="left">左</div>
    <div class="center">双飞翼布局，使用margin与左右空间隔开，这里先用flex</div>
    <div class="right">右</div>
  </div>
</template>

<style lang="less" scoped>
.double-wings-layout {
  width: 100%;
  height: 800px;
  display: flex;

  .left {
    width: 200px;
    background-color: orange;
  }

  .center {
    flex: 1;
    background-color: greenyellow;
  }

  .right {
    width: 100px;
    background-color: #f33;
  }
}
</style>
