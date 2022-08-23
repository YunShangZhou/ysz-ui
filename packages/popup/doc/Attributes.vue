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
        attr: "isShow",
        type: "Boolean",
        red: "控制弹框显示",
        sel: "——",
        def: "body",
      },
      {
        attr: "closeBottom",
        type: " Number | String,",
        red: "关闭按钮距离相对容器的下边距离(百分比)",
        sel: "——",
        def: "10",
      },

    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>