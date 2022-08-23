<template>
  <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "label", title: "含义" },
      { field: "property", title: "属性名" },
      { field: "type", title: "类型" },
    ],
    datas: [
      {
        label: "标签",
        property: "label",
        type: "String",
      },
      {
        label: "值",
        property: "type",
        type: "any",
      },
      {
        label: "是否展开",
        property: "isOpen",
        type: "Boolean",
      },
      {
        label: "是否勾选",
        property: "isChecked",
        type: "Boolean",
      },
      {
        label: "子项",
        property: "children",
        type: "Array",
      },

    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>