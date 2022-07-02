<template>
  <div>
    <!-- 搜索框 -->
    <div class="sreach">
      <form action="/">
        <van-search
          v-model="value"
          background=' #3296fa'
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch(value)"
          @cancel="onCancel"
          @input="inputSreach"
        />
      </form>
    </div>

    <!-- 历史记录 -->
    <div
      class="history"
      v-if="value.trim()===''&resultList.length===0"
    >
      <van-cell class="title">
        <p slot="title">历史记录</p>
      </van-cell>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onHistoryLoad"
      >
        <van-cell
          v-for="(item,index) in historyList"
          :key="index"
          :title="item"
          @click="clickHistory(item)"
        />
      </van-list>
    </div>

    <!-- 输入热更新 -->
    <div
      class="history"
      v-if="value.trim()!==''&&resultList.length ===0"
    >
      <van-cell class="title">
        <p slot="title">搜索建议</p>
      </van-cell>
      <van-list
        v-model="suggestLoading"
        :finished="suggestFinished"
        finished-text="没有更多了"
        @load="onSuggestLoad"
      >
        <van-cell
          v-for="item in suggestList"
          :key="item"
          :title="item"
          @click="clickSuggest(item)"
        >
          <van-icon
            slot="icon"
            name="search"
          />
        </van-cell>

      </van-list>
    </div>

    <!-- 搜索结果 -->
    <div
      class="history"
      v-if="resultList.length!==0"
    >
      <van-cell class="title">
        <p slot="title">搜索结果</p>
      </van-cell>
      <van-list
        v-model="resultLoading"
        :finished="resultFinished"
        finished-text="没有更多了"
        @load="onResultLoad"
      >
        <van-cell
          v-for="(obj,index) in resultList"
          :key="index"
          :title="obj.title"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
//引入请求文件
import { getSuggestAPI, getResultAPI } from '@/api/index.js'

export default {
  data () {
    return {
      value: '',
      page: 1,
      list: [],
      historyList: [],
      suggestList: [],
      resultList: [],
      loading: false,
      finished: false,
      suggestLoading: false,
      suggestFinished: false,
      resultLoading: false,
      resultFinished: false,
    };
  },
  methods: {
    async onSearch (value) {
      const res = await getResultAPI(value, this.page)
      this.resultList.push(...res.data.data.results)
      this.historyList.push(value.trim())
      this.historyList = [...new Set(this.historyList)]
    },
    async inputSreach () {
      if (this.value.trim() !== '') {
        const a = await getSuggestAPI(this.value)
        this.suggestList = a.data.data.options
      }
    },

    onCancel () {
      this.$toast('取消');
      this.resultList = []
    },
    onHistoryLoad () {
      this.loading = false;
      this.finished = true;
    },
    onSuggestLoad () {
      this.suggestLoading = false;
      this.suggestFinished = true;
    },
    onResultLoad () {
      this.resultLoading = false,
        this.resultFinished = true
    },

    clickSuggest (value) {
      this.onSearch(value)
      this.value = value
    },
    clickHistory (value) {
      this.onSearch(value)
      this.value = value
    }
  },

}

</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  top: 10px;
  right: 0px;
}
.sreach {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 48px;
  z-index: 1;
}
.van-icon-search {
  position: absolute;
  top: 18px;
  left: 15px;
  font-size: 14px;
  color: #c9c9c9;
}
.van-cell__title {
  padding-left: 22px;
}

/deep/.sreach-input {
  height: 48px;
}
/deep/.van-search__content--square {
  width: 29px;
  background-color: #f4f5f6;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
}
.van-search__action {
  font-size: 14px;
  color: #fff;
}

.van-field__control {
  width: 29px;
}

.history {
  margin-top: 48px;
}
.title {
  height: 40px;
  text-align: center;
  p {
    margin: 0;
    font-size: 13px;
    line-height: 36px;
  }
}
</style>