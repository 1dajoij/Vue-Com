import MeSwitch from "./index.vue"
MeSwitch.install = (app: any) => {
    app.component('MeSwitch', MeSwitch)
};
export default MeSwitch;