<template>
  <div class="circleprogress">
    <svg width="150" height="150">
      <circle class="circle" cx="95" cy="70" :r="r" transform="rotate(-90 80 80)" :style="{
        'stroke-dashoffset': `${circleC - (circleC / 100) * dprogress}`,
        'stroke-dasharray': `${circleC}`,
        'stroke-width': `${breadth}`
      }"></circle>
      <text x="70" y="65" fill="#aiaiai" text-anchor="middle">
        <tspan class="text">{{ progress }}%</tspan>
      </text>
      <text x="70" y="80" fill="#5c5c5c" text-anchor="middle" class="percent">{{ useIm }}</text>
      <text x="70" y="145" class="describe" text-anchor="middle">{{ describe }}</text>
    </svg>
  </div>
</template>
<script lang="ts">
export default {
  name: 'CircleProgress',
  data() {
    return {
      dprogress: 0,
      nprogress: this.progress,
      circleC: Math.floor(3.14 * this.r * 2)
    }
  },
  props: {
    progress: {
      default: 0
    },
    describe: {
      default: ''
    },
    r: {
      default: 50
    },
    useIm: {
      default: '使用率'
    },
    breadth: {
      default: 8
    }
  },
  watch: {
    progress: {
      handler(newd, oldd) {
        this.nprogress = newd
        this.startProgress(newd > oldd)
      }
    },
    r: {
      handler(newd) {
        this.circleC = Math.floor(3.14 * newd * 2)
      }
    }
  },
  methods: {
    startProgress(mod: boolean) {
      const timeout = setInterval(() => {
        if (mod) {
          if (this.dprogress > this.nprogress - 1) {
            this.dprogress = this.nprogress
            clearInterval(timeout)
          } else {
            this.dprogress += 1
          }
        } else {
          if (this.dprogress < this.nprogress + 1) {
            this.dprogress = this.nprogress
            clearInterval(timeout)
          } else {
            this.dprogress -= 1
          }
        }
      }, 50)
    }
  },
  mounted() {
    this.startProgress(true)
  }
}
</script>
<style lang="scss" scoped>
.circleprogress {
  .circle {
    fill: none;
    stroke: #20a53a;
    stroke-linecap: round;
  }

  .text {
    font-size: medium;
  }

  .percent {
    position: absolute;
    font-size: small;
  }

  .describe {
    left: 10;
  }
}
</style>
