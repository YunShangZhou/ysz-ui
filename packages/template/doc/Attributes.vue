
<template>
  <c-table :dataSource="dataSource" size="sm"></c-table>
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