<template>
  <div class="iptnum">
    <button @mousedown="open(0)" @mouseup="close" @click="Num(0)"
    :class="num == props.min?'stop':''">-</button>
    <input type="text" v-model="num" @blur="Blur($event)" @input="Input($event)">
    <button @mousedown="open(1)" @mouseup="close" @click="Num(1)"
    :class="num == props.max?'stop':''">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, watch } from "vue"
const props = defineProps({
  value: { // 绑定值
    type: Number,
    default: 0
  },
  min: { // 最小值
    type: Number,
    default: -Infinity
  },
  max: { // 最大值
    type: Number,
    default: Infinity
  },
  step: { // 步长
    type: Number,
    default: 1
  }
});
// 绑定的值
const num: Ref<number> = ref(props.value);
// 实现长按的开关
const timer: any = ref(null);
const BackNum = () => { // 限制最大最小值
  props.max && num.value > <number>props.max ?
    num.value = props.max : '';
  props.min && num.value < <number>props.min ?
    num.value = props.min : '';
};
const Num = (type: 1 | 0): void => {
  if (type) {
    num.value += props.step;
  } else {
    num.value -= props.step;
  };
  BackNum();
};
const open = (type: 1 | 0): void => {
  timer.value = setInterval(() => {
    Num(type);
  }, 100);
};
const close = (): void => {
  clearInterval(timer.value);
};
// 保证input中不能修改值为其他类型
const OldNum: Ref<number> = ref(0);
const Focus = () => {
  OldNum.value = num.value;
};
const Blur = (el) => {
  if (typeof el.target.value !== "number") {
    num.value = OldNum.value;
  };
  BackNum();
};
const Input = (el) => {
  if (typeof el.target.value === "number") { // 两个按钮触发
    OldNum.value = num.value;
  } else if (Number(el.target.value) === Number(el.target.value)) {
    OldNum.value = num.value;
  }
};
watch(() => num.value, () => {
  if (typeof num.value === 'number') {
    OldNum.value = num.value;
  };
  if (typeof num.value === 'string') {
    if (Number(num.value) === Number(num.value)) {
      num.value = Number(num.value)
    }
  };
})
</script>

<style lang="scss" scoped>
.iptnum{
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  border: 1px solid $colorD;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  font-size: $fontB;
  transition: .4s;
  button{
    width: 45px;
    height: 100%;
    background: $colorF;
    color: rgba(96, 98, 102, 1);
    font-size: $fontB;
    font-weight: lighter;
    cursor: pointer;
    transition: color .4s;
    &.stop{
      cursor: not-allowed;
      color: rgba(96, 98, 102, .6);
    }
  }
  input{
    width: 150px;
    border: 1px solid $colorD;
    border-top: none;
    border-bottom: none;
    text-align: center;
    font-size: $fontC;
    font-weight: lighter;
  }
  &:hover{
    border-color: $colorB;
  }
}
</style>