<!-- html -->
<template>
  <c-checkbox v-model="checkboxVal" :dataSource="checkDataSource"></c-checkbox>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(["zhongguo"]);
const state = reactive({
  checkDataSource: [
    { label: "中国", value: "zhongguo", disabled: true },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo", disabled: true },
    { label: "法国", value: "faguo" },
  ],
});
const { checkDataSource } = state;
</script>