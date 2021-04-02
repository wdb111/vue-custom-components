<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月10日 12:39:23
  版本：v1.0
-->
<template>
    <div class="db-el-batch-add">
        <el-dialog
            custom-class="el-datch-modal"
            :visible.sync="modal"
            :title="modalTitle"
            :width="modalWidth"
        >
            <div class="form-body">
                <div class="form-box">
                    <div class="title">
                        <div
                            class="item-div"
                            :style="{ width: filterWidth(item, titleList) }"
                            v-for="(item, index) in titleList"
                            :key="index"
                        >
                            {{ item.title }}
                        </div>
                    </div>
                    <div class="content">
                        <div
                            class="item"
                            v-for="(row, index) in dataList"
                            :key="index"
                        >
                            <div
                                class="item-div"
                                :style="{
                                    width: filterWidth(citem, titleList),
                                }"
                                v-for="(citem, cindex) in titleList"
                                :key="cindex"
                            >
                                <slot
                                    :name="citem.slot"
                                    v-bind="{ row, index }"
                                >
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="batch-add-footer" slot="footer">
                <span class="add-row" @click="onBatchAdd">
                    <i class="el-icon-circle-plus" @click="onBatchAdd"></i>
                    <span>添加行</span>
                </span>
                <el-button @click="onSaveForm" type="primary">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "dbBatchAdd",
    props: {
        modalWidth: {
            type: [String, Number],
            default: "60%",
        },
        modalTitle: {
            type: String,
            default: "批量添加",
        },
        cancelDoc: {
            type: String,
            default: "left",
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
            modal: false,
            dataList: [],
        };
    },
    filters: {},
    computed: {
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
        //保存数据
        onSaveForm() {
            this.$emit("on-save-form", this.dataList);
            this.modal = false;
        },
        //打开弹窗
        openTheDialog() {
            this.dataList = [];
            this.modal = true;
        },
        //添加行
        onBatchAdd() {
            let obj = JSON.parse(JSON.stringify(this.formData));
            this.dataList.push(obj);
        },
        //删除行
        onDeleteRow(index) {
            this.dataList.splice(index, 1);
        },
    },
    created() {},
    mounted() {},
};
</script> 
<style lang='less'>
.el-datch-modal {
    .el-dialog__body {
        padding: 0;
    }
}
</style>
<style lang='less' scoped>
@import "./index.less";
</style>
