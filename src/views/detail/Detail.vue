<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";

import { getDetaildata } from "network/detail";
export default {
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    // 根据商品iid请求详情页数据
    getDetaildata(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.data.result.itemInfo.topImages;
    });
  },
};
</script>

<style>
</style>