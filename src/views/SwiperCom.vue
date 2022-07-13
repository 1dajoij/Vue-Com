<template>
  <div class="swiper">
    <div class="swiperCom">
      <div class="kuang">
        <me-swiper :list="list" fit="cover" :options="options"
        @swiper-click="callback"/>
      </div>
    </div>
    <ul class="options" @click="target($event)" ref="ipt">
      <li class="item">
        <div class="checkbox">
          <input class="single" type="checkbox" id="pagerBTN"/>
          <label for="pagerBTN"></label>
          <span>分页器</span>
        </div>
      </li>
      <li class="item">
        <div class="checkbox">
          <input class="single" type="checkbox" id="loopBTN"/>
          <label for="loopBTN"></label>
          <span>无限循环</span>
        </div>
      </li>
      <li class="item">
        <div class="checkbox">
          <input class="single" type="checkbox" id="autoplayBTN"/>
          <label for="autoplayBTN"></label>
          <span>自动播放</span>
        </div>
      </li>
      <!-- <li class="item ipt">
        <input type="text" v-model="interval">
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, computed, reactive, getCurrentInstance, onMounted } from "vue"
const list = ref([ // swiper 列表
  require("@/assets/img/swiper001.jpg"),
  require("@/assets/img/swiper002.png"),
  require("@/assets/img/swiper003.png"),
  require("@/assets/img/swiper004.jpg"),
  require("@/assets/img/swiper005.png")
]);
const { proxy }: any = getCurrentInstance();
// const interval: Ref<number> = ref(1500);
const options = reactive({
  showPager: true, // 分页器
  autoplay: true, // 自动播放
  interval: 1500, // 轮询间隔
  loop: true, // 循环播放 false 仅轮询一次
});
// 选择框中的事件
const target = (ev: any): void =>  { // 事件委托
  if (ev.target.className === 'single') {
    if (ev.target.id === 'pagerBTN') {
      options.showPager = ev.target.checked;
    } else if (ev.target.id === 'loopBTN') {
      options.loop = ev.target.checked;
    } else if (ev.target.id === 'autoplayBTN') {
      options.autoplay = ev.target.checked;
    }
  };
};
const callback = (V: any) => {
  if (options.loop) {
    proxy.$message({
      msg: `这是第${V}个图片`,
      type: 'success'
    });
  } else {
    proxy.$message({
      msg: `这是第${V+1}个图片`,
      type: 'success'
    });
  }
};
onMounted(() => {
  proxy.$nextTick(() => {
    const els = proxy.$refs.ipt.querySelectorAll('.single');
    els.forEach((item: any) => {
      item.checked = true;
    })
  });
});
</script>

<style lang="scss" scoped>
.swiper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .swiperCom{
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    .kuang{
      width: 864px;
      height: 468px;
    }
  }
  .options{
    margin: 66px 84px;
    border: 3px solid $colorB;
    border-radius: 12px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      padding: 0 24px;
      width: auto;
      height: 64px;
      display: flex;
      align-items: center;
      .checkbox{
        width: auto;
        height: 28px;
        display: flex;
        align-items: center;
        input{
          visibility: hidden;
        }
        input + label{
          display: block;
          width: 18px;
          height: 18px;
          cursor: pointer;
          position: relative;
          top: 0;left: 0;
          border: 1px solid $colorB;
          background: $colorA;
          border-radius: 6px;
          overflow: hidden;
        }
        input:checked + label::after{
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          line-height: 18px;
          content: "\2713";
          text-align: center;
          font-size: 16px;
          color: white;
          background: $colorB;
        }
        span{
          text-indent: 12px;
          font-size: $fontC;
          font-weight: lighter;
          color: $colorE;
        }
        input:checked ~ span{
          color: $colorB;
        }
      }
    }
    // li.ipt{
    //   padding: 0 18px;
    //   input{
    //     width: 66px;
    //     background-color: $colorA;
    //     font-size: $fontD;
    //     color: $colorE;
    //   }
    // }
  }
}
</style>