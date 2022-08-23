<template>
  <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "attr", title: "参数" },
      { field: "type", title: "类型" },
      { field: "explain", title: "说明", },
      { field: "sel", title: "可选值" },
      { field: "def", title: "默认值" },
    ],
    datas: [
      {
        attr: "field",
        type: "String",
        explain: "（固定）定义表格列的参数名，对应datas数据下某项的键名",
        sel: "——",
        def: "——",
      },
      {
        attr: "title",
        type: "String",
        explain: "（固定）定义表头显示的名称",
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