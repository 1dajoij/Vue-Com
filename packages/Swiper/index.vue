<template>
  <div class="swiper" ref="singleWidth" @mousemove.prevent>
    <!--swiper显示页-->
    <div class="swiper_box">
      <ul class="swiper_list" :style="[width, transfrom]"
      ref="transition" @mouseenter="ClearTimer"
      @mouseleave="SetTimer">
        <li class="swiper_item" v-for="(item,index) in exchange"
        :key="index" :style="{width: slideStyle.width+'px'}"
        @mousedown="MouseStart($event)"
        @mousemove="MouseMove($event)"
        @mouseup="MouseEnd($event)"
        >
          <img @click.stop="upload(index)" :src="item" :style="[fit]">
        </li>
      </ul>
      <div class="prev btn" @click.stop="prevItem"
      @mouseenter="ClearTimer" @mouseleave="SetTimer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangzuojiantou"></use>
        </svg>
      </div>
      <div class="next btn" @click.stop="nextItem"
      @mouseenter="ClearTimer" @mouseleave="SetTimer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
      </div>
      <!--swiper分页器-->
      <ul class="swiper_pager" v-if="options.showPager"
      @mouseenter="ClearTimer" @mouseleave="SetTimer">
        <li class="swiper_pager_item" v-for="(item,index) in props.list"
        :key="index" :class="{active: selected === index}"
        @click="toggle(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  reactive,
  computed,
  onMounted,
  getCurrentInstance,
  onBeforeUnmount,
} from 'vue';
const { proxy }: any = getCurrentInstance();
// 组件属性
const props = defineProps({
  list: { // 渲染列表
    type: Array,
    required: true
  },
  fit: { // 图片填充效果
    type: String,
    default: 'fill'
  },
  options: { // swiper属性
    type: Object,
    default () {
      return {
        showPager: true, // 分页器
        autoplay: true, // 自动播放
        interval: 1500, // 轮询间隔
        loop: false, // 循环播放 false 仅轮询一次
      }
    }
  }
});
const fit = computed((): any => {
  return {
    objectFit: props.fit
  }
});
interface slideStyle {
    width: number,
    totalwidth: number,
    left: number,
    copyleft: number,
    loopleft: number,
    selected: number
};
const slideStyle: slideStyle = reactive({
  width: 0, // 页面宽度
  totalwidth: 0, // 合计宽度
  left: 0, // loop==false时使用的值
  copyleft: 0, // copy 的 left
  loopleft: 0, // loop==true时使用的值
  selected: 0, // 当前显示图片的index
});
// swiper组件宽度
const width = computed(() => { // slide 内部宽度
  return {
    width: slideStyle.totalwidth + 'px'
  }
});
const resetStyle = (): void => {
  slideStyle.width = proxy.$refs.singleWidth.offsetWidth;
  slideStyle.totalwidth = slideStyle.width * exchange.value.length;
};
onMounted(() => {
  resetStyle();
  if (props.options.loop) {
    slideStyle.left = -slideStyle.width;
    slideStyle.selected = 1;
  };
  if (props.options.autoplay) {
    clearInterval(autoplayTimer.value);
    autoplayTimer.value = setInterval(() => {
      transition(proxy.$refs.transition, 1);
    }, props.options.interval);
  };
});
watch(() => props.list.length, () => {
  resetStyle();
});
// swiper滑动效果
const transfrom = computed(() => {
  return {
    transform: 'translateX(' + slideStyle.left + 'px)'
  }
});
interface touch {
  start: number,
  allow: boolean,
  moveAllow: boolean,
  loading: boolean,
};
const touch: touch = reactive({
  start: 0, // 滑动事件需要的起始位置
  allow: false, // 滑动允许
  moveAllow: false, // 滑动阈值
  loading: false, // transition 中
});
const transition = (el: Element, indexTo: 1 | 0 | -1): void => {
  touch.allow = false;
  touch.loading = true;
  el.classList.add('transition');
  let timer: any, timer1: any = null;
  timer = setTimeout(() => {
    const prev = -((slideStyle.selected - 1) * slideStyle.width);
    const next = -((slideStyle.selected + 1) * slideStyle.width);
    if (indexTo === 1) {
      const bestX = -(exchange.value.length * slideStyle.width);
      slideStyle.left = (next <= bestX ?
        bestX + slideStyle.width :
        next);
      (next > bestX) && (slideStyle.selected++);
    } else if (indexTo === -1) {
      slideStyle.left = (prev > 0 ? 0 : prev);
      (prev <= 0) && (slideStyle.selected--);
    } else {
      slideStyle.left = -(slideStyle.width * slideStyle.selected)
    };
    if (props.options.loop) {
      (slideStyle.selected === 0) && (slideStyle.selected = exchange.value.length - 2);
      (slideStyle.selected === exchange.value.length - 1) && (
        slideStyle.selected = 1
      );
    }
    timer1 = setTimeout(() => {
      el.classList.remove('transition');
      touch.loading = false;
      if (props.options.loop) {
        slideStyle.left = -(slideStyle.width * slideStyle.selected);
      };
      clearTimeout(timer);
      clearTimeout(timer1);
    }, 500);
  }, 0);
};
const AllowFuc = (move: number): void => {
  const indexTo = move > 0 ? -1 : 1;
  transition(proxy.$refs.transition, indexTo);
  touch.moveAllow = false;
};
const MouseStart = (ev: MouseEvent): void => { // 记录开始位置
  if ( !touch.loading ) { // 过渡保护
    touch.start = ev.clientX;
    touch.allow = true;
    // 为滑动做方便
    slideStyle.copyleft = slideStyle.left;
  };
};
const MouseMove = (ev: MouseEvent): void => { // 滑动逻辑
  if (touch.allow === false) {
    return
  };
  slideStyle.left = slideStyle.copyleft + (ev.clientX - touch.start)
  // 滑动阈值 为 120
  Math.abs(ev.clientX - touch.start) > 160 ?
    touch.moveAllow = true :
    touch.moveAllow = false;
};
const MouseEnd = (ev: MouseEvent): void => {
  if (touch.allow === false) { // 滑动保护
    return
  };
  if (touch.moveAllow) {
    AllowFuc(ev.clientX - touch.start);
  } else {
    transition(proxy.$refs.transition, 0);
  }
  touch.start = 0;
  touch.allow = false;
  slideStyle.copyleft = 0;
};
// options 的内容
interface loopswiper{
  list: any[]
}
const loopswiper: loopswiper = reactive({ // loop为true时 的 渲染数组
  list: []
});
const exchange = computed(():any[] => {
  if (props.options.loop === true) {
    return loopswiper.list
  } else {
    return props.list
  }
});
if (props.options.loop) {
  loopswiper.list.push(props.list[props.list.length - 1]);
  props.list.forEach((item) => {
    loopswiper.list.push(item);
  });
  loopswiper.list.push(props.list[0]);
};
const prevItem = () => {
  (!touch.loading) && transition(proxy.$refs.transition, -1);
};
const nextItem = () => {
  (!touch.loading) && transition(proxy.$refs.transition, 1);
};
// 分页器点击
const toggle = (index: number) => {
  if (touch.loading) {
    return
  };
  if (props.options.loop) {
    slideStyle.selected = index + 1;
  } else {
    slideStyle.selected = index;
  }
  touch.loading = true;
  proxy.$refs.transition.classList.add('transition');
  let timer: any = null;
  setTimeout(() => {
    slideStyle.left = -(slideStyle.width * slideStyle.selected);
    timer = setTimeout(() => {
      proxy.$refs.transition.classList.remove('transition');
      touch.loading = false;
      clearTimeout(timer);
    }, 500)
  }, 0);
};
// 分页器 index
const selected = computed(() => {
  if (props.options.loop) {
    return slideStyle.selected - 1;
  } else {
    return slideStyle.selected;
  }
});
// 自动播放
const autoplayTimer: any = ref(null);
watch(() => props.options.autoplay, () => {
  if (props.options.autoplay) {
    clearInterval(autoplayTimer.value);
    autoplayTimer.value = setInterval(() => {
      transition(proxy.$refs.transition, 1);
    }, props.options.interval);
  } else {
    clearInterval(autoplayTimer.value);
  }
});
const ClearTimer = () => {
  if (props.options.autoplay) {
    clearInterval(autoplayTimer.value);
  };
};
const SetTimer = () => {
  if (props.options.autoplay) {
    clearInterval(autoplayTimer.value);
    autoplayTimer.value = setInterval(() => {
      transition(proxy.$refs.transition, 1);
    }, props.options.interval);
  }
};
// 提交事件
const upload = (V: any) => {
  proxy.$emit('swiper-click', V)
};

watch(() => props.options.loop, () => {
  if (props.options.loop) {
    slideStyle.left = -slideStyle.width;
    slideStyle.selected = 1;
    loopswiper.list = [];
    loopswiper.list.push(props.list[props.list.length - 1]);
    props.list.forEach((item) => {
      loopswiper.list.push(item);
    });
    loopswiper.list.push(props.list[0]);
    resetStyle();
  } else {
    slideStyle.left = 0;
    slideStyle.selected = 0;
  };
});
onBeforeUnmount(() => {
  autoplayTimer.value && clearInterval(autoplayTimer.value);
});
</script>

<style lang="scss" scoped>
.swiper{
  width: 100%;
  height: 100%;
  position: relative;
  &_box{
    cursor: pointer;
    overflow: hidden;
    &:hover{
      .btn{
        opacity: 1;
      }
    }
    .btn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      background: rgba(255, 255, 255, .72);
      transform: translateY(-50%);
      position: absolute;
      color: $colorB;
      cursor: pointer;
      overflow: hidden;
      opacity: 0;
      transition: opacity .4s ease-out;
      svg{
        width: 28px;
        height: 28px;
        display: flex;
        fill: $colorB;
      }
      &.prev{
        left: 0;top: 50%;
        border-radius: 0 50% 50% 0;
        svg{
          transform: translateX(-2px);
        }
      }
      &.next{
        right: 0;top: 50%;
        border-radius: 50% 0 0 50%;
        svg{
          transform: translateX(2px);
        }
      }
    }
    .swiper_list{
        height: 100%;
        &.transition{
          transition: transform 0.5s ease;
        }
        .swiper_item{
            height: 100%;
            list-style: none;
            float: left;
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
    .swiper_pager{
      position: absolute;
      display: flex;
      left: 50%;bottom: 26px;
      transform: translateX(-50%);
      &_item{
          float: left;
          width: 20px;
          height: 20px;
          background: $colorA;
          opacity: 0.4;
          margin: 0 5px;
          border-radius: 100%;
          &.active{
            opacity: 1;
            position: relative;
            background: $colorB;
            &::after{
              content: '';
              position: absolute;
              left: 50%;top: 50%;
              width: 10px;
              height: 10px;
              border-radius: 100%;
              transform: translate(-50%, -50%);
              background: rgba(255, 255, 255, .8);
            }
        }
      }
    }
  }
}
</style>