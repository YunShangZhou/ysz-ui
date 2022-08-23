<script setup>
import {ref} from 'vue'
const leftValue = ref("");
const rightValue = ref("");
</script>
<template>
   <div class='demo-container'>
    <c-input placeholder="左图标示例" v-model="leftValue" width="50%" leftIcon="copy" ></c-input>
    <c-input placeholder="右图标示例" v-model="rightValue" width="50%" rightIcon="no_eye"></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
   display: flex;
   justify-content: space-between;
}
</style>