/*
 * @Author: mikey.zhaopeng
 * @Date: 2018-11-06 18:30:25
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-07 00:02:07
 * 展示Data的页面
 */

<template>
  <div>
    <el-radio
      v-model="radio"
      label="1">备选项</el-radio>
    <el-row
      class="cus-row"
      type="flex"
      justify="space-between">
      <el-col
        v-for="(item, index) in roomData"
        :span="6"
        :key="index"
        gutter="10"
        class="cus-col"
        offset="1">
        <el-card :body-style="{ padding: '0px', height: '100%' }">
          <img
            :src="item.room_main_image"
            class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button
                type="text"
                class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $http from '../service/index'
export default {
  name: 'Data',
  data() {
    return {
      radio: '1'
    }
  },
  async asyncData({ app }) {
    // 这里data等同于上面的res.data
    let result = await $http.post('/rooms/queryByShopId', {
      shopId: 14,
      roomType: null
    })
    console.log(result)
    if (result.code == 200) {
      return { roomData: result.data }
    }
  }
}
</script>

<style lang="scss" scoped>
.cus-row {
  flex-wrap: wrap;
  .cus-col {
    height: 400px;
    margin-bottom: 10px;
    .el-card {
      height: 100%;
      .el-card__body {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>
