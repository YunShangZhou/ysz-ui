
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
        attr: "text",
        type: "String",
        explain: "消息框提示内容",
        sel: "——",
        def: "''",
      },
      {
        attr: "size",
        type: "String",
        explain: "消息框字号大小",
        sel: "sm | md | ml | lg | xl",
        def: "md",
      },
      {
        attr: "type",
        type: "String",
        explain: "消息框类型",
        sel: "primary | info | success | warning | error",
        def: "info",
      },
      {
        attr: "bgColor",
        type: "String",
        explain: "消息框背景色",
        sel: "——",
        def: "——",
      },
      {
        attr: "color",
        type: "String",
        explain: "消息框字体色",
        sel: "——",
        def: "——",
      },
      {
        attr: "prefixIcon",
        type: "String",
        explain: "前缀图标(这个属性的优先级高于type属性)",
        sel: "——",
        def: "——",
      },      {
        attr: "delay",
        type: "Number",
        explain: "消息框停留在界面的时间(毫秒)",
        sel: "——",
        def: "2000",
      },
      
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>