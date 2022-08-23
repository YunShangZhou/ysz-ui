
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import Emits from './Emits.vue'
import DataSource from "./DataSource.vue"
</script>

# Tree 树
  用于展示树形结构的数据。
  

## 基本使用

<preview-box>
<demo1 />
<preview  comName='tree' demoName='demo1' />
</preview-box>

# 多选模式
通过`multiple`传值控制多选开关。

<preview-box>
<demo2 />
<preview  comName='tree' demoName='demo2' />
</preview-box>

# 全部收展/勾选
通过`isAllOpen`和`isAllChecked`控制全部收展、勾选。

<preview-box>
<demo3 />
<preview  comName='tree' demoName='demo3' />
</preview-box>


# 指定收展/勾选/禁用
通过`openSelection`、`checkedSelection`、`disabledSelection`来控制 **展开数组**、**勾选数组**、 **禁用数组**。

<preview-box>
<demo4 />
<preview  comName='tree' demoName='demo4' />
</preview-box>

## Attributes 参数

<Attributes/>

## Emits API

<Emits/>

## DataSource API

<DataSource/>

