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
BScroll.use(ObserveDOM);
export default {
  data() {
    return {
      scroll: null,
      message: "啊啊啊啊",
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
    });
  },
  methods: {
    backTop(x = 0, y = 0, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>