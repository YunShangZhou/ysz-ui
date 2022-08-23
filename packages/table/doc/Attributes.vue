
<template>
  <c-table :dataSource="dataSource" ></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "attr", title: "参数" },
      { field: "type", title: "类型" },
      { field: "explain", title: "说明" },
      { field: "sel", title: "可选值" },
      { field: "def", title: "默认值" },
    ],
    datas: [
      {
        attr: "dataSource",
        type: "Object",
        explain: "表格数据,field 和 datas,field作为整体约束（具体见下方API），datas作为数据定义",
        sel: "——",
        def: "{field:[], datas:[]}",
      },
      {
        attr: "size",
        type: "String",
        explain: "表格尺寸大小",
        sel: "sm / md / lg / xl",
        def: "default",
      },
      {
        attr: "showHeader",
        type: "Boolean",
        explain: "是否显示表头",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "headStyle",
        type: "Object",
        explain: "自定义表头样式",
        sel: "——",
        def: "——",
      },
      {
        attr: "rowStyle",
        type: "Object",
        explain: "自定义表格内容区域的样式",
        sel: "——",
        def: "——",
      },
      {
        attr: "extraClass",
        type: "String",
        explain: "自定义表格组件整体的Class类名",
        sel: "——",
        def: "——",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>