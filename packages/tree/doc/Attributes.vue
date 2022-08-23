
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
      { field: "explain", title: "说明" },
      { field: "sel", title: "可选值" },
      { field: "def", title: "默认值" },
    ],

    datas: [
      {
        attr: "dataSource",
        type: "Array",
        explain: "树形组件需要接收的数据。数据结构在下方表格所示",
        sel: "----",
        def: "[]",
      },
      {
        attr: "activeIndex",
        type: "String",
        explain: "默认激活项",
        sel: "----",
        def: "----",
      },
      {
        attr: "isAllOpen",
        type: "Boolean",
        explain: "是否全部展开",
        sel: "----",
        def: "false",
      },
      {
        attr: "isAllChecked",
        type: "Boolean",
        explain: "是否全部勾选(仅在multiple显示时才能看见效果)",
        sel: "----",
        def: "false",
      },
      {
        attr: "openSelection",
        type: "Array",
        explain: "默认勾选项(仅在multiple显示时才能看见效果)",
        sel: "----",
        def: "[]",
      },
      {
        attr: "checkedSelection",
        type: "Boolean",
        explain: "是否全部勾选(仅在multiple显示时才能看见效果)",
        sel: "----",
        def: "false",
      },
      {
        attr: "disabledSelection",
        type: "Boolean",
        explain: "禁用数组",
        sel: "----",
        def: "[]",
      },
      {
        attr: "multiple",
        type: "Boolean",
        explain: "是否开启多选",
        sel: "----",
        def: "false",
      },
      {
        attr: "extraClass",
        type: "Boolean",
        explain: "额外的类",
        sel: "----",
        def: "----",
      },


    ]
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>