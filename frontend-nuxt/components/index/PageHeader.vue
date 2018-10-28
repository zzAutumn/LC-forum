/*
 * @Author: yezi
 * @Date: 2018-10-28 20:06:54
 * @Last Modified by: yezi
 * @Last Modified time: 2018-10-28 20:46:26
 * 首页header
 */

<template>
  <div>
    <v-layout class="header">
      <v-flex class="logo-text">Let's <span>Code!</span></v-flex>
      <v-flex md8 sm8 hidden-xs-only>
        <v-layout class="text-center">
          <v-flex v-for="i in frontTitleArr" :key="`1${i}`" class="title-flex"><span>{{i}}</span></v-flex>
          <v-flex  class="verti-line">|</v-flex>
          <v-flex v-for="i in backTitleArr" :key="`2${i}`" class="title-flex"><span>{{i}}</span></v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="text-right" @click="singUp">
        <!-- Sign In -->
        <avatar></avatar>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Avatar from './Avatar';

export default {
  name: 'PageHeader',
  components: {
    Avatar
  },
  props: {
    frontTitleArr: {
      type: Array,
      default: () => []
    },
    backTitleArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  methods: {
    singUp() {
      // this.$emit('signUpModal')
    }
  }
}
</script>

<style lang="scss" scoped>
$red: #F37272;
$duration: .2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.320, 1.275);
.header{
  margin-top: 40px;
}
.logo-text{
  text-align: left;
  font-family: 'Rosario', sans-serif;
  font-size: 20px;
  margin-left: 20px;
  & > span{
    font-size: 26px;
  }
}
.text-center{
  text-align: center;
  font-family: 'Patrick Hand', cursive;
  font-size: 24px;
  justify-content: space-between;
}
.text-right{
  text-align: right;
  font-family: 'Rosario', sans-serif;
  font-size: 24px;
  color: #E3800D;
  margin-right: 20px;
  cursor: pointer;
}
.verti-line{
  flex: 0 2 auto;
}
.title-flex{
  flex: 1 0 auto;
  cursor: pointer;
  & > span{
    position: relative;
    &:before,&:after{
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $red;
    }
    &:before{
      opacity: 0;
      transform: translateY(-$distance);
      transition: transform 0s $easeOutBack, opacity 0s;
    }
     &:after{
      opacity: 0;
      transform: translateY($distance/2);
      transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:hover,&:focus{
      &:before,&:after{
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform $duration $easeOutBack, opacity $duration;
      }
      &:after {
        transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
      }
    }
  }
}
</style>

