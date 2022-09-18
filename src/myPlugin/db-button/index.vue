<template>
    <button
        :class="type"
        :style="{
            minHeight: butHeight + 'px',
            fontSize: butFont + 'px',
            borderRadius: round ? '50px 50px' : '5px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
        }"
    >
        <db-icon
            v-if="icon"
            :type="icon"
            :color="iconColor"
            :size="iconSize"
        ></db-icon>
        <span>
            <slot>基础按钮</slot>
        </span>
    </button>
</template>
<script>
import dbIcon from "../db-icon/index.vue";
export default {
    name: "db-button",
    data() {
        return {};
    },
    components: { dbIcon },
    props: {
        icon: String,
        iconSize: [Number, String],
        iconColor: { type: String, default: "#fff" },
        type: String,
        size: String,
        round: Boolean,
        disabled: Boolean,
    },
    computed: {
        butHeight() {
            switch (this.size) {
                case "lg":
                    return 42;
                    break;
                case "middle":
                    return 32;
                    break;
                case "small":
                    return 28;
                    break;
            }
        },
        butFont() {
            switch (this.size) {
                case "lg":
                    return 16;
                    break;
                case "middle":
                    return 14;
                    break;
                case "small":
                    return 12;
                    break;
            }
        },
    },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>