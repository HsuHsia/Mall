<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
BScroll.use(ObserveDOM);
BScroll.use(ObserveImage);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    // 监听上拉时间
    this.scroll.on("pullingUp", () => {
      this.$emit("pullUpLoad");
    });
  },
  methods: {
    backTop(x = 0, y = 0, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>