<script>
export default {
    name: '',
}
</script>
<script setup>
import { ref } from 'vue'
</script>
<template>
    <c-gap>
        <c-tip type="success" :value="10">
            <c-button plain type="success">
                <i class="c-icon-success"></i>
            </c-button>
        </c-tip>
        <c-tip type="warning" :value="30">
            <c-button plain type="warning">
                <i class="c-icon-error"></i>
            </c-button>
        </c-tip>
        <c-tip type="danger" :value="40">
            <c-button plain type="danger">
                <i class="c-icon-heart"></i>
            </c-button>
        </c-tip>
        <c-tip type="primary" :value="50">
            <c-button plain type="primary">
                <i class="c-icon-star"></i>
            </c-button>
        </c-tip>
        <c-tip type="info" :value="60">
            <c-button plain type="info">
                <i class="c-icon-info"></i>
            </c-button>
        </c-tip>
    </c-gap>
</template>
<style lang='scss' scoped>
</style>

