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
        <c-tip maxCount="9" :value="10">
            <c-button plain type="success">
                <i class="c-icon-success"></i>
            </c-button>
        </c-tip>
        <c-tip maxCount="29" :value="30">
            <c-button plain type="warning">
                <i class="c-icon-error"></i>
            </c-button>
        </c-tip>
        <c-tip maxCount="39" :value="40">
            <c-button plain type="danger">
                <i class="c-icon-heart"></i>
            </c-button>
        </c-tip>
        <c-tip maxCount="49" :value="50">
            <c-button plain type="primary">
                <i class="c-icon-star"></i>
            </c-button>
        </c-tip>
        <c-tip maxCount="59" :value="60">
            <c-button plain type="info">
                <i class="c-icon-info"></i>
            </c-button>
        </c-tip>
    </c-gap>
</template>
<style lang='scss' scoped>
</style>