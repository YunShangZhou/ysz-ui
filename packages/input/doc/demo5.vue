<script setup>
import {ref} from 'vue'
const inputValue = ref("点击右侧按钮显隐输入值");
</script>
<template>
   <div class='demo-container'>
    <c-input v-model="inputValue" showPwd></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>