<template>
    <!-- @ symbol can replace v-on bind -->
    <button @click="onClick()" :style="{ background: color }" class="btn">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick() {
                this.$emit('btn-click')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>