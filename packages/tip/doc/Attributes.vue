<template>
    <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
    dataSource: {
        fields: [
            { field: "attr", title: "参数" },
            { field: "type", title: "类型" },
            { field: "red", title: "说明" },
            { field: "sel", title: "可选值" },
            { field: "def", title: "默认值" },
        ],
        datas: [
            {
                attr: "type",
                type: "String",
                red: "颜色主题",
                sel: "primary | info | warning | danger | other | success",
                def: "danger",
            },
            {
                attr: "mode",
                type: "String",
                red: "显示方式: 1.数字提醒 2.仅显示'点'",
                sel: "——",
                def: "tip",
            },
            {
                attr: "value",
                type: "Number | String",
                red: "消息数量",
                sel: "——",
                def: "0",
            },
            {
                attr: "size",
                type: "String,",
                red: "sm | md | ml | lg | xl",
                sel: "——",
                def: "sm",
            },
            {
                attr: "maxCount",
                type: "String | Number",
                red: "显示消息数量的上限，超过上限部分用'+'表示",
                sel: "[9,99]",
                def: "99",
            },
            {
                attr: "right",
                type: "String",
                red: "与父级右边的距离",
                sel: "——",
                def: "-7px",
            },
            {
                attr: "top",
                type: "String",
                red: "与父级顶部的距离",
                sel: "——",
                def: "-7px",
            }
        ],
    },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>