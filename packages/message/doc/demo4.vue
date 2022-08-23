<script setup>
import { getCurrentInstance} from 'vue';
const { proxy } = getCurrentInstance();

const handleClick = ()=>{
  proxy.$message({text:"我的前缀图标变成了 眼睛",prefixIcon:"eye",delay:2000})
}

</script>
<template>
  <div class="test-container">
    <c-button type="info" plain size="md" @click="handleClick">前缀图标修改提示</c-button>
  </div>
</template>
<style lang="scss" scoped>
.test-container {
  padding: 20px;

}
</style>