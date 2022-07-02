<template>
  <div class="edit">
    <!-- 头部区域 -->
    <van-nav-bar
      title="个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="edit-bar"
    />

    <!-- 头像昵称部分 -->
    <van-cell-group>
      <van-uploader>
        <van-button
          block
          class="btn"
        >
          <van-cell
            slot="default"
            title="头像"
            is-link
            @click="upload"
          >
            <van-image
              slot="default"
              height="23"
              width="23"
              round
              fit='cover'
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <input
              type="file"
              name="upload"
              id="upload"
              style="display: none;"
            />
          </van-cell>
        </van-button>
      </van-uploader>

      <van-cell
        title="昵称"
        value="内容"
        is-link
        @click='show=true;titleName="更改昵称";componentName="Nick"'
      />

      <van-cell
        title="真实姓名"
        value="内容"
        is-link
        @click='show=true;titleName="真实姓名";componentName="Real"'
      />

    </van-cell-group>

    <!-- 性别生日部分 -->
    <van-cell-group style="margin-top: 10px;">
      <van-cell
        title="性别"
        value="内容"
        is-link
        @click='show=true;titleName="更改性别";componentName="Gender"'
      />
      <van-cell
        title="生日"
        value="内容"
        is-link
        @click='show=true;titleName="更改生日";componentName="Birthday"'
      />
      <van-cell
        title="个人简介"
        value="内容"
        is-link
        @click='show=true;titleName="个人简介";componentName="Info"'
      />

      <!-- 弹出层 -->
      <van-action-sheet
        v-model="show"
        :title="titleName"
      >
        <div class="content">
          <component :is="componentName"></component>
        </div>
      </van-action-sheet>
    </van-cell-group>
  </div>
</template>

<script>
//引入组件
import Nick from '@/components/nick-name.vue'
import Real from '@/components/real-name.vue'
import Gender from '@/components/gender.vue'
import Birthday from '@/components/birthday.vue'
import Info from '@/components/person-info.vue'

export default {
  data () {
    return {
      show: false,
      titleName: '',
      componentName: ''
    }
  },
  components: {
    Nick,
    Real,
    Gender,
    Birthday,
    Info,
  },
  methods: {
    // 标题栏功能区域
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {

    },

    upload () {

    }
  },
}
</script>

<style lang="less" scoped>
// border-bottom: 0.02667rem solid #ebedf0
.content {
  padding: 16px 16px 160px;
}
/deep/.btn {
  width: 375px !important;
}
/deep/.van-button__text {
  width: 375px !important;
}
/deep/.van-button--block {
  padding: 0px;
}
.van-cell__title{
  text-align: left;
  font-size: 16px;
}
.edit {
  height: 667px;
  background-color: rgb(245, 247, 249);
}
.edit-bar {
  background-color: #1989fa;
}
/deep/.van-nav-bar__arrow {
  font-size: 19px;
  color: #fff;
}
/deep/ .van-ellipsis {
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
}
/deep/.van-nav-bar__text {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}

/deep/.van-cell__title {
  font-size: 14px;
  color: #333333;
}
</style>