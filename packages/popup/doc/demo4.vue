<script>
export default {
    name: '',
}
</script>
<script setup>
import { ref } from 'vue'
const isShow = ref(false);
// 弹出钩子
const handlePopup = () => {
    isShow.value = true;
};

// 弹窗 (自动触发) 
const handleAfterClose = () => {
    console.log("我被触发了")
    isShow.value = false;
};
</script>
<template>
    <div>
        <c-button type="danger"  @click="handlePopup">自定义关闭区域</c-button>
        <c-popup :isShow="isShow" @afterClose="handleAfterClose">
            <div class="content">
                <img src="../../../src/assets/hongbao.png" :style="{ 'height': '400px' }" />
            </div>
            <template #close>
                <c-button type="danger" plain>关闭弹窗</c-button>
            </template>
        </c-popup>
    </div>
</template>
<style lang='scss' scoped>
</style>