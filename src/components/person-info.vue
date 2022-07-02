<template>
  <div class="person-info">
    <van-field
      v-model="intro"
      rows="2"
      autosize
      label="留言"
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      intro:''
    }
  }
}
</script>

<style lang="less" scoped>
</style>