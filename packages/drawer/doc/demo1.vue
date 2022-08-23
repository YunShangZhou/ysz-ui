<!-- html -->
<template>
  <c-button @click="openDrawer">基本使用</c-button>
  <c-drawer v-model="drawerShow" title="基本使用" @confirm="confirmFn" @cancel="cancelFn">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </c-drawer>
</template>

<!-- js -->
<script setup>
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const drawerShow = ref(false);
const openDrawer = () => {
  drawerShow.value = true;
};
const confirmFn = () => {
  proxy.$message({ text: "确认事件", type: "primary" });
  drawerShow.value = false;
};
const cancelFn = () => {
  proxy.$message({ text: "取消事件", type: "info" });
  drawerShow.value = false;
};
</script>