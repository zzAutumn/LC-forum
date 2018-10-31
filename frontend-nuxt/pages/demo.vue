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
            single-line
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
  </div>
</template>

<script>
export default {

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
</style>
