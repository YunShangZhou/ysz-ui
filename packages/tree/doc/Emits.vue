<template>
  <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "emitName", title: "函数名" },
      { field: "desc", title: "说明" },
      { field: "usage", title: "用法示例" },
    ],
    datas: [
      {
        emitName: "handleCheck",
        desc: "勾选方框时触发。返回勾选数组",
        usage: "checkedSelection=>{}",
      },
      {
        emitName: "handleClick",
        desc: "点击文字时触发，返回该项",
        usage: "item=>{}",
      },
      {
        emitName: "change",
        desc: "点击文字时触发，返回该项",
        usage: "item=>{}",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>