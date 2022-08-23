<script setup>
   import demo1 from './demo1.vue'
   import demo2 from './demo2.vue'
   import demo3 from './demo3.vue'
   import demo4 from './demo4.vue'
   import Attributes from "./Attributes.vue"
   import Emits from "./Emits.vue"
   import Slots from "./Slots.vue"
</script>


# Popup 弹框
一个全屏组件，点击后中央弹出 **自定义内容** ,周边呈现 **幕布**。点击下侧的 **x** 关闭弹框。


## 基础使用
<preview-box>
<demo1 />
<preview   comName='popup' demoName='demo1' />
</preview-box>

## 图标位置调整
通过`closeTop`调整关闭图标位置。
<preview-box>
<demo2 />
<preview  comName='popup' demoName='demo2' />
</preview-box>

## 图标字号调整
通过`size`调整关闭图标位置。
<preview-box>
<demo3 />
<preview  comName='popup' demoName='demo3' />
</preview-box>

## 自定义插槽
通过`<template #close> /... </template>`的方式引入 **关闭图标**
<preview-box>
<demo4 />
<preview   comName='popup' demoName='demo4' />
</preview-box>


# Attributes 属性
<Attributes />

# Emit 传值
<Emits />

# slots 插槽
<slots />
