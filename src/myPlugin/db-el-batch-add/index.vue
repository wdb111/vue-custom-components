<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月10日 12:39:23
  版本：v1.0
-->
<template>
    <div
        class="eltable-batch-add"
        id="el-batch-add-id"
        :style="{ height: filterHeight(height) }"
    >
        <table cellspacing="0">
            <thead>
                <tr>
                    <template v-for="(item, index) in titleList">
                        <th
                            :class="[
                                item.fixed ? 'th-fixed-' + item.fixed : '',
                            ]"
                            :style="{
                                width: filterWidth(item, titleList),
                            }"
                            :key="index"
                        >
                            {{ item.title }}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in dataList" :key="index">
                    <template v-for="(citem, cindex) in titleList">
                        <td
                            :class="[
                                citem.fixed ? 'td-fixed-' + citem.fixed : '',
                            ]"
                            :style="{
                                width: filterWidth(citem, titleList),
                            }"
                            :key="cindex"
                        >
                            <slot :name="citem.slot" v-bind="{ row, index }">
                                <span v-if="citem.type === 'index'">
                                    {{ index + 1 }}
                                </span>
                                <el-input
                                    v-else
                                    clearable
                                    v-model="row[citem.key]"
                                    placeholder="请输入"
                                ></el-input>
                            </slot>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "dbBatchAdd",
    props: {
        height: {
            type: [String, Number],
            default: 500,
        },
        formData: {
            type: Object,
            default: () => {},
        },
        titleList: {
            type: Array,
            default: () => [],
        },
    },
    components: {},
    data() {
        return {
            dataList: [],
        };
    },
    filters: {},
    computed: {
        //高度
        filterHeight() {
            return (val) => {
                return val.toString().includes("px") ? val : val + "px";
            };
        },
        //设置元素宽度
        filterWidth() {
            return (item, list) => {
                if (item.width) {
                    return item.width + "px";
                }
                let allNum = list.length;
                let arr = list.filter((l) => {
                    return l.width !== undefined;
                });
                let num = allNum - arr.length;
                let kownWidth = 0;
                arr.forEach((a) => {
                    kownWidth += a.width;
                });
                let width = `calc((100% - ${kownWidth}px)/${num} - 20px)`;
                return width;
            };
        },
    },
    watch: {},
    methods: {
        //添加行
        onBatchAdd() {
            let obj = JSON.parse(JSON.stringify(this.formData));
            this.dataList.push(obj);
            this.$nextTick(() => {
                let div = document.getElementById("el-batch-add-id");
                div.scrollTop = div.scrollHeight;
            });
        },
        //删除行
        onDeleteRow(index) {
            this.dataList.splice(index, 1);
        },
        //保存数据
        onSaveForm() {
            return this.dataList;
        },
    },
    created() {},
    mounted() {},
};
</script> 
<style lang='less' scoped>
@import "./index.less";
</style>
