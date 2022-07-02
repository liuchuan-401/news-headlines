<template>
  <div class="nick-name">
    <van-field
      v-model="nick"
      rows="1"
      autosize
      label="昵称"
      type="textarea"
      maxlength="7"
      placeholder="请输入昵称"
      show-word-limit
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      nick: ''
    }
  }

}
</script>

<style lang="less" scoped>
</style>