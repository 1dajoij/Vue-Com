<template>
  <div class="ButtonCom">
    <div class="disable example">
      <h2>基础用法</h2>
      <div class="size-box">
        <me-button text="默认按钮"/>
        <me-button text="小型按钮" size="small"/>
        <me-button text="迷你按钮" size="mini"/>
      </div>
      <div class="color-box">
        <me-button text="信息按钮" type="info"/>
        <me-button text="成功按钮" type="success"/>
        <me-button text="警告按钮" type="warning"/>
        <me-button text="危险按钮" type="danger"/>
      </div>
      <div class="border-box">
        <me-button text="默认按钮" round/>
        <me-button text="小型按钮" size="small" round/>
        <me-button text="迷你按钮" size="mini" round/>
      </div>
      <div class="disable-box">
        <me-button text="默认按钮" disable/>
        <me-button text="信息按钮" type="info" disable/>
        <me-button text="成功按钮" type="success" disable/>
        <me-button text="警告按钮" type="warning" disable/>
        <me-button text="危险按钮" type="danger" disable/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>