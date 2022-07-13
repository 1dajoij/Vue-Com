<template>
  <div class="dialog">
    <div class="normal example">
      <h2>基础用法</h2>
      <div class="btn" @click="activeDialog = true">
        点我打开Dialog
      </div>
      <MeDialog v-model:visible="activeDialog" msg="这是一段信息"
      @call-back="dialog"/>
      <h3 class="sl t-left">
        目前仅支持 visible: 可见 与 msg: 文字内容，支持 call-back 事件
      </h3>
      <h3 class="sl t-left">
        注: visible需要使用v-model前缀
      </h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from "vue";
const { proxy }: any = getCurrentInstance();
const activeDialog = ref(false);

const dialog = () => {
  proxy.$message({
    msg: '确认成功',
    type: 'success'
  });
}
</script>