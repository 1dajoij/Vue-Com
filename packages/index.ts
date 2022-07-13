import MeSwiper from "./Swiper/index"
import MeSwitch from "./Switch/index"
import MeIptNum from "./InputNumber/index"
import MeSelect from "./Select/index"
import MePagination from "./Pagination/index"
import MeDialog from "./Dialog/index"
import MeSkeleton from "./Skeleton/index"
import MeMessage from "./Message/index"
import MeButton from "./Button/index"


const install = (app: any) => {
    app.use(MeSwiper);
    app.use(MeSwitch);
    app.use(MeIptNum);
    app.use(MeSelect);
    app.use(MePagination);
    app.use(MeDialog);
    app.use(MeSkeleton);
    app.use(MeButton);
    app.config.globalProperties.$message = MeMessage;
};


const MEUI: any = {
    install
};


export {
    install,
    MeSwiper,
    MeSwitch,
    MeIptNum,
    MeSelect,
    MePagination,
    MeDialog,
    MeSkeleton,
    MeMessage,
    MeButton
};


export default MEUI;