# 全局安装
安装命令:
`npm install ysz-ui -S`


# 项目中引用(一次性引入)
`main.js`下,引入以下两行代码。
<preview comName="prologue" demoName="install3"></preview>


# 按需引入
1. 在`src`目录下创建相关目录（如`yszui`)
2. 在相关目录下，创建`index.js`
3. 在`index.js`中引入需使用的组件。并以`install`作为函数表达式，作为对象的一员暴露出去。
4. 在`main.js`中的`Vue`实例中使用它。

## 引用文件示例
<preview comName="prologue" demoName="install1"></preview>

## 主文件示例

<preview comName="prologue" demoName="install2"></preview>

