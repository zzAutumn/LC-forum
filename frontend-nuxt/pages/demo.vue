<template>
  <div class="demo">
   <v-toolbar
      color="#3c3c3c"
      dark
      class="top-nav"
    >
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>phone</v-icon>
      </v-btn>
      <v-toolbar-title>0808 23421 72 Free call</v-toolbar-title>
    </v-toolbar>
    <v-toolbar flat color="#fff" dense>
      <v-layout class="search-bar">
        <v-flex class="img-logo">
          <img src="@/assets/images/logo.png" alt="logo">
        </v-flex>
        <v-flex class="search-box">
          <v-text-field
            dense
            append-icon="search"
            height=42
            placeholder="I'm looking for a product..."
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-layout class="bar-list">
            <v-flex>Stores</v-flex>
            <v-flex>My wish list</v-flex>
            <v-flex>My account</v-flex>
            <v-flex>
              <img src="@/assets/images/bag.png" alt="shopping-bag">
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-toolbar>
     <v-divider></v-divider>
     <v-toolbar flat color="#fff" dense>
       <v-layout>
         <v-flex></v-flex>
         <v-flex>
           <v-layout>
              <v-flex>Chrismas</v-flex>
              <v-flex>New</v-flex>
              <v-flex>Sofas</v-flex>
              <v-flex>Furniture</v-flex>
              <v-flex>Decor</v-flex>
              <v-flex>Lighting</v-flex>
              <v-flex>Junior</v-flex>
              <v-flex>Styles</v-flex>
              <v-flex>Inspiration</v-flex>
              <v-flex>Pro</v-flex>
           </v-layout>
         </v-flex>
         <v-flex></v-flex>
       </v-layout>
     </v-toolbar>

     <!-- 图片swiper区 -->
     <v-layout class="product-area">
       <v-flex>
         <v-layout>
           <v-flex><div class="circular"></div></v-flex>
           <v-flex>
             <v-carousel>
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
           </v-flex>
           <v-flex></v-flex>
         </v-layout>
       </v-flex>
       <v-flex></v-flex>
     </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: () => import('@/assets/images/sofa1.png')
        },
        {
          src: () => import('@/assets/images/sofa2.png')
        },
        {
          src: () => import('@/assets/images/sofa3.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.demo > .top-nav{
  height: 40px;
  line-height: 40px;
  & > .v-toolbar__content{
    height: 100%;
  }
}
.search-bar{
  .img-logo{
    flex: 1 1 100px;
    align-self: center;
    max-width: 100px;
    margin-right: 50px;
    margin-top: 5px;
    img{
      height: 42px;
      width: 100px;
    }
  }
  .flex:nth-child(3){
    align-self: center;
  }
}
.bar-list{
  .flex{
    align-self: center;
    text-align: center;
    img{
      height: 42px;
    }
  }
}
.product-area{
  .circular{
    height: 90px;
    width: 90px;
    background: #c65b51;
    border-radius: 50%;
  }
}
</style>
