<template>
  <c-table :dataSource="dataSource" ></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "name", title: "事件名", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "attr", title: "回调参数", align: "center" },
      { field: "exm", title: "示例", align: "center", width: "350px" },
    ],
    datas: [
      {
        name: "close",
        red: "抽屉关闭事件",
        attr: "()",
        exm: "close = () =>{}",
      },
      {
        name: "confirm",
        red: "右上角确定按钮点击事件",
        attr: "()",
        exm: "confirm = () =>{}",
      },
      {
        name: "cancel",
        red: "右上角取消按钮点击事件",
        attr: "()",
        exm: "cancel = () =>{}",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>