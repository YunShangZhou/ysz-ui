<script setup>
import { ref, getCurrentInstance } from 'vue'
const inputValue = ref("");
const { proxy } = getCurrentInstance();

const rightIconClick = ()=>{
    proxy.$message({text:"上传成功", type:"success" , delay:2000});
}

</script>
<template>
   <div class='demo-container'>
    <c-input placeholder="点击右侧图标，触发钩子函数" v-model="inputValue" rightIcon="upload" :rightIconClick="rightIconClick"></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>