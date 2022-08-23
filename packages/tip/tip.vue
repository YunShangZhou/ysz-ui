<script>
export default {
    name: 'cTip',
}
</script>
<script setup>
import { ref } from 'vue';

/**
 * @param {String} type primary | info | warning | danger | other | success
 * @param {String} mode tip | dot
 * @param {Number,String} value 0
 * @param {String} size sm | md | ml | lg | xl
 * @param {String,Number} maxCount [9,99]
 */

// props
const { type, mode, value, size, maxCount, top, right } = defineProps({
    type: {
        type: String,
        default: "danger"
    },
    size: {
        type: String,
        default: "sm"
    },
    maxCount: {
        type: [String, Number],
        default: 99,
    },
    mode: {
        type: String,
        default: "tip"
    },
    value: {
        type: [Number, String],
        default: "0"
    },
    top: {
        type: String,
        default: "-7px",
    },
    right: {
        type: String,
        default: "-7px"
    }

})

// 对最大值区间的校验
if (maxCount < 9 || maxCount > 99) {
    console.error("The maxCount is out of range in [9,99]!");
}

// 提示类集合
const tipClass = () => {
    return [`tip`, `tip-${type}`, `tip-${size}`];
}

// 提示样式集合
const tipStyle = () => {
    return {
        top: top ,
        right: right 
    }
}

// 内部值
const innerValue = ref(value);

// 首先这个值是数字。若不是，那就默认显示内容
if (parseInt(innerValue.value) != 'NaN') {
    // 超过最大值，则超过部分以+代替
    if (innerValue.value > maxCount) {
        innerValue.value = maxCount + "+"
    }
}


// 如果显示为点
if (mode == 'dot') {
    innerValue.value = ' ';
}
</script>
<template>
    <div class="tip-container">
        <slot></slot>
        <div v-show="value != 0" :class="tipClass()" :style="tipStyle()">{{ innerValue }}</div>
    </div>
</template>
<style lang='scss' scoped>
.tip-container {
    position: relative;
    width: fit-content;

    .tip {
        position: absolute;
        border-radius: 10px;
        width: auto;
        min-height: 10px;
        padding: 0px 5px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @each $key,
    $val in $colorList {
        .tip-#{$key} {
            background-color: $val;
        }
    }


    @each $key,
    $val in $sizeList {
        .tip-#{$key} {
            font-size: $val;
        }
    }
}
</style>