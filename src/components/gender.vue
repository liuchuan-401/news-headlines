<template>
  <div class="gender">
    <van-picker
      :columns="columns"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['男', '女'],
    };
  },
  methods: {
    onChange (picker, value, index) {

    },
  },
}
</script>

<style lang="less" scoped>
/deep/.van-ellipsis {
  color: #333 !important;
}
</style>