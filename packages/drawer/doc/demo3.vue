<!-- html -->
<template>
  <c-button @click="openDrawer">自定义</c-button>
  <c-drawer v-model="drawerShow">
    <template #header>
      这是头部自定义信息
      <c-button
        size="small"
        type="primary"
        style="position: absolute; right: 20px"
        >自定义</c-button
      >
    </template>
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
    <template #footer> 这是底部自定义信息 </template>
  </c-drawer>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const drawerShow = ref(false);
const openDrawer = () => {
  drawerShow.value = true;
};
</script>