<template>
  <div class="echojoy-message" :class="type ? `echojoy-message--${type}` : ''">{{content}}</div>
</template>
<script>
export default {
  name: "EchojoyMessage",
  data() {
    return {
      type: "",
      content: "这是一条提示信息",
      duration: 3000,
    };
  },
  mounted() {
    setTimeout(() => {
      // 3s 后通过父级移除子元素的方式来移除该组件实例和 DOM 节点
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }, this.duration);
  },
};
</script>
<style lang="less" scoped>
.echojoy-message {
  min-width: 380px;
  text-align: center;
  position: fixed;
  top: 20px;
  left: 50%;
  padding: 15px 15px 15px 20px;
  transform: translateX(-50%);
  color: #fff;
  z-index: 9999;
  background: red;
  border-radius: 4px;
  opacity: 1;
  //   transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  animation: myfirst 0.4s;
  &--error {
    background: #ed4014;
  }
  &--success {
    background: #19be6b;
  }
  &--warning {
    background: #ff9900;
  }
}
@keyframes myfirst {
  from {
    top: 0;
  }
  to {
    top: 20px;
  }
}
</style>