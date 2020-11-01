<template>
  <div class="links">
    <router-link to="/layouts/fullscreen/absolute"
      >全屏布局-绝对定位</router-link
    >
    <router-link to="/layouts/fullscreen/flex">全屏布局-弹性盒子</router-link>
    <router-link to="/layouts/multi-column/two">多列布局-两列</router-link>
  </div>
</template>

<script>
export default {
  name: "Layouts"
};
</script>

<style lang="less" scoped>
.links {
  display: flex;
  flex-direction: column;
}
</style>
