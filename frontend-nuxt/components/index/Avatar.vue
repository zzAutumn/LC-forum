/*
 * @Author: yezi
 * @Date: 2018-10-28 20:38:08
 * @Last Modified by: yezi
 * @Last Modified time: 2018-10-28 21:10:45
 * 顶部avatar DropDown菜单
 */
<template>
  <v-menu offset-y nudge-left=10 transition="slide-y-transition">
    <v-avatar color="red" slot="activator">
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
      items: ['我的主页', 'demo', 'item3']
    }
  },
  methods: {
    goTo(item) {
      switch (item) {
        case '我的主页':
          this.$router.push({name: 'personal'})
          break;
        case 'demo':
          this.$router.push({name: 'demo'})
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

