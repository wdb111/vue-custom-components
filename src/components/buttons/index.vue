<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月11日 13:27:52
  版本：v1.0
-->
<template>
    <div>
        <db-button></db-button>
        <db-button type="primary" size="lg" round disabled></db-button>
        <db-button
            type="success"
            size="middle"
            icon="db-user"
            iconSize="16"
            iconColor="#fff"
            >成功按钮</db-button
        >
        <db-button type="warning" size="small" round></db-button>
        <db-button type="error"></db-button>
    </div>
</template>

<script>
import dbButton from "../../myPlugin/db-button/index.vue";
export default {
    name: "demo",
    props: {},
    components: {dbButton},
    data() {
        return {};
    },
    filters: {},
    computed: {
        
    },
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
