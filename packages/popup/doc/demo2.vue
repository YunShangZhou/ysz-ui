<script>
export default {
    name: '',
}
</script>
<script setup>
import { ref } from 'vue'
const isShow = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);
// 弹出钩子
const handlePopup = () => {
    isShow.value = true;
};

// 弹出钩子
const handlePopup2 = () => {
    isShow2.value = true;
};
// 弹出钩子
const handlePopup3 = () => {
    isShow3.value = true;
};

// 弹出钩子
const handlePopup4 = () => {
    isShow4.value = true;
};

// 弹窗 (自动触发) 
const handleAfterClose = () => {
    console.log("我被触发了")
    isShow.value = false;
};

// 弹窗 (自动触发) 
const handleAfterClose2 = () => {
    console.log("我被触发了")
    isShow2.value = false;
};
// 弹窗 (自动触发) 
const handleAfterClose3 = () => {
    console.log("我被触发了")
    isShow3.value = false;
};

// 弹窗 (自动触发) 
const handleAfterClose4 = () => {
    console.log("我被触发了")
    isShow4.value = false;
};
</script>
<template>
    <div>
        <c-gap>
            <c-button type="success" plain @click="handlePopup">距底5%</c-button>
            <c-button type="primary" plain @click="handlePopup2">距底15%</c-button>
            <c-button type="warning" plain @click="handlePopup3">距底20%</c-button>
            <c-button type="info" plain @click="handlePopup4">距底25%</c-button>
        </c-gap>
        <c-popup :isShow="isShow" closeBottom="5" @afterClose="handleAfterClose">
            <div class="content">
                <img src="../../../src/assets/hongbao2.png" :style="{ 'height': '500px' }" />
            </div>
        </c-popup>

        <c-popup :isShow="isShow2" closeBottom="15" @afterClose="handleAfterClose2">
            <div class="content">
                <img src="../../../src/assets/hongbao2.png" :style="{ 'height': '500px' }" />
            </div>
        </c-popup>

        <c-popup :isShow="isShow3" closeBottom="20" @afterClose="handleAfterClose3">
            <div class="content">
                <img src="../../../src/assets/hongbao2.png" :style="{ 'height': '500px' }" />
            </div>
        </c-popup>

        <c-popup :isShow="isShow4" closeBottom="25" @afterClose="handleAfterClose4">
            <div class="content">
                <img src="../../../src/assets/hongbao2.png" :style="{ 'height': '500px' }" />
            </div>
        </c-popup>
    </div>
</template>
<style lang='scss' scoped>
</style>