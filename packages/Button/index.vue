<template>
  <button class="me-button" :class="[
    props.type, props.size,
    {
      round: props.round,
      disable: props.disable
    }
  ]">
    {{props.text}}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '按钮'
  },
  type: {
    type: String
  },
  size: {
    type: String,
    default: 'medium'
  },
  round: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.me-button{
  border: 1px solid $colorD;
  color: $default;
  font-size: $fontD;
  border-radius: 6px;
  background-color: #fff;
  font-weight: lighter;
  cursor: pointer;
  display: inline-block;
  transition: .1s;
  margin: 10px;
  &:hover{
    color: $colorB;
    background-color: $lightB;
    border-color: $colorB;
  }
  &.disable:hover{
    color: $default;
    background-color: #fff;
    border-color: $colorD;
  }
  &.info{
    background-color: $info;
    color: #fff;
    border-color: $info;
    &:hover{
      opacity: .8;
      border-color: $info;
    }
    &.disable:hover{
      color: #fff;
      border-color: $info;
      opacity: .6;
      background-color: $info;
    }
  }
  &.success{
    background-color: $success;
    color: #fff;
    border-color: $success;
    &:hover{
      opacity: .8;
      border-color: $success;
    }
    &.disable:hover{
      color: #fff;
      border-color: $success;
      opacity: .6;
      background-color: $success;
    }
  }
  &.warning{
    background-color: $warning;
    color: #fff;
    border-color: $warning;
    &:hover{
      opacity: .8;
      border-color: $warning;
    }
    &.disable:hover{
      color: #fff;
      border-color: $warning;
      opacity: .6;
      background-color: $warning;
    }
  }
  &.danger{
    background-color: $danger;
    color: #fff;
    border-color: $danger;
    &:hover{
      opacity: .8;
      border-color: $danger;
    }
    &.disable:hover{
      color: #fff;
      border-color: $danger;
      opacity: .6;
      background-color: $danger;
    }
  }
  &.medium{
    padding: 10px 18px;
    font-size: 16px;
  }
  &.small{
    padding: 8px 16px;
    font-size: 14px;
  }
  &.mini{
    padding: 6px 14px;
    font-size: 12px;
  }
  &.round{
    border-radius: 20px;
  }
  &.disable{
    cursor: not-allowed;
    opacity: .6;
  }
}
</style>