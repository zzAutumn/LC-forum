<template>
<v-content>
  <v-container fluid>
    <v-layout class="header">
      <v-flex class="logo-text">Let's <span>Code!</span></v-flex>
      <v-flex md8 sm8 hidden-xs-only>
        <v-layout class="text-center">
          <v-flex v-for="i in frontTitleArr" :key="`1${i}`" class="title-flex"><span>{{i}}</span></v-flex>
          <v-flex  class="verti-line">|</v-flex>
          <v-flex v-for="i in backTitleArr" :key="`2${i}`" class="title-flex"><span>{{i}}</span></v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="text-right" @click="singUp">Sign In</v-flex>
    </v-layout>
    <v-layout class="banner" hidden-xs-only justify-center>
      <v-flex md10 sm10>
        <img src="@/assets/images/banner.jpg" class="banner-img">
      </v-flex>
    </v-layout>

    <page-footer></page-footer>
    <!-- 注册modal -->
    <login-modal
      :signUpDialog="signUpDialog"
      @closeModal='closeSingUpModal'
    ></login-modal>
  </v-container>
</v-content>
</template>

<script>
import LoginModal from '@/components/index/LoginModal';
import PageFooter from '@/components/index/PageFooter';

export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rosario:700i' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Patrick+Hand' }
    ]
  },
  components: {
    LoginModal,
    PageFooter
  },
  data() {
    return {
      frontTitleArr: ['Js','Vue', 'React', 'Angular', 'Css'],
      backTitleArr: ['Java', 'Python', 'C', 'Ruby', 'Golang'],
      signUpDialog: false
    }
  },
  methods: {
    singUp() {
      this.signUpDialog = true;
    },
    closeSingUpModal() {
      this.signUpDialog = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$red: #F37272;

$duration: .2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.320, 1.275);

.container{
  padding: 0;
  max-width: 1200px;
}
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
.banner{
  height: 200px;
  margin-top: 20px;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>


