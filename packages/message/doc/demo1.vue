<script setup>
import { getCurrentInstance} from 'vue';
const { proxy } = getCurrentInstance();

const handleClick = ()=>{
  proxy.$message({text:"消息框的默认使用",delay:100000})
}
const handleTenSecondClick = ()=>{
  proxy.$message({text:"长达10秒的提示",delay:10000})
}

</script>
<template>
  <c-gap horizontal="10">
    <c-button type="info" plain size="md" @click="handleClick">消息提示</c-button>
    <c-button type="info" plain size="md" @click="handleTenSecondClick">长达10秒的提示</c-button>
  </c-gap>

</template>
<style lang="scss" scoped>
</style>