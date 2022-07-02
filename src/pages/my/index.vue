<template>
  <div class="my">

    <!-- 顶部登录 -->
    <div class="top">
      <!-- 登录状态 -->
      <div
        class="login"
        v-if="user"
      >
        <div class="login-info">
          <!-- 头像部分 -->
          <div class="login-info-name">
            <van-image
              round
              fit='cover'
              :src="userInof.photo"
              class="login-info-name-img"
            />
            <div class="login-info-name-text">{{userInof.name}}</div>
          </div>
          <!-- 点击编辑 -->
          <van-button
            round
            type="info"
            class="login-info-btn"
            to="/edit"
          >编辑资料</van-button>
        </div>
        <!-- 头条、关注、粉丝、获赞 -->
        <div class="login-list">
          <div class="login-list-box">
            <div class="login-list-box-num">{{userInof.art_count}}</div>
            <div class="login-list-box-text">头条</div>
          </div>
          <div class="login-list-box">
            <div class="login-list-box-num">{{userInof.follow_count}}</div>
            <div class="login-list-box-text">关注</div>
          </div>
          <div class="login-list-box">
            <div class="login-list-box-num">{{userInof.fans_count}}</div>
            <div class="login-list-box-text">粉丝</div>
          </div>
          <div class="login-list-box">
            <div class="login-list-box-num">{{userInof.like_count}}</div>
            <div class="login-list-box-text">获赞</div>
          </div>
        </div>
      </div>
      <!-- 未登录状态 -->
      <div
        v-else
        class="unlogin"
        @click="jumpTo"
      >
        <img
          src="@/assets/mobile.png"
          class="unlogin-img"
        >
        <div class="unlogin-text">登录 / 注册</div>
      </div>
    </div>

    <!-- 收藏及历史 -->
    <van-grid
      column-num='2'
      class='grid'
    >
      <van-grid-item class="grid-item">
        <i
          slot="icon"
          class="grid-item-icon toutiao toutiao-shoucang"
        ></i>
        <div
          slot="text"
          class="grid-item-text"
        >收藏</div>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i
          slot="icon"
          class="grid-item-icon toutiao toutiao-lishi"
        ></i>
        <div
          slot="text"
          class="grid-item-text"
        >历史</div>
      </van-grid-item>
    </van-grid>

    <!-- 信息栏 -->
    <div class="cell">
      <van-cell
        title="消息通知"
        class="cell-item"
        is-link
      />
      <van-cell
        to="/chats"
        title="小智同学"
        class="cell-item"
        is-link
      />
    </div>

    <!-- 退出按钮 -->
    <van-button
      v-if="user"
      class="out"
      type="primary"
      size="large"
      color="#fff"
      @click='outto'
    >退出登录</van-button>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { uerInfoAPI } from '@/api/index.js'

export default {
  data () {
    return {
      userInof: {}
    }
  },
  methods: {
    // 点击登录
    jumpTo () {
      this.$router.push('/login')
    },

    // 点击退出
    outto () {
      this.$dialog.confirm({
        title: '标题',
        message: '是否确认退出',
      })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async created () {
    // 获取用户信息
    const userInof = await uerInfoAPI()
    this.userInof = userInof.data.data
  }
}
</script>

<style lang="less" scoped>
.my {
  background-color: #f5f7f9;
  height: 667px;
}

// 顶部标题样式
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 183px;
  background: url("@/assets/banner.png");
  background-size: contain;
  // 未登录状态
  .unlogin {
    .unlogin-img {
      width: 66px;
      height: 66px;
      border-radius: 50%;
      background-color: #ffffff;
      border: solid 1px #ffffff;
    }
    .unlogin-text {
      margin-top: 8px;
      font-size: 14px;
      color: #ffffff;
    }
  }
  // 登录状态
  .login-info {
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .login-info-name {
      margin-left: 16px;
      display: flex;
      align-items: center;
      .login-info-name-img {
        width: 75px;
        height: 75px;
        border: 1px solid #ffffff;
      }
      .login-info-name-text {
        margin-left: 7px;
        font-size: 15px;
        color: #ffffff;
      }
    }
    /deep/ .van-button {
      margin-right: 16px;
      height: 24px;
      background-color: #ffffff;
      .van-button__text {
        width: 100%;
        height: 100%;
        line-height: 24px;
        font-size: 6px;
        color: #666666;
      }
    }
  }
  .login-list {
    margin-top: 28px;
    display: flex;
    justify-content: space-around;
    .login-list-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      .login-list-box-num {
        font-size: 18px;
      }
      .login-list-box-text {
        font-size: 12px;
      }
    }
  }
}

//收藏及历史
.grid {
  overflow: hidden;
  height: 70px;
  .grid-item-icon {
    font-size: 23px;
    color: #eb5253;
  }
  .grid-item-text {
    font-size: 14px;
    color: #333333;
  }
}

// 信息栏
.cell {
  height: 105px;
  margin-top: 8px;
  .cell-item {
    font-size: 15px;
    color: #333333;
  }
}

//退出按钮
.out {
  font-size: 15px;
  color: #d86262 !important;
}
</style>