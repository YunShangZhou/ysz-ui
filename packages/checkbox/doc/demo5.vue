<!-- html -->
<template>
  <c-checkbox
    v-model="checkboxVal"
    :dataSource="checkDataSource"
    labelField="name"
    valueField="id"
  ></c-checkbox>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref([0, 2]);
const state = reactive({
  checkDataSource: [
    { name: "小明", id: 0 },
    { name: "小李", id: 1 },
    { name: "小红", id: 2 },
    { name: "小王", id: 3 },
  ],
});
const { checkDataSource } = state;
</script>