import MeSwiper from "./index.vue"
MeSwiper.install = (app: any) => {
    app.component('MeSwiper', MeSwiper)
};
export default MeSwiper;