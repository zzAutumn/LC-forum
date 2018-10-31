/*
 * @Author: yezi
 * @Date: 2018-10-28 20:52:49
 * @Last Modified by: yezi
 * @Last Modified time: 2018-10-28 21:10:58
 * 个人主页
 */
<template>
  <div>
    <header></header>
      <v-navigation-drawer style="height: 100vh">
        <v-toolbar flat>
          <v-list>
            <v-list-tile avatar>
              <v-avatar
                size=54
                color="red"
              >
                <span class="white--text headline">J</span>
              </v-avatar>
              <v-list-tile-content>
                <v-list-tile-title>zzAutumn</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list>
          <v-list-tile>
            <v-layout class="text-center">
              <v-flex>我关注的</v-flex>
              <v-flex>|</v-flex>
              <v-flex>关注我的</v-flex>
            </v-layout>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile>
            <v-layout>
              <v-flex>我关注的专题</v-flex>
              <v-flex></v-flex>
              <v-flex></v-flex>
            </v-layout>
          </v-list-tile>
          <v-list-tile>
            <v-layout class="topics">
              <v-flex><span>Vue</span></v-flex>
              <v-flex><span>React</span></v-flex>
              <v-flex><span>3</span></v-flex>
              <v-flex><span>4</span></v-flex>
              <v-flex><span>5</span></v-flex>
            </v-layout>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Personal'
}
</script>

<style lang="scss" scoped>
header{
  height: 86px;
  width: 100%;
  background: #D8A00A;
}
.v-navigation-drawer{
  height: 100vh;
}
.v-avatar{
  margin-right: 10px;
}
.v-list__tile__title{
  font-family: 'Rosario', sans-serif;
}
.text-center{
  text-align: center;
}
.topics{
  flex-wrap: wrap;
  height: 100%;
  .flex{
    flex: 1 1 30%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
}

</style>

