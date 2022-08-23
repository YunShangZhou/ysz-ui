<template>
  <c-table :dataSource="dataSource" ></c-table>
</template>

<script setup>
import { ref,reactive } from "vue";
  const state = reactive({
    dataSource:{
     fields:[
        {field:'attr',title:'参数'},
        {field:'type',title:'类型'},
        {field:'red',title:'说明'},
        {field:'sel',title:'可选值'},
        {field:'def',title:'默认值'}
      ],
      datas:[
        {attr:'span',type:'number',red:'每行占用列数',sel:'——',def:"24"},
        {attr:'offset',type:'number',red:'偏移指定列数',sel:'——',def:"——"}
      ]
    }
  })
  const { dataSource } = state
</script>

<style lang="scss" scoped>

</style>