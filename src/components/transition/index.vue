<template>
    <div>
        <button @click="show = !show">按钮</button>
        <DbTransition v-model="show" v-if="list.length">
            <div>
                <p v-for="item in list" :key="item.id">{{ item.name }}</p>
            </div>
        </DbTransition>
    </div>
</template>

<script>
import DbTransition from '../../myPlugin/db-transition/index.vue'
export default {
    components: { DbTransition },
    data () {
        return {
            show: false,
            list: []
        }
    },
    computed: {},
    watch: {},
    methods: {
        init () {
            for (let i = 1; i < 20; i++) {
                const obj = {
                    id: `id_${i}`,
                    name: '上岛咖啡可抵扣绿色防控老大说法立卡手打'
                }
                this.list.push(obj)
            }
        }
    },
    created () {
        setTimeout(() => {
            this.init()
        }, 1000)
    }
}
</script>

<style lang='less' scoped></style>