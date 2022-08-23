<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import Attributes from './Attributes.vue'
import dataSource from './dataSource.vue'
import Event from './Events.vue'
</script>

# Checkbox 多选

 常用从一组数据中选择多个数据



## 基本使用

 checkbox 组件的基本使用，需要一个主要的 `dataSource` 参数。

<preview-box>
  <demo1/>
<preview comName="checkbox" demoName="demo1"/>
</preview-box>

## 默认选中

 `v-model` 添加默认绑定选项 `value` 值。

<preview-box>
  <demo2/>
<preview comName="checkbox" demoName="demo2"/>
</preview-box>

## 禁用选项

 可以针对 `dataSource` 下某个选项来添加 `disabled` 属性实现禁用选项。

<preview-box>
  <demo3/>
<preview comName="checkbox" demoName="demo3"/>
</preview-box>

## 垂直排列

 可以通过设置 `inline` 属性为 `false` 实现垂直排列。

<preview-box>
  <demo4/>
<preview comName="checkbox" demoName="demo4"/>
</preview-box>

## 匹配不同格式的数据

 默认 `dataSource` 接收 `label` 和 `value` 作为显示和值绑定，你可以根据 `labelField` 和 `valueField` 来重新确定字段的绑定，更方便的匹配不同格式的数据。

<preview-box>
  <demo5/>
<preview comName="checkbox" demoName="demo5"/>
</preview-box>

## 不同大小

 可以通过设置 `size` 属性来显示不同大小。

<preview-box>
  <demo6/>
<preview comName="checkbox" demoName="demo6"/>
</preview-box>

## 自定义颜色

 可以通过设置 `extraColor` 属性为选中的选项自定义你喜欢的颜色。

<preview-box>
  <demo7/>
<preview comName="checkbox" demoName="demo7"/>
</preview-box>

## Attributes 参数

<Attributes/>


## dataSource API

<dataSource/>

## Event 事件

<Event/>

