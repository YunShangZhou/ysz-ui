<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import Attributes from './Attributes.vue'
</script>

# gap 间距
  `gap`容器内的每个元素 **间距相等**,支持 **水平**、**垂直**两种间距排列。

## 基本使用

 gap 的基本使用

<preview-box>
  <demo1/>
<preview comName="gap" demoName="demo1"/>
</preview-box>

## 纵向排列

 设置 `inline` 为 `false` 即可

<preview-box>
  <demo2/>
<preview comName="gap" demoName="demo2"/>
</preview-box>


## 自定义间距大小

 通过设置 `horizontal`、`vertical` 自定义 **水平** \ **垂直** 的间距大小。注意:
 - 在`inline:true`下，设置了`horizontal`,则 **间隙盒子** 的 **宽度** 将变成`auto`
 - 在`inline:false`下，设置了`vertical`,则 **间隙盒子** 的 **高度** 将变成`auto`

<preview-box>
  <demo3/>
<preview  comName="gap" demoName="demo3"/>
</preview-box>

## 自定义类名
可通过`boxClass`、`itemClass`自定义容器和其子项的类。

<preview-box>
<demo4 />
<preview  comName="gap" demoName="demo4"/>
</preview-box>


## 自定义内容排列
`flex`水平时，设置内容的垂直排列; `flex`为垂直时，设置内容的水平排列。

<preview-box>
<demo5 />
<preview  comName="gap" demoName="demo5"/>
</preview-box>

## Attributes 参数
<Attributes/>
