<template>
  <div>
    <div class="all-element1">
      <div class="all">全部元素margin</div>
    </div>
    <div class="block-element">
      <label class="block">块级元素</label>
    </div>
    <div class="inline-element">
      <div class="inline">行内元素</div>
    </div>
    <div class="all-element2">
      <div class="all">全部元素position+margin</div>
    </div>
    <div class="all-element3">
      <div class="all">全部元素position+transform</div>
    </div>
    <div class="all-element4">
      <div class="all">全部元素flex</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.all-element1 {
  height: 100px;
  width: 300px;
  background-color: aqua;

  .all {
    margin: 0 auto;
    width: fit-content; // 指定宽度，不然会默认撑满父元素
    background-color: #f66;
  }
}

.block-element {
  height: 100px;
  width: 300px;
  background-color: orange;

  .block {
    display: block;
    margin: 0 auto;
    width: 100px; // 定宽需要指定为块级元素
    background-color: #2f2;
  }
}

.inline-element {
  height: 100px;
  width: 300px;
  background-color: blue;
  text-align: center;

  .inline {
    display: inline;
    background-color: #f67;
  }
}

.all-element2 {
  position: relative;
  height: 100px;
  width: 300px;
  background-color: yellowgreen;

  .all {
    position: absolute;
    left: 0;
    margin-left: calc(50% - 80px);
    width: 160px;
    background-color: #f66;
  }
}

.all-element3 {
  position: relative;
  height: 100px;
  width: 300px;
  background-color: #d78;

  .all {
    position: absolute;
    left: 0;
    margin-left: 50%;
    width: 160px;
    transform: translateX(-50%);
    background-color: #6f0;
  }
}

.all-element4 {
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  background-color: #06f;

  .all {
    height: fit-content;
    background-color: #ff6;
  }
}
</style>
