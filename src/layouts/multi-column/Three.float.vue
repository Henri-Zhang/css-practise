<template>
  <div class="three-column-layout">
    <div class="left">三列布局</div>
    <div class="center">我是中间</div>
    <div class="right">使用float</div>
  </div>
</template>

<style lang="less" scoped>
.three-column-layout {
  width: 100%;
  height: 800px;

  .left {
    height: 100%;
    float: left;
    width: 100px;
    background-color: #ff6;
  }

  .center {
    float: left;
    height: 100%;
    width: 200px;
    background-color: #6ff;
  }

  // 原理类似两列布局，参见两列布局
  .right {
    margin-left: 300px;
    height: 100%;
    background-color: #66f;
  }
}
</style>
