<template>
  <!-- 经典的两列布局由左右两列组成，其特点为一列宽度固定、另一列宽度自适应和两列高度固定且相等。 -->
  <div class="two-column-layout">
    <div class="left">多列布局</div>
    <div class="right">两列，使用flex</div>
  </div>
</template>



<style lang="less" scoped>
.two-column-layout {
  width: 100%;
  height: 800px;
  display: flex;

  .left {
    width: 100px;
    height: 100%;
    background-color: #f66;
  }

  .right {
    flex: 1;
    height: 100%;
    background-color: aqua;
  }
}
</style>
