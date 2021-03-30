<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月17日 16:22:13
  版本：v1.0
-->
<template>
    <div>
        <h1>IviewUI</h1>
        <Button type="primary" @click="openModal">打开批量添加弹窗</Button>
        <DbIveBatchAdd
            modalTitle="批量添加内容"
            modalWidth="90%"
            ref="batchAdd"
            :formData="formData"
            :titleList="titleList"
            @on-save-form="onSaveForm"
        >
            <!-- 插槽使用 -->
            <template v-slot:sex="{ scope }">
                <i-switch v-model="scope.sex" true-value='1' false-value='0' false-color="#ff4949">
                    <span slot="open">男</span>
                    <span slot="close">女</span>
                </i-switch>
            </template>
        </DbIveBatchAdd>
        <br />
        <hr />
    </div>
</template>

<script>
import DbIveBatchAdd from "../../myPlugin/db-iv-batch-add/index";
export default {
    name: "BatchAdd",
    props: {},
    components: { DbIveBatchAdd },
    data() {
        return {
            value4: 0,
            titleList: [
                {
                    title: "姓名",
                    key:'name',
                },
                {
                    title: "年龄",
                    key:'age',
                },
                {
                    title: "身高",
                    key:'heigh',
                },
                {
                    title: "性别",
                    slot: "sex",
                },
                {
                    title: "地址",
                    key:'dress',
                },
            ],
            formData: {
                name: "",
                age: "",
                heigh: "",
                sex: "",
                dress: "",
            },
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        onSaveForm(form) {
            console.log(form);
        },
        openModal() {
            this.$refs.batchAdd.openTheDialog();
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
