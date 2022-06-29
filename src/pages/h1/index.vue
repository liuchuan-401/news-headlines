<template>
  <div
    class='start'
    v-if="isStar"
  >
    <img src='../../assets/logo.png'>
    <h4>新闻头条</h4>
    <p>有态度的技术分享</p>
  </div>
  <div
    class="h"
    v-else
  >
    <img
      src="@/assets/Snipaste.png"
      class='pic'
    >
    <h4>新闻<span>头条</span></h4>
    <p>技术热点的追求者</p>
    <van-button
      class="btn"
      round
      size="large"
      to="/layout"
    >立即体验</van-button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isStar: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.isStar = false
    }, 2000)
  }

}
</script>

<style scoped lang='less'>
.start {
  height: 667px;
  text-align: center;
  background-color: #3594fa;
  img {
    margin: 200px 58px 88px;
    width: 259px;
    height: 190px;
  }
  h4 {
    font-size: 30px;
    color: #fefeff;
  }
  p {
    margin-bottom: 100px;
    font-size: 24px;
    color: #fefeff;
  }
}
.h {
  text-align: center;
  .pic {
    margin: 176px 82px 0;
    width: 218px;
    height: 174px;
  }
  h4 {
    margin: 87px 0 15px 0;
    font-size: 25px;
    span {
      color: #3698fa;
    }
  }
  p {
    margin: 0;
    margin-bottom: 62px;
    font-size: 20px;
    color: #666666;
  }
  .btn {
    width: 130px;
    height: 32px;
    font-size: 18px;
    letter-spacing: 1px;
    color: #3698fa;
    border-radius: 16px;
    border: solid 1px #3698fa;
  }
}
</style>