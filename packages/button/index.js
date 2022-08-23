import cButton from "./button.vue";

// 为组件提供instal方法，按需引入
cButton.install = app => {
    app.component(cButton.name,cButton);
}

// 默认导出组件
export default cButton ;