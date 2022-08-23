/*
 * @Author: Yun 912453237@qq.com
 * @Date: 2022-07-17 01:47:26
 * @LastEditors: Yun 912453237@qq.com
 * @LastEditTime: 2022-08-06 21:36:23
 * @FilePath: \vuepress-learn-jsf:\test-baseui\packages\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Yun 912453237@qq.com, All Rights Reserved. 
 */
import button from "./button/";
import input from "./input/";
import backtop from "./backtop/";
import table from "./table/"
import col from "./col"
import row from "./row"
import popup from "./popup";
import checkbox from "./checkbox";
import gap from "./gap";
import tip from "./tip";
import drawer from "./drawer";
import tree from "./tree";

// 全局方法引入
import Message from "./message";

// 非功能类组件(用于代码显示)
import preview from "../src/components/preview.vue";
import previewBox from "../src/components/previewBox.vue";



// 组件列表，在app实例上注册
const components = [button, input, backtop, gap, popup, tip, table, checkbox ,tree , drawer, col, row, preview, previewBox];

// 表达式写成函数的好处：能在return前添加额外的执行语句。
const install = app => {
    // 如果已安装，则不继续执行。
    if (install.installed) return;
    // 按个人所需添加东西...
    app.config.globalProperties.$message = Message;

    components.forEach(component => {
        app.component(component.name, component);
    })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// 为按需导入组件时可以直接解构，这里导出使用对象方式
export { button, input, backtop, popup, table, col, row, preview, previewBox };
export default { install }