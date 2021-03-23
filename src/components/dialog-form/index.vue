<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月11日 17:43:02
  版本：v1.0
-->
<template>
    <div>
        <h1>ElementUI</h1>
        <el-button @click="onOpenDialog">打开弹窗</el-button>
        <dbElDialogForm ref="dbDialog"></dbElDialogForm>
    </div>
</template>

<script>
import dbElDialogForm from "../../myPlugin/db-el-dialog-form/index.vue";
export default {
    name: "demo",
    props: {},
    components: { dbElDialogForm },
    data() {
        return {
            elDialogVisible:false,
            formItem: {
                input: "",
                select: "",
                radio: "male",
                checkbox: [],
                switch: true,
                date: "",
                time: "",
                slider: [20, 50],
                textarea: "",
            },
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        onOpenDialog(){
            this.$refs.dbDialog.openDialog()
        }
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
