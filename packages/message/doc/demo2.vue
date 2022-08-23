<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const handleClick = type => {
    proxy.$message({ text: `${type}类型的消息框`, type, delay: 1000 })
}

</script>
<template>
    <div class="test-container">
        <c-gap>
            <c-button type="success" plain size="md" @click="handleClick('success')">成功提示</c-button>
            <c-button type="warning" plain size="md" @click="handleClick('warning')">警示提示</c-button>
            <c-button type="error" plain size="md" @click="handleClick('error')">错误提示</c-button>
            <c-button type="info" plain size="md" @click="handleClick('info')">信息提示</c-button>
            <c-button type="primary" plain size="md" @click="handleClick('primary')">重要提示</c-button>
        </c-gap>
    </div>
</template>
<style lang="scss" scoped>
.test-container {
    padding: 20px;

}
</style>