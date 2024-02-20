<template>
    <div class="Main">
        <div class="msg">
            <a>生存服</a>
            <div class="info">
                <p :sta="props.state" class="state">状态:</p>
                <p class="startTime">启动时间:{{ Gettime("start") }}</p>
                <p class="endTime">创建时间:{{ Gettime('end') }}</p>
            </div>
        </div>
        <a class="menu" href="#"><img src="./svg/list-menu.svg" alt=""></a>
    </div>
</template>
<script setup lang="ts">
function Gettime(mod: "start" | "end") {
    const date = mod === "start" ? new Date(props.startTime) : new Date(props.endTime)
    const seconds = `${date.getSeconds()}`.length === 1 ? `0${date.getSeconds()}` : date.getSeconds()
    const months = `${date.getMonth() + 1}`.length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    return `${date.getFullYear()}-${months}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${seconds}`
};
const props = defineProps({
    state: {
        default: "关闭中"
    },
    startTime: {
        default: new Date()
    },
    endTime: {
        default: new Date()
    }
})
</script>
<style scoped lang="scss">
$radius: 5px;

.Main {
    position: relative;
    width: 35vw;
    height: 25vh;
    background-color: #fff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: $radius;

    &::before {
        content: '';
        position: absolute;
        background-color: #20a53a;
        border-radius: $radius 0 0 $radius;
        width: 1vw;
        height: 25vh;
    }

    .menu {
        width: auto;
        height: 2vh;
        position: absolute;
        right: 1vw;
        top: 1vh;
    }

    .msg {
        a {
            font-size: xx-large;
        }

        margin-top: 2vh;
        margin-left: 3vw;
        color: #4e4e4e;
        font-weight: 500;
        font-family:"楷体";

        .info {
            font-size: 90%;

            .state {
                margin-top: 4vh;

                &::after {
                    content: attr(sta);
                    color: #20a53a;
                    font-weight: 900;
                    margin-left: 5px;
                }
            }

            *:not(.state) {
                margin-top: 2vh;
            }
        }
    }
}
</style>