<template>
  <div class="home">
    <head-com />
    <main-com />
  </div>
</template>

<!-- <script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script> -->
<script lang="ts" setup>
import headCom from '@/components/HeadCom.vue'
import mainCom from '@/components/MainCom.vue'
</script>
