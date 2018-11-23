<template>
  <div class="tag-bar">
    <div>我关注的</div>
    <ul>
      <li>Android</li>
      <li>前端</li>
      <li>后端</li>
      <li>ios</li>
      <li>设计</li>
      <li>产品</li>
      <li>阅读</li>
    </ul>
    <div class="tag-manage">标签管理</div>
  </div>
</template>

<script>
export default {
  name: 'TagBar'
}
</script>

<style lang="scss" scoped>
.tag-bar {
  height: 40px;
  border-bottom: #ddd solid;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  padding: 0 60px;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0 40px;
    flex: 2;
    li {
      flex: 1;
      text-align: left;
    }
  }
  .tag-manage {
    flex: 1;
    text-align: right;
  }
}
</style>
