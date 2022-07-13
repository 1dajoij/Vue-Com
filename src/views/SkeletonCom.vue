<template>
  <div class="Skeleton">
    <div class="normal example">
      <h2>基础用法</h2>
      <MeSkeleton :rows="2"/>
    </div>
    <div class="normal example">
      <h2>动画效果</h2>
      <MeSkeleton :animation="true" :rows="2"/>
    </div>
    <div class="normal example">
      <h2>插槽 template </h2>
      <div class="template">
        <MeSkeleton :animation="true" :rows="1" width="246"
        height="288">
          <template v-slot:template>
            <MeSkeleton :animation="true" :rows="2"/>
          </template>
        </MeSkeleton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.Skeleton{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .box{
    width: 420px;
    height: 26px;
  }
  .template{
    width: 460px;
    height: 280px;
  }
}
</style>