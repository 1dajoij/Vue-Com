import MeSkeleton from "./index.vue"
MeSkeleton.install = (app: any) => {
    app.component('MeSkeleton', MeSkeleton)
};
export default MeSkeleton;