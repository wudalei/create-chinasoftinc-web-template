<template>
  <view class="content-bg">
    <view class="text-p" @click="goNext"> 跳转655 555</view>
    <view class="content-p" @click="syncChange">同步修改数据</view>
    <view class="content-p" @click="waitChange">异步修改数据</view>

    <view class="content-p">缓存数据 :{{ user.userInfo }}</view>

    <view class="content-p" @click="queryLookFun">点击发送请求</view>

    <input class="input-l" type="text" placeholder="请输入" />
  </view>
</template>

<script setup lang="ts">
import { queryLook } from '../../api/index';
import { useUserStore } from '@/store/modules/user';
const env = import.meta.env;
console.log('获取的当前环境变量', env);

const user = useUserStore();

const goNext = () => {
  uni.navigateTo({
    url: '/pages/next/index',
  });
};

const syncChange = () => {
  user.setUserInfo({
    name: 'liuxiang',
  });
};
const waitChange = async () => {
  await user.setUserInfoForWait({
    name: 'liuxiang2',
  });
  console.log('👴修改完成');
};

const queryLookFun = async () => {
  const res = await queryLook({});
  console.log('获取返回数据', res);
};
</script>

<style lang="scss" scoped>
.content-bg {
  .text-p {
    font-size: 50rpx;
    font-weight: 500;
    text-align: center;
    width: 100%;
    height: 200rpx;
    line-height: 200rpx;
    margin-top: 200rpx;
    color: $uni-color-primary;
  }

  .content-p {
    font-size: 30rpx;
    text-align: center;
    width: 100%;
    height: 50rpx;
    line-height: 50rpx;
    margin-top: 30rpx;
    color: red;
  }
  .input-l {
    line-height: 70rpx;
    height: 70rpx;
    margin-top: 50rpx;
    border: 1px solid #eee;
    padding-left: 20rpx;
    padding-right: 20rpx;
    margin-left: 5%;
    width: 80%;
  }
}
</style>
