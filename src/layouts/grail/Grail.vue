<template>
  <div class="grail-layout">
    <div class="left">左</div>
    <div class="right">右</div>
    <!-- 由于浮动节点在位置上不能高于前面或平级的非浮动节点，否则会导致浮动节点下沉。因此在编写HTML结构时，将中间列节点挪到右列节点后面。 -->
    <div class="center">圣杯布局，使用padding为左右留出空间</div>
  </div>
</template>

<style lang="less" scoped>
.grail-layout {
  height: 800px;
  padding-left: 100px;
  padding-right: 200px;

  .left {
    height: 100%;
    float: left;
    width: 100px;
    margin-left: -100px;
    background-color: red;
  }

  .center {
    height: 100%;
    background-color: aquamarine;
  }

  .right {
    height: 100%;
    float: right;
    width: 200px;
    margin-right: -200px;
    background-color: #ff6;
  }
}
</style>
