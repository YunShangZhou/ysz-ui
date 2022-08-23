
<template>
    <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
    dataSource: {
        fields: [
            { field: "functionName", title: "函数名" },
            { field: "explain", title: "说明" },
            { field: "def", title: "默认值" },
        ],
        datas: [
            {
                functionName: "leftIconClick",
                explain: "搭配leftIcon使用,可为其添加点击事件",
                def: "()=>{console.log('LeftIcon is clicked!')}"
            },
            {
                functionName: "rightIconClick",
                explain: "搭配rightIcon使用,可为其添加点击事件",
                def: "()=>{console.log('RightIcon is clicked!')}"
            },
            {
                functionName: "input",
                explain: "值改变时触发",
                def: "e=>{ //.....}"
            },
            {
                functionName: "focus",
                explain: "聚焦时触发",
                def: "e=>{ //.....}"

            },
            {
                functionName: "blur",
                explain: "当一个元素失去焦点的时候 blur 事件被触发",
                def: "e=>{ //.....}"

            },
            {
                functionName: "change",
                explain: "当输入框内容发生改变时触发的事件，前提是失去了焦点时",
                def: "e=>{ //.....}"
            },
        ],
    },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>