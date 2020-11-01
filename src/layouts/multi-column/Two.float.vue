<template>
  <!-- 经典的两列布局由左右两列组成，其特点为一列宽度固定、另一列宽度自适应和两列高度固定且相等。 -->
  <div class="two-column-layout">
    <div class="left">多列布局</div>
    <div class="right">两列，使用float</div>
  </div>
</template>



<style lang="less" scoped>
.two-column-layout {
  width: 100%;
  height: 800px;

  .left {
    float: left;
    width: 100px;
    height: 100%;
    background-color: #f66;
  }

  // 由于left的float脱流，这边需要margin-left
  // .right {
  //   margin-left: 100px;
  //   height: 100%;
  //   background-color: #66f;
  // }

  // right声明overflow: hidden形成BFC
  .right {
    overflow: hidden;
    height: 100%;
    background-color: #66f;
  }
}
</style>
