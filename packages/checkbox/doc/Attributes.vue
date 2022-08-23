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
        attr: "v-model",
        type: "Array",
        red: "多选绑定值",
        sel: "——",
        def: "——",
      },
      {
        attr: "size",
        type: "String",
        red: "尺寸大小",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "dataSource",
        type: "Array",
        red: "多选数据配置，具体见下方 dataSource API",
        sel: "——",
        def: "[]",
      },
      {
        attr: "inline",
        type: "Boolean",
        red: "是否为行内元素",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "labelField",
        type: "String",
        red: "自定义替换lable的字段名",
        sel: "——",
        def: "label",
      },
      {
        attr: "valueField",
        type: "String",
        red: "自定义替换value的字段名",
        sel: "——",
        def: "value",
      },
      {
        attr: "extraColor",
        type: "String",
        red: "自定义选中颜色色值",
        sel: "——",
        def: "——",
      },
      {
        attr: "extraClass",
        type: "String",
        red: "自定义组件类名",
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