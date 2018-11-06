/*
 * @Author: yezi
 * @Date: 2018-11-02 08:59:59
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-06 18:30:01
 * demo页面中间的 展示图片 购买数量的组件
 */
<template>
  <!-- 图片swiper区 -->
  <v-layout class="product-area">
    <v-flex class="left-part">
      <!-- 左侧图片展示区 -->
      <v-layout column >
        <v-flex>
          <div class="circular">
            <span>new</span>
          </div>
        </v-flex>
        <v-flex>
          <v-carousel
            :cycle="false"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            />
          </v-carousel>
        </v-flex>
        <v-flex>
          <img src="/images/business-brand.png" 
alt="business-brand">
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex class="middle-part"/>
    <v-flex class="right-part">
      <!-- 右侧商品价格 信息 -->
      <v-layout column>
        <v-flex class="product-name">
          <p>JULIAN</p>
          <p>Mustard Yellow 3-Seater Sofa Bed, mattress 14 cm</p>
          <p><a href="">Find out more</a></p>
        </v-flex>
        <v-flex class="product-price">£1,049.00</v-flex>
        <v-flex>
          <p>Available in a range of design:</p>
          <v-select
            :items="selectItems"
            label="Outline style"
            outline
            height="20"
          />
        </v-flex>
        <v-flex>
          <p>color: </p>
          <v-layout>
            <v-flex v-for="(item, index) in smallImg" 
:key="index">
              <img :src="item.src" 
alt="sofa color">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-select
            :items="selectCounts"
            label="1"
            outline
            height="20"
            style="width: 150px;display: inlineBlock"
          />
          <v-btn color="#3c3c3b">Add To Basket</v-btn>
        </v-flex>
        <v-flex>
          <p>Add to my wish list</p>
        </v-flex>
        <v-flex>
          <span>Ships within 4 weeks</span>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'PicInfoPanel',
  data() {
    return {
      items: [
        {
          src: '/images/sofa1.png'
        },
        {
          src: '/images/sofa2.png'
        },
        {
          src: '/images/sofa3.png'
        }
      ],
      smallImg: [
        {
          src: '/images/color1.png'
        },
        {
          src: '/images/color2.png'
        },
        {
          src: '/images/color3.png'
        }
      ],
      selectItems: ['A', 'B', 'C']
    }
  },
  computed: {
    selectCounts() {
      let arr = [],
        i = 1
      while (i <= 30) {
        arr.push(i)
        i++
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
@import './demo.scss';

.product-area {
  margin: 20px 30px;
  .left-part {
    flex: 1 1 50%;
    .flex {
      margin-bottom: 15px;
      text-align: center;
      img {
        width: 200px;
      }
    }
  }
  .middle-part {
    flex: 1 1 10%;
  }
  .right-part {
    flex: 1 1 35%;
    .product-name {
      p:nth-child(1) {
        @include font(20px, 600);
      }
      p:nth-child(2) {
        @include font(20px, 600);
      }
    }
    .product-price {
      @include font(20px, 600);
    }
    .v-input__slot {
      width: 150px;
    }
  }
  .circular {
    position: relative;
    height: 90px;
    width: 90px;
    background: #c65b51;
    border-radius: 50%;
    margin-left: 40px;
    & > span {
      position: absolute;
      color: #fff;
      font-weight: 700;
      font-size: 22px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      top: 32%;
      left: 25%;
    }
  }
}
</style>
