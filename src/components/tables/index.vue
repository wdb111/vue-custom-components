<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月11日 13:28:01
  版本：v1.0
-->
<template>
    <div>
        <h1>ElementUI</h1>
        <db-el-table
            formSize="medium"
            :formCloumns="formCloumns"
            formAlign="right"
            @form-submit="onFormSubmit"
            :columns="columns"
            :tableData="tableData"
            :tableProps="tableProps"
            :paginationProps="paginationProps"
            @size-change="handleSizeChange"
            @page-current-change="handleCurrentChange"
        >
            <!-- 表单插槽 -->
            <template slot-scope="{ scope }" slot="form-sex">
                <el-switch
                    v-model="scope.form.sex"
                >
                </el-switch>
            </template>
            <template slot-scope="{ scope }" slot="form-age">
                <el-input-number
                    v-model="scope.form.age"
                    :min="1"
                ></el-input-number>
            </template>
            <!-- <template slot-scope="{ scope }" slot="formBtn">
                <el-button @click="onClickBtn(scope)">自定义按钮</el-button>
            </template> -->
            <!-- 表格插槽 -->
            <template slot-scope="scope" slot="table-header-date">
                <span @click="clickHeader(scope)">自定义表头-日期</span>
            </template>
            <!-- slot="name" 指定某一列使用插槽 -->
            <template slot-scope="scope" slot="table-name">
                <span @click="clickHeader(scope)">自定义列-姓名</span>
            </template>
            <!-- <template slot-scope="scope" slot="endRow">
                <span @click="clickHeader(scope)">最后一行</span>
            </template> -->
        </db-el-table>
        <hr />
        <h1>IviewUI</h1>
        <db-iv-table
            formAlign="right"
            :formCloumns="ivFormCloumns"
            @form-submit="onIvFormSubmit"
            :tableData="ivTableData"
            :tableColumns="ivTableColumns"
            :pageProps="ivPageProps"
            @on-page-change="onPageChange"
            @on-page-size-change="onPageSizeChange"
            :tableProps="ivTableProps"
        >
            <template slot="age">
                <span>自定义列-年龄</span>
            </template>
            <!-- 表单插槽 -->
            <template slot-scope="{ scope }" slot="form-sex">
                <i-switch v-model="scope.form.sex"> </i-switch>
            </template>
            <template slot-scope="{ scope }" slot="form-age">
                <InputNumber v-model="scope.form.age" :min="1"></InputNumber>
            </template>
            <!-- <template slot-scope="{ scope }" slot="formBtn">
                <el-button @click="onClickBtn(scope)">自定义按钮</el-button>
            </template> -->
        </db-iv-table>
    </div>
</template>

<script>
import dbElTable from "../../myPlugin/db-el-table/index.vue";
import dbIvTable from "../../myPlugin/db-iv-table/index.vue";
export default {
    name: "demo",
    props: {},
    components: { dbElTable, dbIvTable },
    data() {
        return {
            formCloumns: [
                {
                    name: "姓名",
                    key: "user",
                    value: "",
                },
                {
                    name: "年龄",
                    key: "age",
                    value: 0,
                },
                {
                    name: "性别",
                    key: "sex",
                    value: false,
                },
            ],
            tableProps: {
                border: true, //属性为小驼峰写法
                // height: 200,
            },
            paginationProps: {
                textAlign: "right",
                pageSizes: [10, 20, 50, 100], //属性为小驼峰写法
                pageSize: 20,
                total: 50,
            },
            columns: [
                {
                    label: "日期",
                    prop: "date",
                },
                {
                    label: "姓名",
                    prop: "name",
                },
                {
                    label: "地址",
                    prop: "address",
                },
            ],
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            ivFormCloumns: [
                {
                    name: "姓名",
                    key: "user",
                    value: "",
                },
                {
                    name: "年龄",
                    key: "age",
                    value: 0,
                },
                {
                    name: "性别",
                    key: "sex",
                    value: false,
                },
            ],
            ivTableColumns: [
                {
                    title: "Name",
                    key: "name",
                },
                {
                    title: "Age",
                    slot: "age",
                },
                {
                    title: "Address",
                    key: "address",
                },
            ],
            ivTableData: [
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03",
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01",
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02",
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04",
                },
            ],
            ivTableProps: {
                stripe: true,
                border: true,
            },
            ivPageProps: {
                current: 1,
                total: 50,
                pageSize: 10,
                pageSizeOpts: [10, 20, 50, 100],
            },
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        onClickBtn(scope) {
            console.log(scope);
        },
        onFormSubmit(formData) {
            console.log(formData);
        },
        onIvFormSubmit(formData) {
            console.log(formData);
        },
        clickHeader(scope) {
            console.log(scope);
        },

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        onPageChange(val) {
            console.log(`每页 ${val} 条`);
        },
        onPageSizeChange(val) {
            console.log(`当前页: ${val}`);
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
