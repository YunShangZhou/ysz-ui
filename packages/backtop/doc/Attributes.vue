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
      { field: "red", title: "说明" },
      { field: "sel", title: "可选值" },
      { field: "def", title: "默认值" },
    ],
    datas: [
      {
        attr: "target",
        type: "String",
        red: "父级容器的id或class值",
        sel: "——",
        def: "body",
      },
        {
        attr: "right",
        type: "Number",
        red: "图标相对于父级容器右边框的距离(百分比)",
        sel: "——",
        def: "2",
      },
         {
        attr: "bottom",
        type: "Number",
        red: "图标相对于父级容器底边框的距离(百分比)",
        sel: "——",
        def: "5",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>