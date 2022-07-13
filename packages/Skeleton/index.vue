<template>
  <div :style="{'width': props.width+'px'}">
    <div class="Skeleton first"
    v-for="(item, index) in props.rows" :key="index"
    :class="[
      {
      'animation': props.animation,
      },
      classNameArr[renderArr[index]]
    ]"
    :style="{
      'width': props.rows===1?props.width+'px':'',
      'height': props.rows===1?props.height+'px':''
    }"
    ></div>
    <slot name="template"></slot>
  </div>
</template>

<script lang="ts" setup>
// classNameArr[renderArr]
import { ref, Ref } from "vue"
const props = defineProps({
  animation: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  },
  width: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false
  }
});
const classNameArr = ref([
  'first', 'second', 'third', 'fourth'
]);

// 摇号机
const renderRandom = (num: number): number[] => {
  const arr: number[]= [];
  while (num > 0) {
    const ran: number = parseInt(Math.random() * 4 + '') + 1;
    arr.push(ran);
    num--;
  };
  return arr
};

const renderArr: Ref<any> = ref([]);
renderArr.value = renderRandom(props.rows);
</script>

<style lang="scss" scoped>
.Skeleton{
  width: 100%;
  height: 26px;
  margin: 12px 0;
  box-sizing: border-box;
  border-radius: 12px;
  background: $colorH;
  overflow: hidden;
  &.first{
    width: 36%;
  }
  &.second{
    width: 58%;
  }
  &.third{
    width: 74%;
  }
  &.fourth{
    width: 96%;
  }
  &.animation {
    background: linear-gradient(90deg, $colorH 25%, $colorI 37%, $colorH 63%);
    background-size: 360% 80%;
    animation: skeleton-loading 1.4s infinite;
    @keyframes skeleton-loading {
        0% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0 50%
        }
    }
  }
}
</style>