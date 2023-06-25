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
                console.log('click')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>