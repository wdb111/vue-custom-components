<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月11日 13:06:49
  版本：v1.0
-->
<template>
    <div>
        <p>自定义图标</p>
        <db-icon type="db-user" state="success" size="50"></db-icon>
        <db-icon type="db-user" state="warning" size="40"></db-icon>
        <db-icon type="db-user" state="error" size="30"></db-icon>
        <db-icon type="db-user" state="info"></db-icon>
        <db-icon
            type="db-user"
            size="30"
            color="#EA00FF"
            custom="icondb-phone"
        ></db-icon>
    </div>
</template>

<script>
import dbIcon from "../../myPlugin/db-icon/index.vue";
export default {
    name: "dbIco",
    props: {},
    components: {
        dbIcon
    },
    data() {
        return {};
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
