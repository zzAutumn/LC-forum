/*
 * @Author: yezi
 * @Date: 2018-10-28 20:38:08
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-06 18:32:00
 * 顶部avatar DropDown菜单
 */
<template>
  <v-menu
offset-y
          nudge-left="10"
transition="slide-y-transition">
    <v-avatar slot="activator"
color="red">
      <span class="white--text headline">J</span>
    </v-avatar>
    <v-list>
      <v-list-tile
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-tile-title @click="goTo(item)"> {{ item }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'Avatar',
  data() {
    return {
      items: ['我的主页', 'demo', 'data']
    }
  },
  methods: {
    goTo(item) {
      switch (item) {
        case '我的主页':
          this.$router.push({ name: 'personal' })
          break
        case 'demo':
          this.$router.push({ name: 'demo' })
          break
        case 'data':
          this.$router.push({ name: 'data' })
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
