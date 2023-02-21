<template>
    <div class="transition-container" :style="containerStyle">
        <div ref="containerRef">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "db-transition",
    props: {
        value: {//显示隐藏
            type: Boolean,
            default: false
        },
        transitionTime: {//过渡时间
            type: Number,
            default: 0.2
        },
        transitionCurve:{//贝塞尔曲线
            type:String,
            default:'cubic-bezier(0.25, 0.1, 0.25, 0.1)'
        }
    },
    data () {
        return {
            containerHeight: 0
        };
    },
    computed: {
        containerStyle () {
            return {
                height: `${this.value ? this.containerHeight : 0}px`,
                transition: `height ${this.transitionTime}s ${this.transitionCurve}`
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.containerHeight = this.$refs.containerRef.offsetHeight;
        });
    },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>