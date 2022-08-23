<!-- html -->
<template>
  <c-checkbox
    v-model="checkboxVal"
    :dataSource="checkDataSource"
    @change="checkChange"
  ></c-checkbox>
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
const checkChange = (e) => {
  console.log(e.value, e.index);
};
const { checkDataSource } = state;
</script>