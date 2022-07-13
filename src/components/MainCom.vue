<template>
  <div class="main">
    <div class="left">
      <h2 class="title">组件列表</h2>
      <ul>
        <li :class="$route.name === 'Swiper'?'active':''">
          <router-link :to="{name: 'Swiper'}">Swiper组件</router-link>
        </li>
        <li :class="$route.name === 'Button'?'active':''">
          <router-link :to="{name: 'Button'}">Button组件</router-link>
        </li>
        <li :class="$route.name === 'Switch'?'active':''">
          <router-link :to="{name: 'Switch'}">Switch开关组件</router-link>
        </li>
        <li :class="$route.name === 'IptNum'?'active':''">
          <router-link :to="{name: 'IptNum'}">计数器组件</router-link>
        </li>
        <li :class="$route.name === 'Select'?'active':''">
          <router-link :to="{name: 'Select'}">Select选择器组件</router-link>
        </li>
        <li :class="$route.name === 'Pagination'?'active':''">
          <router-link :to="{name: 'Pagination'}">分页器组件</router-link>
        </li>
        <li :class="$route.name === 'Dialog'?'active':''">
          <router-link :to="{name: 'Dialog'}">Dialog弹出层组件</router-link>
        </li>
        <li :class="$route.name === 'Skeleton'?'active':''">
          <router-link :to="{name: 'Skeleton'}">骨架屏组件</router-link>
        </li>
        <li :class="$route.name === 'Message'?'active':''">
          <router-link :to="{name: 'Message'}">Message消息提示组件</router-link>
        </li>
        <!--
        <li :class="$route.name === 'Bread'?'active':''">
          <router-link :to="{name: 'Bread'}">Bread面包屑导航组件</router-link>
        </li>-->
      </ul>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.main{
  height: calc(100vh - 88px);
  width: 100%;
  display: flex;
  .left{
    width: 186px;
    height: 100%;
    display: flex;
    background: $colorB;
    flex-direction: column;
    overflow-y: auto;
    .title{
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      font-size: $fontB;
      font-weight: 300;
      color: $colorA;
    }
    ul{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      li{
        padding: 16px 0;
        text-align: center;
        font-weight: 300;
        font-size: $fontC;
        &.active{
          a{
            color: $colorC;
          }
        }
        a{
          color: $colorA;
        }
      }
    }
  }
  .right{
    width: 100%;
    height: 100%;
  }
}
</style>