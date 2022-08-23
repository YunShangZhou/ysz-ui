<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
</script>

# Backtop 回到顶部
  用于快捷返回到页面顶部的组件(速度由慢到快)

# 注意事项
 为保证 **回到顶部** 图标相对于 **父级容器** 。 **父级容器** 的`css`设置需要满足以下条件**之一**:
 - `transform`不为`none`。
 - `perspective`不为`none`。
 - `filter`不为`none`。

## 基本使用
 `Backtop`组件基本使用示例。(文档页为`.router-view`,`right`、`bottom`为百分比)
<preview-box>
  <demo1/>
  <preview comName="backtop" demoName="demo1"/>
</preview-box>

## 绑定指定元素

#### 绑定指定元素监测滚动来触发。

<preview-box>
  <demo2/>
  <preview  comName="backtop" demoName="demo2"/>
</preview-box>

## 自定义元素展示

 通过插槽的方式自定义元素展示(若没有`domString`或 **节点** 添入，则使用默认置顶图标)
<preview-box>
  <demo3/>
  <preview  comName="backtop" demoName="demo3"/>
</preview-box>


## Attributes 参数

<Attributes/>
