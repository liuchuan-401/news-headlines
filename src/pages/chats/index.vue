<template>
  <div class="chat">
    <!-- 标题栏 -->
    <van-nav-bar
      title="小传同学"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="bar"
    >
      <i
        slot="right"
        class="bar-icon toutiao toutiao-gengduo"
      ></i>
    </van-nav-bar>

    <!-- 内容盒子 -->
    <div class="main">
      <ul
        class="talk_list"
        id="talk_list"
      >
        <li class="left_word">
          <img src="@/assets/weixin1.jpg" /> <span>嗨，最近想我没有？</span>
        </li>
        <li class="right_word">
          <img src="@/assets/weixin2.jpg" /> <span>你好哦</span>
        </li>
      </ul>
    </div>

    <!-- 输入框 -->
    <div class="input">
      <input
        type="text"
        class="input-inp"
        v-model="text"
      >
      <div class="input-send">发送</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      charts: []
    }
  },
  methods: {
    // 标题栏事件
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      console.log('点击更多');
    },
  },
}
</script>

<style lang="less" scoped>
.chat {
  height: 667px;
  background-color: #e1e1e1;
}
//标题栏
.bar {
  height: 48px;
  font-size: 18px;
  color: #fff;
  background-color: #3296fa;
  /deep/ .van-icon {
    font-size: 18px;
    color: #fff;
  }
  /deep/ .van-nav-bar__title {
    font-size: 18px;
    color: #fff;
  }
}

//输入框
.input {
  display: flex;
  position: absolute;
  bottom: 0px;
  height: 45px;
  width: 100%;
  justify-content: start;
  align-items: center;
  background-color: #f4f5f6;
  .input-inp {
    margin-left: 15px;
    width: 295px;
    height: 26px;
    border-radius: 14px;
    font-size: 15px;
    text-indent: 10px;
    border: 1px solid #e8e8e8;
  }
  .input-send {
    margin-left: 15px;
    font-size: 15px;
    color: #cacaca;
  }
}

// 聊天区域
.talk_list {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 50px;
}
.talk_list li {
  overflow: hidden;
  margin: 20px 0px 30px;
}
.talk_list .left_word img {
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 50%;
  margin-left: 20px;
}
.talk_list .left_word span {
  float: left;
  background-color: #fe9697;
  padding: 10px 15px;
  max-width: 290px;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  margin-left: 13px;
  position: relative;
  line-height: 24px;
}
.talk_list .left_word span:before {
  content: "";
  position: absolute;
  left: -8px;
  top: 3px;
  width: 13px;
  height: 12px;
  background: url("@/assets/corner01.png") no-repeat;
}
.talk_list .right_word img {
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 50%;
  float: right;
  margin-right: 20px;
}
.talk_list .right_word span {
  float: right;
  background-color: #fff;
  padding: 10px 15px;
  max-width: 290px;
  border-radius: 12px;
  font-size: 16px;
  color: #000;
  margin-right: 13px;
  position: relative;
  line-height: 24px;
}
.talk_list .right_word span:before {
  content: "";
  position: absolute;
  right: -8px;
  top: 3px;
  width: 13px;
  height: 12px;
  background: url("@/assets/corner02.png") no-repeat;
}
</style>