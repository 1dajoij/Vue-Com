<template>
  <div class="switch-button">
    <input type="checkbox" @click="toggleStyle($event)" :id="props.id" name="switch"
    class="switch" :disabled="props.disabled">
    <label :for="props.id" class="switch-label"
    :class="classEs">
      <span ref="Switch" class="circle"></span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, reactive, onMounted } from "vue"
const { proxy }: any = getCurrentInstance();
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  model: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    default: '#13ce66'
  },
  inactiveColor: {
    type: String,
    default: '#ccc'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    default () {
      return {
        width: '80px',
        height: '90px'
      }
    }
  }
});
interface options{
  left: number
};
const classEs = computed(() => {
  return {
    disable: props.disabled,
  }
});
const options: options = reactive({
  left: 0, // 组件中的小球 移动的距离
});
onMounted(() => {
  options.left = proxy.$refs.Switch.parentNode.offsetWidth - proxy.$refs.Switch.offsetWidth;
});
const toggleStyle = (el: any) => {
  const Switch = proxy.$refs.Switch;
  if (el.target.checked) {
    Switch.style.left = `${options.left}px`;
    Switch.parentNode.style.background = props.activeColor;
    Switch.parentNode.style.boxShadow = `${props.activeColor} 0 0 0 2px`
  } else {
    Switch.style.left = `0px`;
    Switch.parentNode.style.background = props.inactiveColor;
    Switch.parentNode.style.boxShadow = `${props.inactiveColor} 0 0 0 2px`
  }
}
</script>

<style lang="scss" scoped>
.switch-button{
  position: relative;
  width: 80px;
  height: 30px;
  display: flex;
  .switch{
    display: none;
  }
  .switch-label{
    width: 80px;
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
    transition: all 0.3s;
    background-color: #ccc;
    box-shadow: #ccc 0 0 0 2px;
    &.disable{
      cursor: not-allowed;
    }
    .circle{
      position: absolute;
      top: 0;left: 0;
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 100%;
      transition: left 0.3s;
    }
  }
  // .switch:checked + .switch-label {
  //   background-color: $colorB;
  //   box-shadow: $colorB 0 0 0 2px;
  //   .circle{
  //     left: 50px;
  //   }
  // }
}
</style>