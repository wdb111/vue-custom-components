<!--
  功能：功能描述
  作者：王代彬
  时间：2021年07月13日 10:19:35
  版本：v1.0
-->
<template>
    <div>
        <el-button @click="open">选择图标</el-button>
        <div>
            <span>所选图标：</span>
            <i :class="'iconfont ' + obj.icon"></i>
        </div>
        <el-dialog
            title="图标库"
            :visible.sync="dialogVisible"
            width="60%"
            custom-class="db-icon-selecter"
        >
            <template slot="title">
                <div class="title">
                    <h2>图标库</h2>
                    <div>
                        <el-input
                            placeholder="请输入图标名称"
                            v-model="iconValue"
                            class="input-with-select"
                            size="small"
                        >
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                            ></el-button>
                        </el-input>
                    </div>
                </div>
            </template>
            <IconSelecter :searchValue="iconValue" @on-save-icon="onSaveIcon"></IconSelecter>
        </el-dialog>
    </div>
</template>

<script>
import IconSelecter from "../../myPlugin/db-icon-seleter/index.vue";
export default {
    name: "dbIconSelecter",
    props: {},
    components: {
        IconSelecter,
    },
    data() {
        return {
            obj: {
                icon: "icon-bianjishenqing",
            },
            iconValue: "",
            dialogVisible: false,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        open() {
            this.dialogVisible = true;
        },
        onSaveIcon(val) {
            this.obj.icon = val;
            this.dialogVisible = false;
        },
    },
    created() {},
    mounted() {},
};
</script> 
<style lang="less">
    .db-icon-selecter {
    .el-dialog__header {
        padding-top: 10px;
        border-bottom: 1px solid #eee;
        .el-dialog__headerbtn {
            top: 15px;
        }
    }
    .el-dialog__body {
        height: 600px;
        overflow-y: auto;
        padding: 20px;
    }
    .title {
        display: flex;
        .input-with-select {
            margin-left: 50px;
            width: 300px;
            .el-input-group__prepend {
                background-color: #fff;
            }
        }
    }
}
</style>
<style lang='less' scoped>
.iconfont {
    font-size: 28px;
}
</style>
