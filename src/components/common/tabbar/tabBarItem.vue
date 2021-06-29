<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },

  computed: {
    isactive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => {});
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
}

.tab-bar-item img {
  width: 24px;
  margin-top: 3px;
}
</style>