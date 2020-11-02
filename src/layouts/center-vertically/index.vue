<template>
  <div class="container">
    <div class="block-element">
      <label class="block">块级元素</label>
    </div>
    <div class="inline-element">
      <div class="inline">行内元素</div>
    </div>
    <div class="all-element1">
      <div class="all">全部元素table</div>
    </div>
    <div class="all-element2">
      <div class="all">全部元素table-cell</div>
    </div>
    <div class="all-element3">
      <div class="all">全部元素position+transform</div>
    </div>
    <div class="all-element4">
      <div class="all">全部元素flex+margin</div>
    </div>
    <div class="all-element5">
      <div class="all">全部元素flex+align-items</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: flex-start;

  > div {
    height: 500px;
    width: 300px;
  }

  .block-element {
    height: auto;
    background-color: orange;

    .block {
      display: block;
      background-color: #2f2;
    }
  }

  .inline-element {
    display: inline;
    text-align: left;
    line-height: 500px;
    background-color: blue;

    .inline {
      display: inline;
      background-color: #f67;
    }
  }

  .all-element1 {
    display: table;
    background-color: aqua;

    .all {
      display: table-cell;
      vertical-align: middle;
      background-color: #f66;
    }
  }

  .all-element2 {
    display: table-cell;
    vertical-align: middle;
    background-color: yellowgreen;

    .all {
      background-color: #f66;
    }
  }

  .all-element3 {
    position: relative;
    background-color: #d78;

    .all {
      position: absolute;
      top: 50%;
      width: 160px;
      transform: translateY(-50%);
      background-color: #6f0;
    }
  }

  .all-element4 {
    display: flex;
    background-color: #06f;

    .all {
      margin: auto 0;
      background-color: #ff6;
    }
  }

  .all-element5 {
    display: flex;
    align-items: center;
    background-color: pink;

    .all {
      background-color: gainsboro;
    }
  }
}
</style>
