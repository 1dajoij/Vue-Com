<template>
  <div class="MessageCom">
    <div class="normal example">
      <h2>基础用法</h2>
      <div class="btn" @click="open('info')">
        点我打开 Message
      </div>
    </div>
    <div class="normal example box">
      <h2>不同状态</h2>
      <me-button text="信息按钮" type="info" @click="open('info')"/>
      <me-button text="成功按钮" type="success" @click="open('success')"/>
      <me-button text="警告按钮" type="warning" @click="open('warning')"/>
      <me-button text="危险按钮" type="danger" @click="open('danger')"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue"
const { proxy }: any = getCurrentInstance();
const open = (type: string) => {
  proxy.$message({
    msg: '这是一条信息',
    type
  });
};
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  flex-wrap: wrap;
  h2{
    width:100%;
  }
  .btn{
    padding: 8px 12px;
    margin: 0 12px;
    border: 1px solid $colorD;
    border-radius: 6px;
  }
}
</style>