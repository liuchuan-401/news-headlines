<template>
  <div class="article-item">
      <van-cell-group
        inset
        v-for="(obj,index) in mychannelsList"
        :key="index"
      >
        <van-cell>
          <div
            slot="title"
            class="article-list-title"
          >{{obj.title}}</div>
          <div
            slot="label"
            class="article-list-label"
          >
            <div
              v-if="obj.cover.type===3"
              class="article-list-label-img"
            >
              <van-image
                v-for="(item,index) in obj.cover.images"
                :src="''+item"
                class="article-list-label-img-item"
              />
            </div>
            <p class="article-list-text">{{obj.aut_name}}</p>
            <p class="article-list-text">{{obj.comm_count}}评论</p>
            <p class="article-list-text">{{obj.pubdate| moment("from")}}</p>
          </div>
          <div
            slot="right-icon"
            class="article-list-btn"
          >x</div>
          <van-image
            v-if="obj.cover.type===1"
            :src="obj.cover.images[0]"
            class="article-list-img"
          />
        </van-cell>
      </van-cell-group>
  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    mychannelsList: {
      type: Array
    }
  }

}
</script>

<style lang="less" scoped>
// 标题
.article-list-title {
  font-size: 16px;
  letter-spacing: 1px;
  color: #3a3a3a;
}
.article-list-label-img-item {
  margin-top: 15px;
  width: 116px;
  height: 73px;
}
.van-cell-group--inset {
  margin: 0;
}
.van-cell {
  padding: 5px 12px;
}
.article-list-text {
  margin-left: 5px;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  color: #b4b4b4;
}
/deep/.van-cell__value {
  width: 0px !important;
  height: 73px;
}
.article-list-img {
  margin-top: 5px;
  width: 116px;
  height: 73px;
}
.article-list-btn {
  position: absolute;
  right: 11px;
  bottom: 30px;
  width: 8px;
  height: 8px;
  font-size: 8px;
  color: #b4b4b4;
}
</style>



