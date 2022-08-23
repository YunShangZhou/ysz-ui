<!-- html -->
<template>
  <c-gap :inline="false">
    <c-checkbox v-model="checkboxVal" :dataSource="checkDataSource" extraColor="#09b63d"></c-checkbox>
    <c-checkbox v-model="checkboxVal" :dataSource="checkDataSource" extraColor="#25B0F8"></c-checkbox>
  </c-gap>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref([]);
const state = reactive({
  checkDataSource: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" },
  ],
});
const { checkDataSource } = state;
</script>