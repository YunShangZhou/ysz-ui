<!--
 * @Author: Yun 912453237@qq.com
 * @Date: 2022-08-06 15:46:49
 * @LastEditTime: 2022-08-06 21:37:44
 * @FilePath: \vuepress-learn-jsf:\test-baseui\packages\table\doc\doc.md
 * @Description: 
 * 
 * Copyright (c) 2022 by Yun 912453237@qq.com, All Rights Reserved. 
-->
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import Fileds from './fileds.vue'
</script>

# Table 表格

 用于展示多层次结构的数据，可自定义表格样式、属性结构的展示。

## 基本使用

 table 表格基本使用示例,需要一个主要的 `fields` 参数。

<preview-box>
  <demo1/>
<preview  comName="table" demoName="demo1"/>

</preview-box>

## 不同大小

 你可以传入一个 `size` 来确定表格的不同大小，以适配不同的应用场景

<preview-box>
  <demo2/>
<preview  comName="table" demoName="demo2"/>

</preview-box>


## 表头隐藏
 你可以使用 `showHeader` 这个属性，去控制表头的显隐
 <preview-box>
 <demo3 />
 <preview   comName='table' demoName='demo3' />
 </preview-box>

## 自定义表头及表格样式

 使用 `headStyle` 自定义表头的样式，使用 `rowStyle` 自定义表格内容区域的样式

<preview-box>
  <demo4/>
<preview  comName="table" demoName="demo4"/>
</preview-box>

## Attributes 参数

<Attributes/>
<br/>

## Fields API

<Fileds/>
<br/>
