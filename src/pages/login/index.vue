<template>
  <div class="login-container">
    <!-- 标题区域 -->
    <van-nav-bar
      title="登录"
      id="title"
    />

    <!-- 表单区域 -->
    <van-form
      @submit="onSubmit"
      ref="form"
    >
      <van-cell-group inset>
        <!-- 手机号 -->
        <div id='username'>
          <i class="iconfont toutiao toutiao-shouji"></i>
          <van-field
            v-model="username"
            name="mobile"
            placeholder="请输入手机号"
            :rules="[
          {pattern:/^1[3-9]\d{9}$/, message: '手机号格式错误' },
          { required: true,message:'啊发发'}
          ]"
          />
        </div>

        <!-- 验证码 -->
        <div id="password">
          <i class="iconfont toutiao toutiao-yanzhengma"></i>
          <van-field
            v-model="password"
            type="password"
            name="code"
            class="password-input"
            placeholder="请输入验证码"
            maxlength="6"
            :rules="[
          {pattern:/^\d{6}$/, message: '需由6位纯数字组成' },
          { required: true}
          ]"
          />
          <div id="a">|</div>
          <van-count-down
            class="yanzhegnma"
            v-if="isCountDown"
            :time="time"
            format="剩余ss秒"
            @finish='isCountDown=false'
          />
          <button
            v-else
            class="yanzhegnma"
            @click.prevent="verify"
          >获取验证码</button>
        </div>
      </van-cell-group>

      <!-- 提价按钮 -->
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="primary"
          class="submit"
          native-type="submit"
        >
          提交
        </van-button>
      </div>

      <!-- 隐私条款 -->
      <div id="terms">隐私条款</div>
    </van-form>
  </div>
</template>



<script>
// 引入请求接口
import { loginAPI, verifyAPI } from '@/api/index.js'

export default {
  name: 'Login',

  data () {
    return {
      time: 5 * 1000,
      isCountDown: false,
      username: '13911111111',
      password: '246810'
    }
  },

  methods: {

    // 发送验证码
    async verify () {
      try {
        await this.$refs.form.validate('username')
        this.isCountDown = true
        try {
          const res = await verifyAPI(this.username)
          console.log(res);
          this.$toast.success('发送成功')
        } catch (error) {
          const res = error.response.data.message
          console.log(res);
          this.$toast.fail(res)
        }
      } catch (error) {
        const res = error.response.data.message
        console.log(error)
        this.$toast.fail(res)
      }
    },

    // 登录功能
    async onSubmit (values) {
      // 加载中
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
      // 发起请求
      try {
        const res = await loginAPI(values)
        console.log('登录成功', res);
        this.$store.commit('setUser', res.data.data)
        console.log('state',this.$store.state);
        this.$toast.success('登录成功')
      } catch (error) {
        console.log('登录失败', error);
        this.$toast.fail('登录失败，手机号或者验证码错误')
      }
    }
  }
}
</script>



<style scoped lang='less'>
// 字体图标样式
.iconfont {
  margin-left: 6px;
  width: 32px;
  line-height: 46px;
  font-size: 19px;
  color: #666;
}

// 标题样式
/deep/ .van-nav-bar__content {
  width: 100%;
  height: 48px;
  background-color: #3296fa;
}
/deep/ .van-nav-bar__title {
  font-size: 16px;
  line-height: 48px;
  color: #fff;
}

// 输入框样式
#username,
#password {
  margin: 0 auto;
  width: 345px;
  height: 46px;
  line-height: 46px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

// 验证码按钮
.yanzhegnma {
  margin-top: 11px;
  width: 76px;
  height: 23px;
  line-height: 23px;
  font-size: 11px;
  color: #666;
  text-align: center;
  border-radius: 12px;
  background-color: #ededed;
  border: 1px solid #ededed;
}

// input输入框样式
.password-input {
  width: 220px !important;
}
/deep/ .van-field__error-message {
  position: absolute;
  top: 0px;
  left: 85px;
}
#a {
  margin-right: 10px;
  width: 1px;
  font-size: 23px;
  color: #eee;
}

// 提价按钮样式
.submit {
  margin-top: 27px;
  width: 347px;
  height: 44px;
  color: #fff;
  font-size: 15px;
  background-color: #6db4fb;
  border-radius: 5px;
}

// 隐私条款样式
#terms {
  position: absolute;
  bottom: 27px;
  left: 162px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  color: #666666;
}
</style>