<template>
  <div class="SelectCom" v-ClickNode>
    <span class="icon iconfont icon-xiangxiajiantou"
    :class="active?'rotate':''"
    ></span>
    <input type="text" readonly v-model="props.value"
    :class="props.disable?'stop':''"
    ref="ipt"
    >
    <transition name="fade">
      <ul class="xl-select" v-show="active">
        <li class="xl-select-item"
        :class="{active: props.value == item.value, stop: item.disable}"
        v-for="(item, index) in props.options"
        :key="index" @click="change(item)">{{item.value || item}}</li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, watch } from "vue";

interface ColumnProps {
  value: string,
  disable?: boolean
}

const props = defineProps({
  value: {
    required: true,
    type: [String, Number, Boolean]
  },
  options: {
    required: true,
    type: Array as PropType<ColumnProps[]>
  },
  disable: {
    type: Boolean,
    default: false
  }
});

const vClickNode = {
  beforeMount(el) {
    const handle = (e) => {
      if (!props.disable && el.contains(e.target)) {
        active.value = true;
        (/xl-select-item/igs.test(e.target.className)) &&
        !(/stop/igs.test(e.target.className))
        && (active.value = false);
      } else {
        active.value = false;
      }
    };
    document.addEventListener('click', handle);
  }
};

const emits = defineEmits(['update:value']);

const change = (item: any): void => {
  item.disable ? '' : emits("update:value", item.value || item);
};

const active = ref(false);

watch(() => props.value, () => {
  active.value = false;
});
</script>

<style lang="scss" scoped>
.SelectCom{
  width: 212px;
  height: 44px;
  position: relative;
  input{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #fff;
    font-size: $fontD;
    color: $colorG;
    text-indent: 24px;
    border: 1px solid $colorD;
    transition: border-color .4s;
    &:focus{
      border-color: $colorB;
    }
    &.stop{
      cursor: not-allowed;
      background: #f5f7fa;
    }
  }
  .icon{
    width: 14px;
    height: 14px;
    transition: transform .4s;
    color: $colorG;
    transform: rotate(0deg);
    position: absolute;
    right: 16px;
    top: calc(50% - 7px);
    &.rotate{
      transform: rotate(-180deg);
    }
  }
  .xl-select{
    width: 100%;
    height: auto;
    position: absolute;
    top: 56px;
    border-radius: 6px;
    border: 1px solid $colorD;
    background: #fff;
    z-index: 20;
    &::before{
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      border: 1px solid $colorD;
      border-right: none;
      background: #fff;
      border-bottom: none;
      left: 24px;top: -4px;
      transform: rotate(45deg);
    }
    &-item {
      height: 32px;
      margin: 2px 0;
      font-size: $fontD;
      color: $colorG;
      text-indent: 24px;
      line-height: 32px;
      cursor: pointer;
      &:hover{
        background: rgba(96, 98, 102, .08);
      }
      &.active{
        color: $colorB;
        font-weight: bold;
      }
      &.stop{
        cursor: not-allowed;
        color: $colorD;
        &:hover{
          background: #fff;
        }
      }
    }
  }
}
.fade-enter-from, .fade-leave-to{
  transform: scaleY(0);
}
.fade-enter-to, .fade-leave-from{
  transform: scaleY(1);
}
.fade-enter-active, .fade-leave-active{
  transform-origin: top left;
  transition: 0.2s;
}
</style>