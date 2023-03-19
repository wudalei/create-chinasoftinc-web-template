<template>
  <div v-if="list" class="foot-bg">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="foot-item"
      :class="{ 'foot-select': select == index }"
      @click="didClick(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'Foot',
  props: {
    list: {
      type: Array<any>, //类型
      default: null, //默认值
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      select: 0,
    });
    const didClick = (index: number) => {
      state.select = index; // 修改的是reactive 数据不需要使用value
      emit('callBack', index);
    };
    return {
      ...toRefs(state), // 把数据中包装为ref 对象，并返回包含这些ref对象
      didClick,
    };
  },
});
</script>

<style scoped lang="scss">
.foot-bg {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: red;
  .foot-item {
    color: white;
    width: 30%;
    font-size: 15px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .foot-select {
    background-color: brown !important;
  }
}
</style>
