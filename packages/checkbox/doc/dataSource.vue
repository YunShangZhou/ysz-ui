<template>
  <c-table :dataSource="dataSource" ></c-table>
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
        attr: "label",
        type: "String",
        red: "多选默认label展示字段名，自定义请使用 labelField 属性重新关联lable字段",
        sel: "——",
        def: "label",
      },
      {
        attr: "value",
        type: "String",
        red: "多选默认value选中值，自定义请使用 valueField 属性重新关联value字段",
        sel: "——",
        def: "value",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用选项",
        sel: "true / false",
        def: "false",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>