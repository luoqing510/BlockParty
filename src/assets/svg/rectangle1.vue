<template>
    <div :class="className">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" :width="width" :height="height"
            :view-box="`0 0 ${width} ${height}`">
            <rect x="0" y="0" :width="width" :height="height" rx="0" :fill="color" fill-opacity="1" />
        </svg>
        <span>{{ content }}</span>
    </div>
</template>
<style lang="scss" scoped>
div {
    width: auto;
    height: auto;
    justify-content: center;
    display: inline-flex;
    margin-top: 2vh;

    svg {
        margin-left: 1vw;
    }

    span {
        margin-left: 2vw;
        font: size 50%;
    }
}
</style>
<script lang="ts">
export default {
    props: {
        color: {
            default: "#7c7c7c"
        },
        width: {
            default: 10 as any
        },
        height: {
            default: 20 as any
        },
        content: {
            default: ""
        },
        className: {
            default: ""
        }
    }
}
</script>