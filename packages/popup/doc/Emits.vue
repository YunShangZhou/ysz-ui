<template>
  <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "name", title: "传值名" },
      { field: "attr", title: "参数" },
      { field: "desc", title: "说明" },
    ],
    datas: [
      {
        name: "afterClose",
        attr: "----",
        desc: "在点击关闭图案之后所做的事情",
      },

    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>