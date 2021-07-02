<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll">
      <ul>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature></feature>
        <tab-control
          :title="['流行', '新款', '精选']"
          class="tab-control"
          @tabClick="tabClick"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </ul>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComp/HomeSwiper";
import RecommendView from "./childComp/RecommendView";
import Feature from "./childComp/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    HomeSwiper,
    RecommendView,
    Feature,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // 组件创建完成后立即请求数据
  created() {
    //调用methods中的getHomeMultidata方法来请求数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    backClick() {
      this.$refs.scroll.backTop();
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 9;
}

#home {
  padding-top: 44px;
  /* vh是视口高度 */
  height: 100vh;
  position: relative;
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: aqua;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 48px;
  right: 0;
  left: 0;
}
</style>