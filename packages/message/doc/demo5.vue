<script setup>
import { getCurrentInstance} from 'vue';
const { proxy } = getCurrentInstance();

const handleClick = ()=>{
  proxy.$message({text:"黄色背景，绿色字体",bgColor:"yellow",color:"green",delay:2000})
}

</script>
<template>
  <div class="test-container">
    <c-button type="info" plain size="md" @click="handleClick">背景色与字体色修改提示</c-button>
  </div>
</template>
<style lang="scss" scoped>
.test-container {
  padding: 20px;

}
</style>