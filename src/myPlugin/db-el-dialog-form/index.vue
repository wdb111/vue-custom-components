<template>
    <el-dialog
        :visible.sync="dialogVisible"
        :title="title"
        :width="width"
        :fullscreen="fullscreen"
        :top="top"
        :modal="modal"
        :modal-append-to-body="modalAppendToBody"
        :append-to-body="appendToBody"
        :lock-scroll="lockScroll"
        :custom-class="customClass"
        :close-on-click-modal="closeOnClickModal"
        :close-on-press-escape="closeOnPressEscape"
        :show-close="showClose"
        :before-close="beforeClose"
        :center="center"
        :destroy-on-close="destroyOnClose"
        @close="close"
    >
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="onSave">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    name: "dbElDialogForm",
    props: {},
    data() {
        return {
            dialogProps:{
                title:'',
                width:'50%',
                fullscreen:false,
                top:'15vh',
                modal:true,
                modalAppendToBody:true,
                appendToBody:false,
                lockScroll:true,
                customClass:'',
                closeOnClickModal:true,
                closeOnPressEscape:true,
                showClose:true,
                // beforeClose:(done)=>{},
                center:false,
                destroyOnClose:false
            },
            dialogVisible: false,
            formLabelWidth: "80",
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: "",
            },
        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        },
        onSave() {},
        onCancel() {},
        close() {
            console.log(666);
        },
        handleClose(done) {
            // this.$confirm("确认关闭？")
            //     .then((_) => {
            done();
            //     })
            //     .catch((_) => {});
        },
    },
    components: {},
    computed: {},
    watch: {},
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>