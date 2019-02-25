<template>
  <div class="msite">
    <!--首页头部-->
    <Header :title="address.name">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
      <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
      </span>

    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys) in categoryArr">
            <a href="javascript:" class="link_to_food" v-for="(c) in categorys">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    components: {
      ShopList
    },
    mounted () {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address','categorys']),

      //根据categorys需要生成一个2维数组，小数组中的length最大值为8

      categoryArr () {
        const {categorys} = this
        let arr = []
        let sArr = []     //length最大值为8
        categorys.forEach(category=>{
          if (sArr.length===0){
            arr.push(sArr)
          }
          sArr.push(category)
          if (sArr.length===8){
            sArr=[]
          }
        })
        return arr
      }
    },
    watch:{
      categorys(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true, // 循环模式
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          .link_to_food
            width 25%

            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        > span.swiper-pagination-bullet-active
          background #02a774

  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff

    .shop_header
      padding 10px 10px 0

      .shop_icon
        margin-left 5px
        color #999

      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
