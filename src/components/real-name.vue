<template>
  <div class="nick">
    <van-field
      v-model="name"
      label="姓名"
      placeholder="请输入真实姓名"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>