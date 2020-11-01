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
  height: 800px;
  width: 100%;
  column-count: 4;
  column-gap: 0;

  > div {
    height: 100%;
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
