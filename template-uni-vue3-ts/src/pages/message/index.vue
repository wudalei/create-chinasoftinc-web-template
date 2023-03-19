<template>
  <view class="index">
    消息页面

    <button @click="testRequest"> 加密 </button>
  </view>
</template>
<script setup lang="ts">
import request from '@/utils/request/request';

// 请求测试
const testRequest = async () => {
  const res = await request(`/api/createUser`, {
    method: 'POST',
    data: {
      name: '张三',
      age: 18,
    },
  });
  console.log('👴2023-03-18 11:19:13 index.vue line:20', res);
};
</script>
<style lang="scss" scoped>
.index {
  padding: 10px;
}
</style>
