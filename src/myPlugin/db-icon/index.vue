<template>
  <span class="db-icon-container">
    <i :class="iconClass" :style="{fontSize:size+'px',color:iconColor}"></i>
  </span>
</template>
<script>
export default {
  name: "db-icon",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: "#000",
    },
    custom: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return this.custom
        ? "iconfont " + this.custom
        : "iconfont " + this.type;
    },
    iconColor() {
      if (this.state) {
        let colorValue = "";
        switch (this.state) {
          case "success":
            colorValue = "#19BE6B";
            break;
          case "primary":
            colorValue = "#2D8CF0";
            break;
          case "warning":
            colorValue = "#FF9900";
            break;
          case "error":
            colorValue = "#ED4014";
            break;
          case "info":
            colorValue = "#9DA0A4";
            break;
        }
        return colorValue;
      }
      return this.color;
    },
  },
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>