<template>
  <div>
    <img :src="imgbase64" alt="" />
    <span>
      <a href="#">{{ title }}</a>
      <p>{{ pdata }}</p>
      <p class="date">{{ minute }}分钟前 {{ browse }}浏览</p>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      pdata: '',
      imgbase64: ""
    }
  },
  props: {
    content: {
      default: ''
    },
    imgpath: {
      default: ''
    },
    title: {
      default: ''
    },
    minute: {
      default: 0
    },
    browse: {
      default: 0
    }
  },
  watch: {
    data(n, o) {
      if (n != o) this.CLdata()
    },
    imgpath(n, o) {
      if (n != o) this.CLpath()
    }
  },
  mounted() {
    this.CLdata()
    this.CLpath()
  },
  methods: {
    CLdata() {
      if (this.content.length > 150) this.pdata = this.content.substring(0, 150) + '............'
      else this.pdata = this.content
      return
    },
    CLpath() {
      if (this.imgpath[0] == '#') {
        let imgname = this.imgpath.substring(2)
        this.imgbase64 = new URL(`../../assets/svg/${imgname}.svg`, import.meta.url).pathname
      } else {
        this.imgbase64 = this.imgpath
      }
      return;
    }
  }
}
</script>
<style scoped lang="scss">
div {
  border-radius: 15px;
  position: relative;
  display: flex;
  height: 23vh;

  img {
    $size: 6vw;
    width: $size;
    height: $size;
    margin: 2.5% 0 0 3%;
    background-color: antiquewhite;
    border-radius: 20px;
  }

  span {
    margin-left: 5%;
    width: 65vw;

    a {
      text-decoration: none;
      color: unset;
      font-weight: 500;
      font-size: x-large;
    }

    a:hover {
      text-decoration: none;
      color: #8af5ff;
    }

    a:active {
      text-decoration: none;
      color: #7c7c7c;
    }

    p {
      font-weight: 370;
      color: #7c7c7c;
      word-break: break-all;
    }

    .date {
      position: absolute;
      right: 1vw;
      bottom: 0.1vh;
    }
  }
}

div:active {
  font-weight: bold;
  position: relative;
}

div::after {
  content: '';
  display: block;
  position: absolute;
  width: 96%;
  background-color: #f0ecec;
  height: 0.5vh;
  bottom: 0;
  left: 2%;
}
</style>
