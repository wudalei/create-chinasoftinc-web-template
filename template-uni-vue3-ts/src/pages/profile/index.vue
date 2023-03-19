<template>
  <view class="index">
    <view>{{ counter.count }}</view>
    <view>{{ counter.doubleCount }}</view>

    <button @click="save"> 保存数据 </button>
  </view>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counter';
const counter = useCounterStore();

const save = () => {
  counter.increment(5);
};
</script>
<style lang="scss" scoped>
.index {
  padding: 40rpx;
}
</style>
