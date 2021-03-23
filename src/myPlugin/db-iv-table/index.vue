<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月11日 14:02:17
  版本：v1.0
-->
<template>
    <div class="db-iv-table">
        <Form
            ref="formInline"
            :model="formInline"
            inline
            :label-width="formLabelWidth"
            :style="{ textAlign: formAlign }"
        >
            <FormItem
                :label="item.name"
                v-for="(item, index) in formCloumns"
                :key="index"
            >
                <slot
                    :name="'form-' + item.key"
                    v-bind:scope="{ item, form: formInline }"
                >
                    <Input
                        :size="formSize"
                        type="text"
                        v-model="formInline[item.key]"
                        placeholder="请输入"
                    >
                    </Input>
                </slot>
            </FormItem>
            <FormItem>
                <slot name="formBtn" v-bind:scope="{ formInline }">
                    <Button :size="formSize" @click="onFormReset">重置</Button>
                    <Button
                        :size="formSize"
                        type="primary"
                        @click="onFormSubmit"
                        >查询</Button
                    >
                </slot>
            </FormItem>
        </Form>
        <Table
            ref="ivTable"
            :columns="tableColumns"
            :data="tableData"
            :stripe="ivTableProps.stripe"
            :border="ivTableProps.border"
            :show-header="ivTableProps.showHeader"
            :width="ivTableProps.width"
            :height="ivTableProps.height"
            :max-height="ivTableProps.maxHeight"
            :loading="ivTableProps.loading"
            :disabled-hover="ivTableProps.disabledHover"
            :highlight-row="ivTableProps.highlightRow"
            :row-class-name="ivTableProps.rowClassName"
            :size="ivTableProps.size"
            :no-data-text="ivTableProps.noDataText"
            :no-filtered-data-text="ivTableProps.noFilteredDataText"
            :draggable="ivTableProps.draggable"
            :tooltip-theme="ivTableProps.tooltipTheme"
            :tooltip-max-width="ivTableProps.tooltipMaxWidth"
            :row-key="ivTableProps.rowKey"
            :span-method="ivTableProps.spanMethod"
            :show-summary="ivTableProps.showSummary"
            :sum-text="ivTableProps.sumText"
            :summary-method="ivTableProps.summaryMethod"
            :indent-size="ivTableProps.indentSize"
            :load-data="ivTableProps.loadData"
            :update-show-children="ivTableProps.updateShowChildren"
            :context-menu="ivTableProps.contextMenu"
            :show-context-menu="ivTableProps.showContextMenu"
            @on-current-change="onCurrentChange"
            @on-select="onSelect"
            @on-select-cancel="onSelectCancel"
            @on-select-all="onSelectAll"
            @on-select-all-cancel="onSelectAllCancel"
            @on-selection-change="onSelectionChange"
            @on-sort-change="onSortChange"
            @on-filter-change="onFilterChange"
            @on-row-click="onRowClick"
            @on-row-dblclick="onRowDblclick"
            @on-cell-click="onCellClick"
            @on-expand="onExpand"
            @on-drag-drop="onDragDrop"
            @on-column-width-resize="onColumnWidthResize"
            @on-contextmenu="onContextmenu"
            @on-expand-tree="onExpandTree"
        >
            <template
                :slot="item.slot"
                v-for="item in tableColumns"
                slot-scope="scope"
            >
                <slot :name="item.slot" v-bind:scope="scope"></slot>
            </template>
            <template slot="header">
                <slot name="header"></slot>
            </template>

            <template slot="loading">
                <slot name="loading"></slot>
            </template>
            <template slot="footer">
                <slot name="footer"></slot>
            </template>
            <template slot="contextMenu">
                <slot name="contextMenu"></slot>
            </template>
        </Table>
        <Page
            :style="{
                textAlign: ivPageProps.align
            }"
            :current="ivPageProps.current"
            :total="ivPageProps.total"
            :page-size="ivPageProps.pageSize"
            :page-size-opts="ivPageProps.pageSizeOpts"
            :placement="ivPageProps.placement"
            :size="ivPageProps.size"
            :simple="ivPageProps.simple"
            :show-total="ivPageProps.showTotal"
            :show-elevator="ivPageProps.showElevator"
            :show-sizer="ivPageProps.showSizer"
            :class-name="ivPageProps.className"
            :styles="ivPageProps.styles"
            :transfer="ivPageProps.transfer"
            :prev-text="ivPageProps.prevText"
            :next-text="ivPageProps.nextText"
            :disabled="ivPageProps.disabled"
            @on-change="onPageChange"
            @on-page-size-change="onPageSizeChange"
        />
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {
        formLabelWidth:{
            type:Number,
            default:50
        },
        formAlign: {
            type: String,
            default: "left",
        },
        formSize:{
            type:String
        },
        formCloumns: {
            type: Array,
            default: () => [],
        },
        pageProps: {
            type: Object,
            default: () => {},
        },
        tableColumns: {
            type: Array,
            default: () => [],
        },
        tableProps: {
            type: Object,
            default: () => {},
        },
        tableData: {
            type: Array,
            default: () => [],
        },
    },
    components: {},
    data() {
        return {
            ivPageProps: {
                align: "right",
                current: 1,
                total: 100,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30, 40],
                placement: "bottom",
                simple: false,
                showTotal: true,
                showElevator: true,
                showSizer: true,
                transfer: false,
                disabled: false,
                // prevText:'',
                // nextText:'',
                // size:'',
                // className:'',
                // styles:{},
            },
            ivTableProps: {
                stripe: false,
                border: false,
                showHeader: true,
                loading: false,
                disabledHover: false,
                highlightRow: false,
                noDataText: "暂无数据",
                noFilteredDataText: "暂无筛选结果",
                draggable: false,
                tooltipTheme: "dark",
                tooltipMaxWidth: 300,
                rowKey: false,
                showSummary: false,
                sumText: "合计",
                indentSize: 16,
                updateShowChildren: false,
                contextMenu: false,
                showContextMenu: false,
                // loadData:function(){},
                // summaryMethod:function(){},
                // spanMethod:function(){},
                // size:'',
                // rowClassName:function(){},
                // width:'',
                // height:'',
                // maxHeight:"",
            },
            formInline: {
                user: "",
                password: "",
            },
            initFormData: {},
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        onFormReset() {
            this.formInline = JSON.parse(JSON.stringify(this.initFormData));
        },
        onFormSubmit() {
            this.$emit("form-submit", this.formInline);
        },
        exportCsv(obj) {
            this.$refs.ivTable.exportCsv(obj);
        },
        clearCurrentRow() {
            this.$refs.ivTable.clearCurrentRow(obj);
        },
        selectAll(status) {
            this.$refs.ivTable.selectAll(status);
        },
        onSelect(selection, row) {
            this.$emit("on-select", selection, row);
        },
        onSelectCancel(selection, row) {
            this.$emit("on-select-cancel", selection, row);
        },
        onSelectAll(selection) {
            this.$emit("on-select-all", selection);
        },
        onSelectAllCancel(selection) {
            this.$emit("on-select-all-cancel", selection);
        },
        onSelectionChange(selection) {
            this.$emit("on-selection-change", selection);
        },
        onSortChange(column, key, order) {
            this.$emit("on-sort-change", column, key, order);
        },
        onFilterChange(column) {
            this.$emit("on-filter-change", column);
        },
        onRowClick(row, index) {
            this.$emit("on-row-click", row, index);
        },
        onRowDblclick(selection, row) {
            this.$emit("on-row-dblclick", selection, row);
        },
        onCellClick(row, column, data, event) {
            this.$emit("on-cell-click", row, column, data, event);
        },
        onExpand(row, status) {
            this.$emit("on-expand", row, status);
        },
        onDragDrop(index1, index2) {
            this.$emit("on-drag-drop", index1, index2);
        },
        onColumnWidthResize(newWidth, oldWidth, column, event) {
            this.$emit(
                "on-column-width-resize",
                newWidth,
                oldWidth,
                column,
                event
            );
        },
        onContextmenu(row, event, position) {
            this.$emit("on-contextmenu", row, event, position);
        },
        onExpandTree(rowKey, status) {
            this.$emit("on-expand-tree", rowKey, status);
        },
        onCurrentChange(currentRow, oldCurrentRow) {
            this.$emit("on-current-change", currentRow, oldCurrentRow);
        },
        onPageChange(val) {
            this.$emit("on-page-change", val);
        },
        onPageSizeChange(val) {
            this.$emit("on-page-size-change", val);
        },
        replaceProps() {
            this.formCloumns.forEach((item) => {
                this.$set(this.formInline, item.key, item.value);
                this.initFormData = JSON.parse(JSON.stringify(this.formInline));
            });
            for (let key in this.tableProps) {
                this.ivTableProps[key] = this.tableProps[key];
            }
            for (let key in this.pageProps) {
                this.ivPageProps[key] = this.pageProps[key];
            }
        },
    },
    created() {
        this.replaceProps();
    },
    mounted() {},
};
</script> 

<style lang='less' scoped>
.db-iv-table {
    .ivu-form-item {
        margin-bottom: 10px;
    }
    .ivu-page {
        padding: 15px 20px;
    }
}
@import "./index.less";
</style>
