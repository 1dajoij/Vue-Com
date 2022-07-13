import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/swiper',
    children: [
      { // Swiper
        path: '/swiper',
        name: 'Swiper',
        component: () => import( /* webpackChunkName: "Swiper" */ '@/views/SwiperCom.vue')
      }, { // Switch
        path: '/switch',
        name: 'Switch',
        component: () => import( /* webpackChunkName: "Switch" */ '@/views/SwitchCom.vue')
      }, { // IptNum
        path: '/IptNum',
        name: 'IptNum',
        component: () => import( /* webpackChunkName: "Switch" */ '@/views/IptNumCom.vue')
      }, { // Switch
        path: '/Select',
        name: 'Select',
        component: () => import( /* webpackChunkName: "Switch" */ '@/views/SelectCom.vue')
      }, { // Pagination
        path: '/Pagination',
        name: 'Pagination',
        component: () => import( /* webpackChunkName: "Pagination" */ '@/views/PaginationCom.vue')
      }, { // Dialog
        path: '/Dialog',
        name: 'Dialog',
        component: () => import( /* webpackChunkName: "Dialog" */ '@/views/DialogCom.vue')
      }, { // Skeleton
        path: 'Skeleton',
        name: 'Skeleton',
        component: () => import( /* webpackChunkName: "Skeleton" */ '@/views/SkeletonCom.vue')
      }, { // Message
        path: '/Message',
        name: 'Message',
        component: () => import( /* webpackChunkName: "Message" */ '@/views/MessageCom.vue')
      }, { // Button
        path: '/Button',
        name: 'Button',
        component: () => import( /* webpackChunkName: "Button" */ '@/views/ButtonCom.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
