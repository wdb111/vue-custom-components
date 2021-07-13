<template>
    <div class="app">
        <h3>ElementUI+IviewUI：实践vue自定义组件</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in navList" :key="index"></el-tab-pane>
        </el-tabs>
        <component :is="componentName"></component>
    </div>
</template>

<script>
import dbIcon from "./components/icons/index.vue";
import dbButton from "./components/buttons/index.vue";
import dbTable from "./components/tables/index.vue";
import dbMessage from "./components/messages/index.vue";
import dbBatchAdd from './components/batch-add/index';
import dbCarousel from './components/carousel/index.vue';
import dbIconSelecter from './components/icon-selecter/index.vue';

export default {
    data() {
        return {
            activeName:'dbIcon',
            componentName: "dbIcon",
           navList:[
               {
                   label:'自定义图标',
                   name:'dbIcon'
               },
               {
                   label:'自定义按钮',
                   name:'dbButton'
               },
               {
                   label:'信息提示',
                   name:'dbMessage'
               },
               {
                   label:'自定义表格',
                   name:'dbTable'
               },
                {
                   label:'批量添加',
                   name:'dbBatchAdd'
               },
               {
                   label:'轮播图',
                   name:'dbCarousel'
               },
               {
                   label:'图标选择器',
                   name:'dbIconSelecter'
               }
           ]
        };
    },
    components: {
        dbIcon,
        dbButton,
        dbTable,
        dbMessage,
        dbBatchAdd,
        dbCarousel,
        dbIconSelecter
    },
    methods: {
        handleClick(tab) {
            this.componentName=tab.name
        },
        
        
    },
    created() {},
};
</script>

<style scoped>
.app {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
}
h3 {
    text-align: center;
}
</style>
