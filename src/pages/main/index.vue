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

    <!-- 滚动标题 -->
    <van-tabs class="tab">
      <van-tab
        class="tab-tabs"
        v-for="(obj,index) in mychannels"
        :title="obj.name"
      >
        <ArticleList :channel_id='obj.id' />
      </van-tab>
    </van-tabs>
    <i
      slot="nav-right"
      class="toutiao toutiao-gengduo tab-hambuger"
      @click="showPopup=!showPopup"
    ></i>

    <!-- 遮罩层 -->
    <van-popup
      v-model="showPopup"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '100%' }"
      class="popup"
    >
      <!-- 我的频道 -->
      <div>
        <van-cell-group class="popup-cell-group">
          <van-cell
            title="我的频道"
            class="popup-cell"
          >
            <van-button
              plain
              hairline
              round
              slot="right-icon"
              type="info"
              class="popup-btn"
            >编辑</van-button>
          </van-cell>
        </van-cell-group>

        <van-grid
          :gutter="10"
          class="popup-grid"
        >
          <van-grid-item
            v-for="value in 8"
            :key="value"
            text="文字"
            class="popup-grid-item"
          />
        </van-grid>
      </div>
    </van-popup>

  </div>
</template>

<script>
// 引入请求文件
import { getChannlesAPI } from '@/api/index.js'
// 引入组件
import ArticleList from '@/components/article-list.vue'

export default {
  data () {
    return {
      active: 0,
      showPopup: false,
      mychannels: [],
    }
  },
  components: {
    ArticleList,
  },
  async created () {
    try {
      // 获取频道列表
      const res = await getChannlesAPI()
      this.mychannels = res.data.data.channels
    } catch (err) {
      this.$toast('获取频道列表失败')
    }
  }
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

// 滚动导航栏
/deep/.tab {
  position: absolute;
  top: 46px;
  width: 375px;
  height: 42px;
  .van-tab__text {
    font-size: 15px;
    color: #333333;
  }
  .van-tabs__line {
    bottom: 20px;
    width: 16px;
    height: 3px;
    background-color: #3296fa;
    border-radius: 2px;
  }
  .van-tabs__nav--complete {
    padding-left: 0px;
  }
  .van-tab {
    min-width: 80px;
    border: 1px solid #edeff3;
  }
}
.tab-hambuger {
  display: block;
  position: absolute;
  top: 46px;
  right: 0px;
  width: 33px;
  height: 41px;
  font-size: 20px;
  line-height: 41px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #efefef;
  opacity: 0.9;
}
</style>
