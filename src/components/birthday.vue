<template>
  <div class="birthday">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :show-toolbar=false
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      minDate: new Date(1996, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
}
</script>

<style lang="less" scoped>
/deep/.van-ellipsis {
  color: #333 !important;
}
</style>