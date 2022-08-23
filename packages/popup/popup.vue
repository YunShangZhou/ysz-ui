<script>
export default {
    name: "cPopup"
}
</script>
<script setup>
import { ref, defineEmits, watch, useSlots } from "vue";
// props
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false,
    },
    closeBottom: {
        type: [Number , String],
        default: 10,
    },
    size: {
        type: [Number , String],
        default: 16
    }
})


const innerIsShow = ref(props.isShow);
const $emit = defineEmits(['afterClose']); // 传给父级钩子
const slot = useSlots(); // 插槽实例化

// 关闭钩子
const handleClose = () => {
    // 关闭父组件传进来的isShow
    $emit("afterClose");
    innerIsShow.value = false;
}

// 监听父级isShow变化,变化时组件内部值一同变化
watch(() => props.isShow, n => {
    n == true && (innerIsShow.value = n);
})
</script>


<!-- 给父级元素和主体元素添加Transition -->
<template>
    <!-- 父级transition -->
    <Transition name="container" :duration="500">
        <div class="popup" v-show="innerIsShow">
            <div class="popup-mark"></div>
            <!-- 主题内容transition -->
            <Transition name="main">
                <div class="popup-content" v-show="innerIsShow">
                    <!-- 默认插槽 -->
                    <slot v-if="slot['default']"></slot>
                    <!-- 关闭按钮 -->
                    <div class="close" :style="{ 'bottom': props.closeBottom + '%' }" @click.stop="handleClose"
                        @touchstart.stop="handleClose">
                        <i v-if="!slot['close']" class="c-icon-error1 error-icon"
                            :style="{ 'font-size': props.size + 'px' }"></i>
                        <div v-else>
                            <!-- 自定义插槽，渲染关闭图案 -->
                            <slot name="close"></slot>
                        </div>
                    </div>
                </div>
            </Transition>

        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.main-enter-from {
    opacity: 0;
    transform: scale(0);
}

.main-enter-to {
    opacity: 1;
    transition: all 0.5s ease;
}

.main-leave-from {
    opacity: 1;
}

.main-leave-to {
    opacity: 0;
    transform: scale(0);
    transition: all 1s ease;
}


.main-enter-active {
    animation: bounce-in 0.5s;
}

.main-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.popup {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .popup-mark {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .6);
        z-index: -1;
    }


    // 内容层 z-index要比遮罩大，否则会被遮盖
    .popup-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;

        .close {
            cursor: pointer;
            position: absolute;
            &:hover {
                opacity: 0.8;
            }
        }

        .error-icon {
            color: white;
        }
    }

}
</style>
