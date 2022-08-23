<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
</script>

# Drawer 抽屉

 从屏幕垂直/水平的一边滑出 **容器**，并且其他部分添加 **幕布**，点击 **幕布** 或 **按钮自定义事件**，容器收回。

<br/>

## 基本使用

#### drawer 组件基本使用。

<preview-box>
  <demo1/>
<preview comName="drawer" demoName="demo1"/>
</preview-box>

## 不同方向

#### 通过 _direction_ 属性实现从不同方向出现。

<preview-box>
  <demo2/>
<preview comName="drawer" demoName="demo2"/>
</preview-box>

## 使用具名插槽自定义

#### 使用具名插槽 _#header_ 、 _#content_ 、_#footer_ 可对模态框整体根据需要自定义。你也可以通过 _showHeader_ 和 _showFooter_ 属性动态控制是否显示顶部和底部。

<preview-box>
  <demo3/>
<preview comName="drawer" demoName="demo3"/>
</preview-box>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
