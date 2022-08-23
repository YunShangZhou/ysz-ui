import cBacktop from "./backtop.vue";

// 为组件提供instal方法，按需引入
cBacktop.install = app => {
    app.component(cBacktop.name,cBacktop);
}

// 默认导出组件
export default cBacktop ;