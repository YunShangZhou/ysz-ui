import { createVNode, render } from "vue";
import cMessage from "./message.vue";

export default ( { text, size, type, bgColor, color, prefixIcon, delay } ) => {
    // 创建容器节点
    const div = document.createElement('div');

    // 根据数量，调整top的距离
    const divLength = document.querySelectorAll(".message-container").length;
    div.setAttribute("class", `message-container message-container-top${5 + divLength * 15}`)

    console.log(divLength);
    // 数量限制，最多有5个提示框(一般情况也不会有5个)
    if (divLength == 5) return;
    // 文本添加节点
    document.body.appendChild(div);

    // 创捷Vue节点
    const msgVNode = createVNode(cMessage,  { text, size, type, bgColor, color, prefixIcon, delay } , [text])

    // 在div中渲染Vue节点
    render(msgVNode, div);

    // 特定时间移除div
    setTimeout(() => {
        document.body.removeChild(div);
    }, delay + 700);
}