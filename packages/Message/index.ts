import MeMessage from "./index.vue"
import { createVNode, render } from "vue"

// {msg, bgColor, textColor }
export default ({ msg, type }: any) => {
    // 创建容器
    let div = document.createElement('div');
    div.setAttribute('class', 'com-message');
    document.body.appendChild(div);
    let timer: any = null;
    // 传递给组件
    const vnode = createVNode(MeMessage, { msg, type });
    render(vnode, div);
    clearTimeout(timer);
    timer = setTimeout(() => {
        render(null, div);
        if (typeof document !== 'undefined') {
            document.body.removeChild(div);
        };
        clearTimeout(timer);
    }, 2500);
};