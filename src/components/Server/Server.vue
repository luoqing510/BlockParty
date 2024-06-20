<script setup lang="ts">
import ServerInfo from './ServerInfo.vue';
import ServerList from './ServerList.vue';
</script>
<template>
    <div class="serverlist">
        <ServerList></ServerList>
        <ServerList></ServerList>
        <ServerList></ServerList>
    </div>
</template>
<style lang="scss" scoped>
.serverlist {
    display: inline-flex;
    width: 80vw;
    flex-wrap: wrap;

    &>* {
        margin-top: 4.5vh;
    }

    &>*:nth-child(odd) {
        margin-left: 2.5vw;
    }

    &>:nth-child(even) {
        margin-left: 4.5vw;
    }
}
</style>