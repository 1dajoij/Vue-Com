<template>
  <div class="switch">
    <div class="normal example">
      <h2>基础用法</h2>
      <me-switch id="first-switch"/>
    </div>
    <div class="disable example">
      <h2>禁用状态</h2>
      <me-switch id="second-switch" :disabled='true'/>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.switch{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>