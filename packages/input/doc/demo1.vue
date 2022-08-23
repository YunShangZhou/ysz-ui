<script setup>
import {ref} from 'vue'
const inputValue = ref("");
</script>
<template>
   <div class='demo-container'>
    <c-input placeholder="基本使用" v-model="inputValue"></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>