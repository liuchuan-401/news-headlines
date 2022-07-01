<template>
  <div class="article-list">
    <ArticleItem :mychannelsList='mychannelsList' />
  </div>
</template>

<script>
// 引入请求文件
import { getChannlesListAPI } from '@/api/index.js'
// 引入组件
import ArticleItem from '@/components/article-item.vue'
export default {
  data () {
    return {
      pre_timestamp: '',
      mychannelsList: [],
    }
  },
  components: {
    ArticleItem,
  },
  props: {
    channel_id: {
      type: Number
    }
  },
  created () {
    try {
      this.onGetChannelsList()
    } catch (err) {
      this.$toast('获取文章列表失败')
    }
  },
  methods: {
    async onGetChannelsList () {
      // 获取频道文章列表
      const timestamp = this.pre_timestamp || Date.now();
      const channel_id = this.$props.channel_id;
      const res1 = await getChannlesListAPI(channel_id, timestamp)
      this.mychannelsList = res1.data.data.results;
      this.pre_timestamp = res1.data.data.pre_timestamp;
    }
  }
}
</script>

<style lang="less" scoped>
</style>