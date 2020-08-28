<template>
  <div class="app">
    <h3>ElementUI+IviewUI：实践vue自定义组件</h3>
    <p>自定义图标</p>
    <db-icon type="db-user" state="success" size="50"></db-icon>
    <db-icon type="db-user" state="warning" size="40"></db-icon>
    <db-icon type="db-user" state="error" size="30"></db-icon>
    <db-icon type="db-user" state="info"></db-icon>
    <db-icon type="db-user" size="30" color="#EA00FF" custom="icondb-phone"></db-icon>
    <hr />
    <p>自定义按钮</p>
    <db-button></db-button>
    <db-button type="primary" size="lg" round disabled></db-button>
    <db-button type="success" size="middle" icon="db-user" iconSize="16" iconColor="#fff">成功按钮</db-button>
    <db-button type="warning" size="small" round></db-button>
    <db-button type="error"></db-button>
    <hr />
    <p>消息提示</p>
    <db-button @click.native="openMessage('success')">成功信息</db-button>
    <db-button @click.native="openMessage('warning')">警告信息</db-button>
    <db-button @click.native="openMessage('error')">失败信息</db-button>
  </div>
</template>

<script>
import dbIcon from "./myPlugin/db-icon/index.vue";
import dbButton from "./myPlugin/db-button/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    dbIcon,
    dbButton,
  },
  methods: {
    openMessage(type) {
      this.$dbMessage[type]({
        content: "这是"+type+"信息",
      });
    },
  },
  created() {},
};
</script>

<style scoped>
.app {
  height: 100%;
  overflow-y: auto;
}
h3 {
  text-align: center;
}
</style>
