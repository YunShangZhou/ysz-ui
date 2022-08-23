<script setup>
import {ref} from 'vue'
const inputValue = ref("仅当输入框内有值时，才会显示清除按钮");
</script>
<template>
   <div class='demo-container'>
    <c-input v-model="inputValue" clearable></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>