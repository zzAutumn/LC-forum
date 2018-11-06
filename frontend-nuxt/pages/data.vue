/*
 * @Author: mikey.zhaopeng
 * @Date: 2018-11-06 18:30:25
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-06 19:21:33
 * 展示Data的页面
 */

<template>
  <div>
    data
  </div>
</template>

<script>
export default {
  name: 'Data',
  async create() {
    const result = await this.$axios.get('/rooms/queryShopById', {
      shopId: 14,
      roomType: null
    })
    console.log(result)
  }
}
</script>

<style lang="scss" scoped>
</style>
