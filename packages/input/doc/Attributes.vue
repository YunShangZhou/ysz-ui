
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
        attr: "v-model",
        type: "String | Number",
        explain: "输入框value值",
        sel: "——",
        def: "''",
      },
      {
        attr: "width",
        type: "String",
        explain: "设置输入框的宽度",
        sel: "——",
        def: "100%",
      },
      {
        attr: "height",
        type: "String",
        explain: "设置输入框的高度",
        sel: "——",
        def: "35px",
      },
      {
        attr: "placeholder",
        type: "String",
        explain: "输入提醒",
        sel: "——",
        def: "——",
      },
      {
        attr: "leftIcon",
        type: "String",
        explain: "输入框前缀图标,值为图标名。例: 'download'",
        sel: "详情了解icon图库",
        def: "——",
      },
      {
        attr: "rightIcon",
        type: "String",
        explain: "输入框前缀图标,值为图标名。例: 'download'",
        sel: "详情了解icon图库",
        def: "——",
      },

      {
        attr: "showPwd",
        type: "Boolean",
        explain: "密码显隐图标",
        sel: "——",
        def: "false",
      },

      {
        attr: "disabled",
        type: "Boolean",
        explain: "禁用输入",
        sel: "——",
        def: "false",
      },

      {
        attr: "clearable",
        type: "Boolean",
        explain: "清除框内值",
        sel: "——",
        def: "false",
      },

      {
        attr: "inputType",
        type: "String",
        explain: "input类型",
        sel: "——",
        def: "text",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>