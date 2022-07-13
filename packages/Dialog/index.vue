<template>
  <div :class="propsShow?'Masklayer':''"></div>
  <transition name="dialog" mode="out-in">
    <div class="dialog" v-show="propsShow">
      <div class="top_title">
        <span class="text">提示</span>
        <span class="icon iconfont icon-guanbi"
        @click="propsShow = false"></span>
      </div>
      <div class="dialog_main">
        <span>{{props.msg}}</span>
      </div>
      <div class="dialog_btn">
        <button class="resolve" @click="callback">确认</button>
        <button class="reject" @click="propsShow = false">取消</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { getCurrentInstance, computed } from "vue"
const emits = defineEmits(['update:visible', 'call-back'])
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  msg: {
    type: String,
    required: true
  }
});

const propsShow = computed({
  get: () => {
    return props.visible
  },
  set: (bool: boolean) => {
    emits('update:visible', bool)
  } 
});
const callback = () => {
  emits("call-back");
  emits('update:visible', false);
}
</script>

<style lang="scss" scoped>
.Masklayer{
  position: fixed;
  left: 0;right: 0;top: 0;bottom: 0;
  background: rgba(0,0,0,.6);
  z-index: 9998;
}
.dialog{
  position: fixed;
  left: 50%;top: 160px;
  transform: translate(-50%, 0px);
  width: 30%;
  min-width: 264px;
  height: auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  z-index: 9999;
  .top_title{
    width: 100%;
    height: 46px;
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
      font-size: $fontC;
      font-weight: lighter;
      line-height: 46px;
      margin-left: 18px;
    }
    .icon{
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      margin-right: 16px;
      cursor: pointer;
      &:hover{
        color: $colorB;
      }
    }
  }
  .dialog_main{
    padding: 12px 18px 24px;
    font-size: $fontD;
    color: $colorC;
  }
  .dialog_btn{
    width: 100%;
    height: auto;
    padding: 12px 0 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button{
      width: 88px;
      height: 46px;
      line-height: 46px;
      font-size: $fontD;
      font-weight: lighter;
      border-radius: 4px;
      cursor: pointer;
      &.resolve{
        background: $colorB;
        color: #fff;
        &:hover{
          opacity: .8;
        }
      }
      &.reject{
        background: #fff;
        border: 1px solid $colorD;
        &:hover{
          background-color: #cbf5da;
          color: $colorB;
        }
      }
    }
  }
}
.dialog-enter-active, .dialog-leave-active{
  transition: all .4s;
}
.dialog-enter-from, .dialog-leave-to{
  opacity: 0;
  transform: translate(-50%, -36px);
}
.dialog-leave-from, .dialog-enter-to{
  opacity: 1;
  transform: translate(-50%, 0px);
}
</style>