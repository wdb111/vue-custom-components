<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月10日 12:39:23
  版本：v1.0
-->
<template>
    <div class="db-batch-add">
        <Modal v-model="modal" title="默认标题" :width="modalWidth">
            <div class="form-box">
                <div class="title">
                    <div>ID</div>
                    <div v-for="(item, index) in titleList" :key="index">
                        {{ item.title }}
                    </div>
                    <div>操作</div>
                </div>
                <div class="content">
                    <div class="item" v-for="(row, index) in dataList">
                        <div>{{ index + 1 }}</div>
                        <div v-for="(val, key) in row" :key="key">
                            <slot :name="key" v-bind:scope="row">
                                <Input
                                    v-model="row[key]"
                                    placeholder="请输入"
                                />
                            </slot>
                        </div>
                        <div>
                            <Icon
                                v-if="index === 0"
                                type="md-add-circle"
                                @click="batchAdd"
                            />
                            <Icon
                                v-else
                                type="md-remove-circle"
                                @click="deleteRow(index)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer" :style="{ textAlign: footerAlign }">
                <Button v-if="cancelDoc === 'left'" @click="modal = false"
                    >取消</Button
                >
                <Button @click="onSaveForm" type="primary">确定</Button>
                <Button v-if="cancelDoc === 'right'" @click="modal = false"
                    >取消</Button
                >
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
        cancelDoc: {
            type: String,
            default: "left",
        },
        footerAlign: {
            type: String,
            default: "center",
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
        },
        openTheDialog() {
            this.modal = true;
        },
        batchAdd() {
            this.dataList.push(this.formData);
        },
        deleteRow(index) {
            this.dataList.splice(index, 1);
        },
    },
    created() {
        this.batchAdd();
    },
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
</style>
<style lang='less' scoped>
@import "./index.less";
</style>
