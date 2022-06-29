<template>
  <div>
    <!-- 搜索标题框 -->
    <van-nav-bar class="search">
      <van-button
        slot="title"
        round
        type="info"
        class="search-btn"
      >
        <van-icon
          slot="icon"
          color='#fff'
          name="search"
          class="search-icon"
        />
        <span class="search-text">搜索</span>
      </van-button>
    </van-nav-bar>

    <!-- 滚动导航栏 -->
    <van-tabs v-model="active">
      <van-tab
        v-for="(item,index) in nav"
        :title="item"
        :key="index"
      ></van-tab>
      <div
        slot="nav-right"
        class="hamburger-btn"
      >
        <i class="toutiao toutiao-gengduo"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 搜索框
/deep/ .search {
  width: 100%;
  height: 48px;
  background-color: #3296fa;
  .search-btn {
    position: absolute;
    left: 42px;
    top: 6px;
    width: 278px;
    height: 32px;
    background-color: #5babfb;
    border-radius: 16px;
  }
  .search-icon {
    font-size: 16px;
  }
  .search-text {
    font-size: 14px;
    color: #ffffff;
  }
}

// 导航栏
/deep/ .van-tabs__nav--line {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
/deep/.van-tab {
  width: 100px;
  height: 42px;
  font-size: 14px;
  border: 1px solid #eee;
}
.hamburger-btn {
  position: fixed;
  right: 0px;
  top: 48px;
  width: 33px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #eee;
}
</style>