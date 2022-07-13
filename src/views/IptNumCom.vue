<template>
  <div class="box">
    <div class="normal example">
      <h2>基础用法</h2>
      <MeIptNum/>
    </div>
    <div class="normal example">
      <h2>限制最大最小值</h2>
      <MeIptNum :max="10" :min="-10"/>
    </div>
    <div class="normal example">
      <h2>可设置步长</h2>
      <MeIptNum :step="2"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .example{
    margin-left: 164px;
  }
}
</style>