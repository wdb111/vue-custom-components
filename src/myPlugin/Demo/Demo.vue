<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'wdb-npm-practice',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: {
      propData: {
        type: String,
        default: '我是默认值'
      }
    }
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>


