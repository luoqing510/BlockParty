<script setup lang="ts">
import Homepage from './components/homepage/homepage.vue'
import NavTitle from './components/Title/NavTitle.vue'
import Server from './components/Server/Server.vue'
import Title from './components/Title/Title.vue'
</script>
<template>
  <NavTitle :mid="mid" @addhomepage="compToggle"></NavTitle>
  <div class="Main">
    <Title></Title>
    <component :is="mid"></component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  data() {
    return {
      mid: "server"
    }
  },
  components: {
    home: Homepage,
    server: Server
  },
  methods: {
    compToggle(t: any) {
      switch (t) {
        case "home":
          this.mid = "home";
          break;
        case "set":
          this.mid = "set";
          break;
        case "plugins":
          this.mid = "plugins";
          break
        case "IPn":
          this.mid = "IPn";
          break;
        case "server":
          this.mid = "server";
          break;
      }
    }
  }
})
</script>

<style lang="scss" src="@/assets/global.scss"></style>