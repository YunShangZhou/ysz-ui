<template>
    <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
    dataSource: {
        fields: [
            { field: "name", title: "插槽名" },
            { field: "desc", title: "描述" },
            { field: "def", title: "默认值" },
        ],
        datas: [
            {
                name: "default",
                desc: "默认插槽",
                def: "------"
            },
            {
                name: "close",
                desc: "自定义插槽(用于关闭图案)",
                def: "<i class='c-icon-error1'></i>"
            },
        ],
    },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>