<script setup lang="ts">
import NewsContent from '@/components/homepage/NewsContent.vue'
import rectangle1 from '@/assets/svg/rectangle1.vue'
import CircleProgress from '@/components/CircleProgress/CircleProgress.vue'
</script>
<script lang="ts">
declare type newdata = {
  type: "set" | "rload",
  data: {
    content: string,
    title: string,
    minute: number,
    browse: number,
    image: string
  }[]
}
export default {
  data() {
    return {
      newData: {} as newdata
    }
  },
  mounted() {
    this._GetNewData("localhost:11451")
  },
  methods: {
    _GetNewData(url: string) {
      fetch(`http://${url}`).then(val => {
        val.json().then(res => {
          this.newData = res
        })
      })
    }
  }
}
</script>
<template>
  <div class="Main">
    <div main>
      <div class="condition">
        <rectangle1 class-name="title" content="运行情况" />
        <div class="data">
          <CircleProgress :progress="50" describe="2核心" :r="55" use-im="CPU使用率" :breadth="10" />
          <CircleProgress :progress="20" describe="运行数据" :breadth="10" use-im="内存使用率" />
        </div>
      </div>
      <div class="news">
        <rectangle1 class-name="title" content="最新资讯" />
        <div class="content">
          <NewsContent v-for="(val) of newData.data" :browse="val.browse" :content="val.content"
            :imgpath="`data:image/jpg;base64,${val.image}`" :minute="val.minute" :title="val.title" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.Main {
  div[main] {
    height: 93vh;
    position: relative;
    background-color: #f0ecec;

    &>* {
      margin-left: 1vw;
      width: 78vw;
      position: absolute;
      background-color: #fff;
      border-radius: 5px;

      .title {
        margin-left: 1%;
        font-weight: 700;
        font-size: 70%;
        color: #7c7c7c
      }
    }

    .condition {
      margin-top: 1.5vh;
      height: 30vh;

      .data {
        display: flex;
        margin-top: 1vh;

        &.data>* {
          margin-left: 4vw
        }
      }
    }

    .news {
      bottom: 0;
      height: 60vh;

      .content {
        height: 54vh;
        overflow: auto;
      }
    }
  }
}
</style>