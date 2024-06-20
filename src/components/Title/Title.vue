<template>
  <div class="master">
    <nav>
      <div class="notice">
        <img src="@/assets/svg/notice.svg" alt="" /><span>此为测试公告---------------------</span>
      </div>
      <div class="winbtn">
        <img src="@/assets/svg/winmin.svg" alt="" />
        <img src="@/assets/svg/winmax.svg" alt="" />
        <img src="@/assets/svg/winclose.svg" alt="" id="wincolse" />
      </div>
    </nav>
    <div class="Mcolor"></div>
  </div>
</template>
<style scoped lang="scss">
.master {
  width: 80vw;
  height: 7vh;
  border-radius: 0px 15px 15px 0px;

  .Mcolor {
    background-color: #f0ecec;
    height: 93vh;
  }

  nav {
    .notice {
      display: inline-flex;
      background-color: #fff;
      height: 7vh;
      align-items: center;

      img {
        float: left;
        width: 4vh;
        margin-left: 1vw;
      }

      span {
        margin-left: 5vw;
      }
    }

    .winbtn {
      height: 7vh;
      display: inline-flex;
      align-items: center;
      align-items: center;
      float: right;
      margin-right: 1vw;

      img:last-child:hover {
        transform: rotate(360deg);
        transition: 1.1s;
      }

      img:hover {
        background-color: #cbcbcb;
      }
    }
  }
}
</style>
