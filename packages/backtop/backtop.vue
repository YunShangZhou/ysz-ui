<!--
 * @Author: Yun 912453237@qq.com
 * @Date: 2022-08-02 13:18:34
 * @LastEditors: Yun 912453237@qq.com
 * @LastEditTime: 2022-08-04 22:32:52
 * @FilePath: \vuepress-learn-jsf:\test-baseui\packages\backtop\backtop.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Yun 912453237@qq.com, All Rights Reserved. 
-->

<script>
export default {
    name: "cBacktop",
}
</script>
<script setup>
import { onBeforeUnmount, onMounted, ref, useSlots } from "vue";

// 取传值
const { target, right, bottom } = defineProps({
    target: {
        type: String,
        default: "body"
    },
    right: {
        type: [Number, String],
        default: 2
    },
    bottom: {
        type: [Number, String],
        default: 5
    },
})
console.log(right, bottom)

const slot = useSlots(); // 插槽对象实例化;
const isShow = ref(false); // 是否显示
const innerRight = ref(right); // 距离右边框的百分比
const innerBottom = ref(bottom); // 距离下边框的百分比
const timer = ref(null); // 滚动条不断向上移动距离 定时器
const targetScrollTop = ref(0) // 目标文本对象滚动条顶部距离，用于控制图标是否显示

// 点击回滚至顶(从慢到快)
const handleBacktop = () => {
    /**
     * - 设置定时器, 每隔特定时间 滚动条向上滚动
     * - 如果目标文本对象 滚动条的 scrollTop 小于等于0 , 清除定时器。
     * - 每次点击的时候,清除定时器，并重新赋值新的。做到防抖效果
    */
    clearInterval(timer.value);
    let distance = 1; // 向上滑动的距离
    timer.value = setInterval(() => {
        distance += 1;
        targetScrollTop.value -= distance; // 定时器每次循环，距离都会+1，因为fn的词法作用域会被记住(闭包)
        if (typeof document != "undefined") {
            document.querySelector(target).scrollTop = targetScrollTop.value;
        }
        targetScrollTop.value <= 0 && clearInterval(timer.value) && (targetScrollTop.value = 0);
        // console.log("distance",distance);
        // console.log(targetScrollTop.value )
    })
}

// 滚动条回调
const handleScroll = e => {
    targetScrollTop.value = e.target.scrollTop;
    targetScrollTop.value > 0 ? (isShow.value = true) : (isShow.value = false);
}

// 挂载后
onMounted(() => {
    if (typeof document != "undefined") {
        document.querySelector(target).addEventListener("scroll", handleScroll)
    }
})

// 卸载前
onBeforeUnmount(() => {
    if (typeof document != "undefined") {
        document.querySelector(target).removeEventListener("scroll", handleScroll)
    }
})
</script>

<template>
    <transition name="fade">
        <div class="backtop-container" v-show="isShow" @click="handleBacktop"
            :style="{ 'right': innerRight + '%', 'bottom': innerBottom + '%' }">
            <slot v-if="slot['default']"></slot>
            <div v-else>
                <div class="backtop-box">
                    <i class="c-icon-backtop1 icon"></i>
                </div>
            </div>
        </div>
    </transition>

</template>


<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transition: all 0.5s ease;

}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transition: all 0.5s ease;
}

.backtop-container {
    position: fixed;
    width: 40px;
    height: 40px;
    z-index: 999;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    .backtop-box {
        border-radius: 5px;
        line-height: 37px;
        background-color: $primary;
        color: white;
        text-align: center;

        .icon {
            font-size: 30px;
        }
    }
}
</style>