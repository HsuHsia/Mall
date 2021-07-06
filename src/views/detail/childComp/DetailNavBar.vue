<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titles-item"
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },

  methods: {
    backClick() {
      this.$router.back();
    },

    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.titles {
  display: flex;
}

.titles-item {
  flex: 1;
  font-size: 13px;
}

.back img {
  margin-top: 13px;
  width: 30%;
}

.active {
  color: var(--color-high-text);
}
</style>