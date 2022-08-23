<script setup>
import { reactive, ref } from 'vue'

const { dataSource } = reactive({
    dataSource: [
        { label: "1", children: [{ label: "1-1" },] },
        { label: "2", children: [{ label: "2-1" }, { label: "2-2" }] },
        { label: "3", children: [{ label: "3-1" }, { label: "3-2", children: [{ label: "3-2-1" }, { label: "3-2-2" }] }] },
    ],
})

</script>
<template>
    <div class="tree-demo-container">
        <c-tree :dataSource="dataSource"></c-tree>
    </div>
</template>

<style lang="scss" scoped>
.tree-demo-container {
    padding: 10px 20px;
}
</style>