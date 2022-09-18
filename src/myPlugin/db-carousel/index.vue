<!--
  功能：轮播图
  作者：王代彬
  时间：2021年03月10日 12:39:23
  版本：v1.0
-->
<template>
    <div class="db-carousel-container" id="leftImgId">
        <transition name="show">
            <img :src="moveImg" class="d" key="aaa" alt="" v-if="leftShow" />
            <img :src="moveImg" class="d" key="bbb" alt="" v-else />
        </transition>
        <div class="l-foot-icon">
            <div
                class="l-foot-item"
                :class="{ checedIcon: num === index }"
                @click="changeLeftImg(index)"
                v-for="(item, index) in leftImgList"
                :key="index"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "dbCarousel",
    props: {},
    components: {},
    data() {
        return {
            leftShow: true,
            num: 0,
            moveImg: "",
            leftImgList: [
                require("./img/left1.jpg"),
                require("./img/left2.jpg"),
                require("./img/left3.jpg"),
                require("./img/left4.jpg"),
            ],
            imgTimer: null,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        //定时器执行函数
        addNum() {
            this.leftShow = !this.leftShow;
            if (this.num === this.leftImgList.length - 1) {
                this.num = 0;
            } else {
                this.num++;
            }
            this.moveImg = this.leftImgList[this.num];
        },
        changeLeftImg(index) {
            this.num = index;
            this.leftShow = !this.leftShow;
            this.moveImg = this.leftImgList[index];
        },
        //开启定时器
        openTimer() {
            this.imgTimer = setInterval(() => {
                this.addNum();
            }, 3500);
        },
        //关闭定时器
        colseTimer() {
            this.imgTimer && clearInterval(this.imgTimer);
        },
    },
    created() {
        this.moveImg = this.leftImgList[0];
        this.openTimer();
    },
    mounted() {
        let leftImg = document.getElementById("leftImgId");
        let _this = this;
        // 鼠标移入
        leftImg.onmouseover = function () {
            _this.colseTimer();
        };
        // 鼠标移出
        leftImg.onmouseout = function () {
            _this.openTimer();
        };
    },
    beforeDestroy() {
        this.colseTimer();
    },
};
</script> 
<style lang='less' scoped>
@import "./index.less";
</style>
