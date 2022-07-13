import MeButton from "./index.vue"
MeButton.install = (app: any) => {
    app.component('MeButton', MeButton)
};
export default MeButton;