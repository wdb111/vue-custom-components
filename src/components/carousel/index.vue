<!--
  功能：轮播图
  作者：王代彬
  时间：2021年07月09日 14:51:30
  版本：v1.0
-->
<template>
    <div>
        <h1>轮播</h1>
        <dbCarousel></dbCarousel>
    </div>
</template>

<script>
import dbCarousel from "../../myPlugin/db-carousel/index.vue";
export default {
    name: "Carousel",
    props: {},
    components: { dbCarousel },
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
