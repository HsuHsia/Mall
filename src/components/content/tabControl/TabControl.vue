<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === currrentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currrentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currrentIndex = index;
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 3px;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>