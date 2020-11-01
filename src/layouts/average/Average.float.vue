<template>
  <div class="average-layout">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
  </div>
</template>

<style lang="less" scoped>
.average-layout {
  width: 100%;
  height: 800px;

  > div {
    float: left;
    height: 100%;
    width: 25%;
  }

  .one {
    background-color: #f66;
  }

  .two {
    background-color: #66f;
  }

  .three {
    background-color: #f90;
  }

  .four {
    background-color: #09f;
  }
}
</style>
