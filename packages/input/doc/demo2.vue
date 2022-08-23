<script setup>
import {ref} from 'vue'
const inputValue = ref("");
</script>
<template>
   <div class='demo-container'>
    <c-input placeholder="禁止输入,禁止点击，聚焦禁止" v-model="inputValue" disabled></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>