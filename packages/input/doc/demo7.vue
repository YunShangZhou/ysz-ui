<script setup>
import {ref} from 'vue'
const inputValue = ref("");
</script>
<template>
   <div class='demo-container'>
    <c-input placeholder="宽度500px,高度40px" v-model="inputValue" width="500px" height="40px"></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>