<template>
  <div class="layout">
    <!-- 二级路由显示区域 -->
    <router-view></router-view>

    <!-- 底部定位栏 -->
    <van-tabbar route>
      <van-tabbar-item to='/layout/main'>
        <i
          slot="icon"
          class="toutiao toutiao-shouye"
        ></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to='/layout/question'>
        <i
          slot="icon"
          class="toutiao toutiao-wenda"
        ></i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item to='/layout/viode'>
        <i
          slot="icon"
          class="toutiao toutiao-shipin"
        ></i>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item to='/layout/my'>
        <i
          slot="icon"
          class="toutiao toutiao-wode"
        ></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}
</script>

<style lang="less" scoped>
</style>