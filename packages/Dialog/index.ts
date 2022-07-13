import MeDialog from "./index.vue"
MeDialog.install = (app: any) => {
    app.component('MeDialog', MeDialog)
};
export default MeDialog;