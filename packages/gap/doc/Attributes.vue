<template>
  <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "inline",
        type: "Boolean",
        red: "是否为水平或者垂直，默认水平方向",
        sel: "true | false",
        def: "true",
      },
      {
        attr: "horizontal",
        type: "String | Number",
        red: "自定义水平间距大小(px)",
        sel: "——",
        def: "10",
      },
      {
        attr: "vertical",
        type: "String | Number",
        red: "自定义垂直间距大小(px)",
        sel: "——",
        def: "10",
      },
      {
        attr: "boxClass",
        type: "String",
        red: "gap容器类名",
        sel: "——",
        def: "''",
      },
      {
        attr: "itemClass",
        type: "String",
        red: "gap容器的每个子项类名",
        sel: "——",
        def: "''",
      },
      {
        attr: "alignItems",
        type: "String",
        red: "`flex`水平时，设置内容的垂直排列; `flex`为垂直时，设置内容的水平排列",
        sel: "flex-start | flex-end | center | space-between | space-around",
        def: "flex-start",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>