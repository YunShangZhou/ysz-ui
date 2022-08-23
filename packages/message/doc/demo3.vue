<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const handleClickSm = () => {
    proxy.$message({ text: `小字号类型的消息框`, type: "primary", size: "sm", delay: 1000 })
}
const handleClickLg = () => {
    proxy.$message({ text: `大字号类型的消息框`, type: "warning", size: "lg", delay: 1000 })
}
const handleClickXl = () => {
    proxy.$message({ text: `超大字号类型的消息框`, type: "info", size: "xl", delay: 1000 })
}

</script>
<template>
    <div class="test-container">
        <c-gap>
            <c-button type="primary" plain size="sm" @click="handleClickSm">小字号提示</c-button>
            <c-button type="warning" plain size="lg" @click="handleClickLg">大字号提示</c-button>
            <c-button type="info" plain size="xl" @click="handleClickXl">超大字号提示</c-button>
        </c-gap>
    </div>
</template>
<style lang="scss" scoped>
.test-container {
    padding: 20px;

}
</style>