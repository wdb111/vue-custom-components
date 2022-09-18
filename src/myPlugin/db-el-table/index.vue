<!--
  功能：功能描述
  作者：王代彬
  时间：2021年03月10日 12:39:23
  版本：v1.0
-->
<template>
    <div class="db-el-table">
        <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            :style="{ textAlign: formAlign }"
        >
            <el-form-item
                :label="item.name"
                v-for="(item, index) in formCloumns"
                :key="index"
            >
                <slot
                    :name="'form-' + item.key"
                    v-bind:scope="{ item, form: formInline }"
                >
                    <el-input
                        :size="formSize"
                        v-model="formInline[item.key]"
                        placeholder="请输入"
                    ></el-input>
                </slot>
            </el-form-item>
            <el-form-item>
                <slot name="formBtn" v-bind:scope="{ formInline }">
                    <el-button :size="formSize" @click="onFormReset"
                    >重置
                    </el-button
                    >
                    <el-button
                        :size="formSize"
                        type="primary"
                        @click="onFormSubmit"
                    >查询
                    </el-button
                    >
                </slot>
            </el-form-item>
        </el-form>
        <el-table
            ref="tableRef"
            :data="tableData"
            v-bind="dbTableProps"
            style="width: 100%"
            @select="select"
            @select-all="selectAll"
            @selection-change="selectionChange"
            @cell-mouse-enter="cellMouseEnter"
            @cell-mouse-leave="cellMouseLeave"
            @cell-click="cellClick"
            @cell-dblclick="cellDblclick"
            @row-click="rowClick"
            @row-contextmenu="rowContextmenu"
            @row-dblclick="rowDblclick"
            @header-click="headerClick"
            @header-contextmenu="headerContextmenu"
            @sort-change="sortChange"
            @filter-change="filterChange"
            @current-change="tableCurrentChange"
            @header-dragend="headerDragend"
            @expand-change="expandChange"
        >
            <el-table-column
                v-for="(item, index) in columns"
                :key="index"
                v-bind="item"
            >
                <template slot="header" slot-scope="scope">
                    <slot
                        :name="'table-header-' + item.prop"
                        v-bind:scope="scope"
                    >
                        <span>{{ item.label }}</span>
                    </slot>
                </template>
                <template slot-scope="scope">
                    <slot :name="'table-' + item.prop" v-bind:scope="scope">
                        <span>{{ scope.row[item.prop] }}</span>
                    </slot>
                </template>
            </el-table-column>
            <template slot="append">
                <slot name="endRow"></slot>
            </template>
        </el-table>
        <el-pagination
            :style="{ textAlign: dbPaginationProps.textAlign }"
            v-bind="dbPaginationProps"
            @size-change="handleSizeChange"
            @current-change="pageCurrentChange"
            @prev-click="prevClick"
            @next-click="nextClick"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: "dbElTable",
    props: {
        formSize: {
            type: String,
        },
        formCloumns: {
            type: Array,
            default: () => [],
        },
        formAlign: {
            type: String,
            default: "left",
        },
        tableProps: {
            type: Object,
            default: () => {
            },
        },
        paginationProps: {
            type: Object,
            default: () => {
            },
        },
        columns: {
            type: Array,
            default: () => [],
        },
        tableData: {
            type: Array,
            default: () => [],
        },
    },
    components: {},
    data() {
        return {
            formInline: {},
            dbPaginationProps: {
                textAlign: "left",
                small: false,
                background: false,
                pageSize: 10,
                total: 100,
                pagerCount: 7,
                currentPage: 1,
                layout: "total, sizes, prev, pager, next, jumper",
                pageSizes: [100, 200, 300, 400],
                disabled: false,
                // pageCount:0,//注释掉的表示没有默认值
                // popperClass:'',
                // prevText:'',
                // nextText:'',
                // hideOnSinglePage:false
            },
            dbTableProps: {
                stripe: false,
                border: false,
                fit: true,
                showHeader: true,
                highlightCurrentRow: true,
                emptyText: "暂无数据",
                defaultExpandAll: false,
                defaultSort: {
                    order: "ascending",
                },
                showSummary: false,
                sumText: "合计",
                selectOnIndeterminate: true,
                indent: 16,
                treeProps: {hasChildren: "hasChildren", children: "children"},
                // height: "",//注释掉的表示没有默认值
                // maxHeight: "",
                // size: "",
                // currentRowKey: "",
                // rowClassnName: "",
                // rowStyle: "",
                // cellClassName: "",
                // cellStyle: "",
                // headerRowClassName: "",
                // headerRowStyle: "",
                // headerCellClassName: "",
                // headerCellStyle: "",
                // rowKey: "",
                // expandRowKeys: "",
                // tooltipEffect: "",
                // summaryMethod: "",
                // spanMethod: "",
                // lazy: "",
                // load: "",
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
        select(selection, row) {
            this.$emit("select", selection, row);
        },
        selectAll(selection) {
            this.$emit("select-all", selection);
        },
        selectionChange(selection) {
            this.$emit("selection-change", selection);
        },
        cellMouseEnter(row, column, cell, event) {
            this.$emit("cell-mouse-enter", row, column, cell, event);
        },
        cellMouseLeave(row, column, cell, event) {
            this.$emit("cell-mouse-leave", row, column, cell, event);
        },
        cellClick(row, column, cell, event) {
            this.$emit("cell-click", row, column, cell, event);
        },
        cellDblclick(row, column, cell, event) {
            this.$emit("cell-dblclick", row, column, cell, event);
        },
        rowClick(row, column, event) {
            this.$emit("row-click", row, column, event);
        },
        rowContextmenu(row, column, event) {
            this.$emit("row-contextmenu", row, column, event);
        },
        rowDblclick(row, column, event) {
            this.$emit("row-dblclick", row, column, event);
        },
        headerClick(column, event) {
            this.$emit("header-click", column, event);
        },
        headerContextmenu(column, event) {
            this.$emit("header-contextmenu", column, event);
        },
        sortChange({column, prop, order}) {
            this.$emit("sort-change", {column, prop, order});
        },
        filterChange(filters) {
            this.$emit("filter-change", filters);
        },
        tableCurrentChange(currentRow, oldCurrentRow) {
            this.$emit("tabel-current-change", currentRow, oldCurrentRow);
        },
        headerDragend(newWidth, oldWidth, column, event) {
            this.$emit("header-dragend", newWidth, oldWidth, column, event);
        },
        expandChange(row, expandedRows) {
            this.$emit("expand-change", row, expandedRows);
        },
        clearSelection() {
            this.$refs.tableRef.clearSelection();
        },
        toggleRowSelection(row, selected) {
            this.$refs.tableRef.toggleRowSelection(row, selected);
        },
        toggleAllSelection() {
            this.$refs.tableRef.toggleAllSelection();
        },
        toggleRowExpansion(row, expanded) {
            this.$refs.tableRef.toggleRowExpansion(row, expanded);
        },
        setCurrentRow(row) {
            this.$refs.tableRef.setCurrentRow(row);
        },
        clearSort() {
            this.$refs.tableRef.clearSort();
        },
        clearFilter(columnKey) {
            this.$refs.tableRef.clearFilter(columnKey);
        },
        doLayout() {
            this.$refs.tableRef.doLayout();
        },
        sort(prop, order) {
            this.$refs.tableRef.sort(prop, order);
        },

        handleSizeChange(val) {
            this.$emit("size-change", val);
        },
        pageCurrentChange(val) {
            this.$emit("page-current-change", val);
        },
        prevClick(val) {
            this.$emit("prev-click", val);
        },
        nextClick(val) {
            this.$emit("next-click", val);
        },
        replaceProps() {
            this.formCloumns.forEach((item) => {
                this.$set(this.formInline, item.key, item.value);
                this.initFormData = JSON.parse(JSON.stringify(this.formInline));
            });
            for (let key in this.tableProps) {
                this.dbTableProps[key] = this.tableProps[key];
            }
            for (let key in this.paginationProps) {
                this.dbPaginationProps[key] = this.paginationProps[key];
            }
        },
    },
    created() {
        this.replaceProps();
    },
    mounted() {
    },
};
</script>

<style lang='less' scoped>
.db-el-table {
    .el-form-item {
        margin-bottom: 10px;
    }

    .el-table,
    .el-form {
        padding: 0 20px;
        box-sizing: border-box;
    }

    .el-pagination {
        padding: 15px 20px;
    }
}

@import "./index.less";
</style>
