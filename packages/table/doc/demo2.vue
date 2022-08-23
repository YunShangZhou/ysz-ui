<template>
  <h4>&nbsp;&nbsp;&nbsp;字号为"sm"的表格</h4>
  <c-table :dataSource="dataSource" size="sm"></c-table>
  <h4>&nbsp;&nbsp;&nbsp;字号为"md"的表格</h4>
  <c-table :dataSource="dataSource" size="md"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "id", title: "ID" },
      { field: "name", title: "姓名" },
      { field: "job", title: "职业" },
      { field: "address", title: "地址" },
      { field: "from", title: "籍贯" },
    ],
    datas: [
      {
        id: 10,
        name: "王小二",
        job: "放羊娃",
        address: "在那遥远的小山村",
        from: "民间流传故事",
      },
      {
        id: 13,
        name: "猪八戒",
        job: "徒弟",
        address: "高老庄",
        from: "西游记神话故事",
      },
      {
        id: 2,
        name: "刘老四",
        job: "农民",
        address: "可能在中国",
        from: "想象出来的",
      },
      {
        id: 11,
        name: "白骨精",
        job: "妖精",
        address: "西游记",
        from: "西游记神话故事",
      },
    ],
  },
});
const { dataSource } = state;
</script>