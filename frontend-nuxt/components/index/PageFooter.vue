/*
 * @Author: yezi
 * @Date: 2018-10-28 17:30:52
 * @Last Modified by: yezi
 * @Last Modified time: 2018-10-28 19:46:46
 * 首页foot
 */

<template>
<v-app>
 <v-content>
  <v-footer app fixed color='#453E3E' height=76 class="page-footer">
    <v-layout row justify-space-around>
      <v-flex md4 sm4>
        <v-layout column class="ml">
          <v-flex class="logo-text">Let's <span>Code!</span></v-flex>
          <v-flex>&copy; {{ new Date().getFullYear() }}</v-flex>
        </v-layout>
      </v-flex>
      <v-flex md8 sm8>
        <v-layout row class="sub-text">
          <v-flex>About Us</v-flex>
          <v-flex>Contact Us</v-flex>
          <v-flex>Join Us</v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
 </v-content>
</v-app>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
.page-footer{
  color: #fff;
  .ml{
    margin-left: 20px;
    .logo-text{
      font-family: 'Rosario', sans-serif;
      font-size: 20px;
      margin-bottom: 10px;
      & > span{
        font-size: 26px;
      }
    }
  }
  .sub-text{
    font-family: 'Rosario', sans-serif;
    font-size: 20px;
    margin-top: 5px;
  }
}
</style>

