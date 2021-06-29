<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar",
};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  font-size: 14px;

  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.2);
}
</style>