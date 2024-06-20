<template>
  <div class="optionlist">
    <div class="Maxmenu">
      <div class="logo">
        <img src="@/assets/svg/logo.svg" alt="" /><span>方块派对<br />BlockParty</span>
      </div>
      <div id="home" @click="addhomepage($event)">
        <img src="@/assets/svg/homepage.svg" alt="" /><span> 主页</span>
      </div>
      <div id="server" @click="addhomepage($event)">
        <img src="@/assets/svg/server.svg" alt="" /><span>服务器</span>
      </div>
      <div id="plugins" @click="addhomepage($event)">
        <img src="@/assets/svg/plugins.svg" alt="" /><span>插件管理</span>
      </div>
      <div id="IPn" @click="addhomepage($event)">
        <img src="@/assets/svg/IPn.svg" alt="" /><span>frp穿透</span>
      </div>
      <div id="set" @click="addhomepage($event)">
        <img src="@/assets/svg/set.svg" alt="" /><span>设置</span>
      </div>
    </div>
  </div>
  <div class="wire"></div>
</template>
<script setup lang="ts">
const emit = defineEmits(['addhomepage'])
const addhomepage = (th: any) => {
  emit('addhomepage', th.target.id)
  $('.homepage').removeClass('homepage')
  $(`#${th.target.id}`).addClass('homepage')
}
</script>
<script lang="ts">
import $ from 'jquery'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavTitle',
  props: {
    mid: {
      default: 'home',
      type: String as () => 'home' | 'server' | 'plugins' | 'IPn' | 'set' | string
    }
  },
  mounted() {
    $(`#${this.mid}`).addClass('homepage')
  }
})
</script>
<style scoped lang="scss">
$wcolor: #fff;

$bcolor: #363c44;

.homepage {
  background-color: $wcolor;

  span {
    color: #000;
  }

  img {
    filter: drop-shadow(#000 90px 0);
    transform: translateX(-100px);
  }
}

@keyframes mid {
  0% {
    background-color: $wcolor;
  }

  100% {
    background-color: $bcolor;
  }
}

@keyframes menu {
  0% {
    background-color: $bcolor;
  }

  100% {
    background-color: $wcolor;
  }
}

.Minmenu {
  width: 10vw;

  span {
    visibility: hidden;
  }
}

.optionlist {
  border-radius: 10px 0px 0px 10px;
  width: 20vw;
  background-color: $bcolor;
  font-size: larger;
  color: $wcolor;

  .Maxmenu>*:hover:not(.logo) {
    animation: menu both 0.5s;

    span {
      color: #000;
    }

    img {
      filter: drop-shadow(#000 90px 0);
      transform: translateX(-100px);
    }
  }

  .Maxmenu {
    div {
      position: relative;
      display: flex;
      padding-top: 5%;
      padding-bottom: 5%;
      text-align: center;
      align-items: center;

      span {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        font-size: 1vw;
        pointer-events: none;
      }

      img {
        width: 10%;
        margin-left: 10%;
      }
    }

    .logo img {
      width: 24%;
      margin-left: 14%;
    }
  }
}

.wire {
  width: 0.5vw;
  height: 100%;
  background-color: #95f4f4;
}
</style>
