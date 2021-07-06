<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <div class="goods-title">{{ goodsItem.title }}</div>
      <span class="goods-price">{{ goodsItem.price }}</span>
      <span class="goods-collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid).catch((err) => {});
    },
  },
};
</script>

<style>
.goods-item {
  padding-bottom: 5px;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  text-align: center;
}

.goods-title {
  /* 文字溢出用省略号表示 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}

.goods-price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-collect {
  position: relative;
}

.goods-collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>