<template>
  <div>
    <page-header/>
    <tag-bar/>
    <el-container/>
  </div>

</template>

<script>
import PageHeader from '@/components/PageHeader'
import TagBar from '@/components/TagBar'
export default {
  components: {
    PageHeader,
    TagBar
  },
  middleware: 'auth'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
