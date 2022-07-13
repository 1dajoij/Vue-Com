<template>
  <div class="Message" :class="[props.type]">
    <span v-if="props.type === 'success'" class="icon iconfont icon-chenggong"></span>
    <span v-if="props.type === 'danger'" class="icon iconfont icon-cuowu"></span>
    <span v-if="props.type === 'warning'" class="icon iconfont icon-jinggao"></span>
    <span v-if="props.type === 'info'" class="icon iconfont icon-xinxi-yuankuang"></span>
    <span>{{props.msg}}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  msg: {
    type: String,
    default: '这是一条信息'
  },
  type: {
    type: String,
    default: 'info'
  }
})

</script>

<style lang="scss" scoped>
.Message{
  z-index: 9999;
  padding: 0 24px;
  width: auto;
  height: 62px;
  background: $colorD;
  border-radius: 4px;
  position: fixed;
  top: 0px;left: 50%;
  transform: translate(-50%, 48px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: msgshow .4s 1;
  @keyframes msgshow {
    from{
      transform: translate(-50%, -48px);
    }
  }
  .icon{
    width: 24px;
    height: 24px;
  }
  span{
    line-height: 24px;
    font-size: $fontD;
    font-weight: lighter;
    color: #fff;
  }
  &.success{
    color: $success;
    background: $success;
  }
  &.warning{
    color: $warning;
    background: $warning;
  }
  &.danger{
    color: $danger;
    background: $danger;
  }
}
</style>