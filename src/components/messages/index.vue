<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月11日 13:38:04
  版本：v1.0
-->
<template>
    <div>
        <db-button @click.native="openMessage('success')">成功信息</db-button>
        <db-button @click.native="openMessage('warning')">警告信息</db-button>
        <db-button @click.native="openMessage('error')">失败信息</db-button>
    </div>
</template>

<script>
import dbButton from "../../myPlugin/db-button/index.vue";
export default {
    name: "dbMessage",
    props: {},
    components: { dbButton },
    data() {
        return {};
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        openMessage(type) {
            this.$dbMessage[type]({
                content: "这是" + type + "信息",
            });
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
