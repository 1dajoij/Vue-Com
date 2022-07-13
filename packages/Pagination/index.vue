<template>
  <div class="Pagination">
    <ul class="pg-box">
      <li class="prev" @click="activePage===1?'':pageChange(activePage-1)"
      :class="activePage===1?'stop':''">
        <span class="icon iconfont icon-xiangzuojiantou"></span>
      </li>
      <li :class="activePage===1?'active':''"
      @click="pageChange(1)">
        <span>1</span>
      </li>
      <li class="slh" v-show="page!==-1 && page !==2"
      @click="pageChange(activePage-5)">
        <span>...</span>
      </li>
      <li class="render" v-for="item in renderPage"
      :class="activePage===item?'active':''"
      @click="pageChange(item)">
        <span>{{item}}</span>
      </li>
      <li class="slh" v-show="page!==1 && page !==2"
      @click="pageChange(activePage+5)">
        <span>...</span>
      </li>
      <li @click="pageChange(props.total)" v-if="props.total>=2"
      :class="activePage===props.total?'active':''">
        <span>{{props.total}}</span>
      </li>
      <li class="next" @click="activePage===props.total?'':pageChange(activePage+1)"
      :class="activePage===props.total?'stop':''">
        <span class="icon iconfont icon-xiangyoujiantou"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, getCurrentInstance } from "vue"
const { proxy }: any = getCurrentInstance();
const props = defineProps({
  total: {
    required: true,
    type: Number
  },
  currentPage: {
    type: Number,
    default: 1
  }
});
const page = ref(-1); // 翻页器的 页数
const activePage = ref(1); // 正在访问的页数
activePage.value = props.currentPage;
const renderPage = computed(() => { // 根据总页数不同切换渲染页数
  if (props.total > 8) {
    return numArr.value
  } else {
    page.value = 2;
    if (props.total - 2 > 0) {
      const arr: any = [];
      for(let i = 2;i<props.total;i++) {
        arr.push(i)
      };
      return arr
    }
  }
});
const numArr = ref([2,3,4,5,6]);
watch(() =>activePage.value, () => { // 更新渲染页数
  if (activePage.value >= 5 && activePage.value <= props.total-3) {
    numArr.value = [];
    numArr.value.push(activePage.value-2);
    numArr.value.push(activePage.value-1);
    numArr.value.push(activePage.value);
    numArr.value.push(activePage.value+1);
    numArr.value.push(activePage.value+2);
  } else if (activePage.value < 5) {
    numArr.value = [2,3,4,5,6];
  } else {
    numArr.value = [];
    numArr.value.push(props.total-5);
    numArr.value.push(props.total-4);
    numArr.value.push(props.total-3);
    numArr.value.push(props.total-2);
    numArr.value.push(props.total-1);
  };
  if (activePage.value >= props.total) {
    activePage.value = props.total;
  };
  if (activePage.value <= 1) {
    activePage.value = 1;
  };
});
watch(() => numArr.value, () => { // 省略号的显示判定
  if (numArr.value[0] === 2) {
    page.value = -1;
  } else if (numArr.value[4] === props.total-1) {
    page.value = 1;
  } else {
    page.value = 0;
  };
  if (props.total < 8) {
    page.value = 2;
  };
});
const pageChange = (page: number) => {
  activePage.value = page;
  page > props.total ? page = props.total: '';
  page < 1 ? page = 1 : '';
  proxy.$emit("current-change", page);
};
</script>

<style lang="scss" scoped>
.Pagination{
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  .pg-box{
    width: auto;
    height: 48px;
    display: flex;
    user-select: none;
    li{
      padding: 0 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover{
        color: $colorB;
      }
      &.active{
        color: $colorB;
      }
      &.slh{
        span{
          transform: translateY(-3px);
        }
      }
    }
    li.next, li.prev{
      width: 46px;
      height: 100%;
      &.stop{
        cursor: not-allowed;
        .icon{
          color: #c0c4cc;
        }
      }
    }
  }
}
</style>