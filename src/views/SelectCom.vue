<template>
  <div class="select">
    <div class="normal example">
      <h2>基础用法</h2>
      <MeSelect :options="options1" v-model:value="value1"/>
    </div>
    <div class="normal example">
      <h2>有禁用选项用法</h2>
      <MeSelect :options="options" v-model:value="value"/>
    </div>
    <div class="normal example">
      <h2>禁用状态</h2>
      <MeSelect :options="options" v-model:value="value2" :disable="true"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
const value = ref(1);
const value1 = ref(1);
const value2 = ref('请选择');
const options = reactive([
  {
    value: 1
  },
  {
    value: 2,
    disable: true
  },
  {
    value: 3
  }
]);
const options1 = reactive([
  {
    value: 1
  },
  {
    value: 2
  },
  {
    value: 3
  }
])

</script>

<style lang="scss" scoped>
.select{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>