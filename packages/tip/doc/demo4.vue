<script>
export default {
    name: '',
}
</script>
<script setup>
import { ref } from 'vue'
</script>
<template>
        <c-gap vertical="20">
            <c-tip :value="10">
                <c-button plain type="success">
                    <i class="c-icon-success"></i>
                </c-button>
            </c-tip>
            <c-tip top="75%" :value="30">
                <c-button plain type="warning">
                    <i class="c-icon-error"></i>
                </c-button>
            </c-tip>
            <c-tip right="75%" :value="40">
                <c-button plain type="danger">
                    <i class="c-icon-heart"></i>
                </c-button>
            </c-tip>
            <c-tip right="75%" top="75%" :value="50">
                <c-button plain type="primary">
                    <i class="c-icon-star"></i>
                </c-button>
            </c-tip>
        </c-gap>
</template>
<style lang='scss' scoped>
</style>

