<template>
    <div class="icon-box">
        <iframe
            style="display: none"
            id="iconPage"
            src="../../../public/static/font/demo_index.html"
            frameborder="0"
        ></iframe>
        <div
            class="item"
            v-for="(item, index) in computedIconList"
            :key="index"
        >
            <i :class="'iconfont ' + item.icon" @click="chooseIcon(item)"></i>
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "db-icon",
    data() {
        return {
            iconList: [],
            loading: false,
        };
    },
    props: {
        searchValue: {
            type: String,
            default: "",
        },
    },
    computed: {
        computedIconList() {
            let arr = this.iconList.filter((x) =>
                x.name.includes(this.searchValue)
            );
            return arr;
        },
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.getPage(); //延时执行
            }, 400);
        });
    },
    methods: {
        //保存数据
        chooseIcon(item) {
            this.$emit("on-save-icon", item.icon);
        },
        //初始化图标库
        getPage() {
            let iframe = document.getElementById("iconPage");
            let iwindow = iframe.contentWindow;
            let idoc = iwindow.document;
            let iconArr = Array.from(
                idoc.querySelectorAll(".font-class .code-name") //获取图标代码
            );
            let nameList = Array.from(
                idoc.querySelectorAll(".font-class .name") //获取图标名字
            );
            let icon = iconArr.map(
                (x) => x.innerHTML.split("\n ")[0].split(".")[1]
            );
            let name = nameList.map((x) =>
                x.innerHTML.replaceAll("\n", " ").trim()
            );
            let arr = [];
            icon.forEach((iconItem, i) => {
                name.forEach((nameItem, j) => {
                    if (i === j) {
                        let obj = {
                            icon: iconItem,
                            name: nameItem,
                        };
                        arr.push(obj);
                    }
                });
            });
            this.iconList = arr;
        },
    },
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>