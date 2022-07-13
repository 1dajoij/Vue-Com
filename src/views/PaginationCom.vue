<template>
  <div class="PaginationCom">
    <div class="normal example">
      <h2>基础用法</h2>
      <div class="box">
        <h3 class="sl">页数较少时效果</h3>
        <MePagination :total="7" @current-change="a"/>
        <h3 class="sl">页数较多时效果</h3>
        <MePagination :total="50" @current-change="a"/>
        <h3 class="sl">目前支持 total:总页数 currentPage:当前页 两个参数</h3>
        <h3 class="sl">支持事件 current-change 改变页数时触发 第一个参数为第几页</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue"
const { proxy }: any = getCurrentInstance();
const a = (item: number) => {
  proxy.$message({
    msg: `这是第${item}页`
  });
};
</script>

<style lang="scss" scoped>
.box{
  width: 46%;
  height: auto;
}
</style>