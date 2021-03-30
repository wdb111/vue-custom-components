<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月10日 12:39:23
  版本：v1.0
-->
<template>
    <div class="db-batch-add">
        <Modal v-model="modal" :title="modalTitle" :width="modalWidth">
            <div class="form-box">
                <div class="title">
                    <div>ID</div>
                    <div v-for="(item, index) in titleList" :key="index">
                        {{ item.title }}
                    </div>
                    <div>操作</div>
                </div>
                <div class="content">
                    <div
                        class="item"
                        v-for="(row, index) in dataList"
                        :key="index"
                    >
                        <div>{{ index + 1 }}</div>
                        <div v-for="(citem, cindex) in titleList" :key="cindex">
                            <slot :name="citem.slot" v-bind:scope="row">
                                <Input
                                    clearable
                                    v-model="row[citem.key]"
                                    placeholder="请输入"
                                />
                            </slot>
                        </div>
                        <div>
                            <Icon type="md-trash" @click="onDeleteRow(index)" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="batch-add-footer" slot="footer">
                <span class="add-row" @click="onBatchAdd">
                    <Icon type="md-add-circle" @click="onBatchAdd" />
                    <span>添加行</span>
                </span>
                <Button @click="onSaveForm" type="primary">保 存</Button>
            </div>
        </Modal>
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
    computed: {},
    watch: {},
    methods: {
        onSaveForm() {
            this.$emit("on-save-form", this.dataList);
            this.modal = false;
        },
        openTheDialog() {
            this.dataList = [];
            this.modal = true;
        },
        onBatchAdd() {
            let obj = JSON.parse(JSON.stringify(this.formData));
            this.dataList.push(obj);
        },
        onDeleteRow(index) {
            this.dataList.splice(index, 1);
        },
    },
    created() {},
    mounted() {},
};
</script> 
<style lang='less'>
.form-box {
    background-color: #eee;

    .title,
    .item {
        display: flex;
        justify-content: space-between;

        div {
            width: 170px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #2c344d;
            font-weight: 600;
        }

        & > div:first-child,
        & > div:last-child {
            width: 60px;
        }
    }

    .content {
        height: 515px;
        overflow-y: auto;

        .item {
            margin: 10px 0;

            div {
                font-size: 14px;
                font-weight: 100;
            }

            & > div:last-child {
                font-size: 24px;
                cursor: pointer;

                i:hover {
                    color: rgb(48, 112, 231);
                }
            }
        }
    }
}
.batch-add-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    .add-row {
        margin-right: 20px;
        width: 120px;
        height: 36px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px dotted #2d8cf0;
        border-radius: 50px;
        cursor: pointer;
        &:hover {
            background-color: rgba(45, 140, 240, 0.1);
            border-style: solid;
        }
        i {
            font-size: 24px;
            color: #2d8cf0;
        }
    }
}
</style>
<style lang='less' scoped>
@import "./index.less";
</style>
