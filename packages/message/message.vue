<script>
export default {
    name: 'cMessage',
}
</script>
<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue'

/**
 * @param {String} text 文字内容
 * @param {String} type 提示类型  "info" | "primary" | "success" | "warning" | "danger"
 * @param {String} size 字号大小  "sm" | "default" | "md" | "ml" | "lg" | "xl" | 
 * @param {String} bgColor 背景色
 * @param {String} color 字体色
 * @param {String} prefixIcon 自定义前缀图片
 * @param {Number} delay 停留时间
*/

const { text, size, type, bgColor, color, prefixIcon, delay } = defineProps({
    text: {
        type: [String, Number],
        default: "这是一个message消息框(默认消息)"
    },
    type: {
        type: String,
        default: "info"
    },
    size: {
        type: String,
        default: "md"
    },
    bgColor: String,
    color: String,
    prefixIcon: {
        type: String,
        default: "",
    },
    delay: {
        type: Number,
        default: 2000
    },
})
const isShow = ref(false); // 是否显示


// 图标类
const iconClass = computed(() => {
    // 类型对应图标名的对象
    const iconObj = {
        "info": "info",
        "primary": "user",
        "success": "success",
        "warning": "warning",
        "error": "error",
        "danger": "error",
        "other": "share3",
    }
    if (!prefixIcon) {
        return [`c-icon-${iconObj[type]}`]
    }
    return [`c-icon-${prefixIcon}`];
})

const messageStyle = {
    "background-color": bgColor+" !important",
    "color" : color+ " !important"
}

onMounted(() => {
    setTimeout(() => {
        isShow.value = true;
    })
    setTimeout(() => {
        isShow.value = false;
    }, delay)
})

</script>
<template>
    <transition name="msg-fade">
        <div :class="['message-wrapper', `message-wrapper-${type}`, `message-wrapper-${size}`]" :style="messageStyle" v-show="isShow">
            <slot></slot>
            <span>
                <i :class="iconClass"></i>
                {{ text }}</span>
        </div>
    </transition>

</template>
<style lang='scss' scoped>
.msg-fade-enter-to,
.msg-fade-leave-from {
    opacity: 1;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(0);

}


.msg-fade-enter-from,
.msg-fade-leave-to {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(-50px);
}

  

.message-wrapper {
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;

    span {
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

}

// 背景颜色
@each $key,
$val in $plain-bgColorList {
    .message-wrapper-#{$key} {
        background-color: $val;
    }
}


// 字体颜色
@each $key,
$val in $colorList {
    .message-wrapper-#{$key} {
        color: $val;
    }
}


// 字号
@each $key,
$val in $sizeList {
    .message-wrapper-#{$key} {

        span,
        i {
            font-size: $val;
        }
    }
}
</style>