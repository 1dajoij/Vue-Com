<template>
  <div class="head">
    <div class="title">
      Vue-Com
    </div>
    <!-- <div class="control">
      组件列表
    </div> -->
    <!-- <div class="search">
      <input type="text" placeholder="目前还不确定怎么做">
      <button>搜索</button>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.head{
  width: 100%;
  height: 88px;
  display: flex;
  color: $colorC;
  line-height: 88px;
  font-weight: lighter;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 $colorE;
  .title{
    height: 100%;
    padding: 0 46px;
    font-size: $fontA;
  }
  .control {
    padding: 0 46px;
    font-size: $fontB;
  }
  .search{
    width: 256px;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 46px;
    input{
      width: 100%;
      height: 36px;
      color: $colorE;
      padding: 0 24px;
      border-radius: 24px 0 0 24px;
      transition: border-color 0.6s ease;
      &:focus{
        border: 1px solid $colorB;
      }
    }
    button{
      width: 84px;
      height: 36px;
      padding: 0 16px;
      border-radius:  0 24px 24px 0;
      background: $colorB;
      color: $colorE;
    }
  }
}
</style>