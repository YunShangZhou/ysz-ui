<script>
export default {
    name: 'cInput',
}
</script>
<script setup>
import { ref, computed } from 'vue';

// props
const { width, height, modelValue, placeholder, leftIcon, rightIcon, showPwd, disabled, clearable, inputType, leftIconClick, rightIconClick } = defineProps({
    width: {
        type: String,
        default: "100%"
    },
    height: {
        type: String,
        default: "35px"
    },
    modelValue: {
        type: [String, Number],
        default: ""
    },
    placeholder: {
        type: String,
        default: "请输入..."
    },
    leftIcon: String,
    rightIcon: String,
    leftIconClick: {
        type: Function,
        default: () => { console.log("LeftIcon is clicked!") }
    },
    rightIconClick: {
        type: Function,
        default: () => { console.log("RightIcon is clicked!") }
    },
    showPwd: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: false
    },
    inputType: {
        type: String,
        default: "text"
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

// 变量区
const innerType = ref(inputType); // 本地类型
const inputRef = ref(null); // 输入框Dom

// emit
const emit = defineEmits(["update:modelValue", "update:inputType", "change","input","focus","blur"]);

// 左图像类集合
const leftIconClass = computed(() => {
    const classArr = [`c-input-icon`, 'left-icon'];
    leftIcon && classArr.push(`c-icon-${leftIcon}`);
    return classArr
})

// 右图像类集合
const rightIconClass = computed(() => {
    const classArr = [`c-input-icon`, 'right-icon'];
    // 不显示密码
    !showPwd && rightIcon && classArr.push(`c-icon-${rightIcon}`);
    return classArr
})

// 容器行内style
const containerStyle = { width, height }

// 输入框行内style
const inputStyle = { "padding-left": leftIcon ? "40px" : "20px", "padding-right": rightIcon ? "40px" : "20px" }

// 容器类
const containerClass = computed(() => {
    return ["c-input-container", disabled && "c-input-container-disabled"]
})

// 密码图像点击
const pwdIconClick = () => {
    if (disabled) return;
    // 是密码类型，则改为文本类型。否则改为密码类型
    innerType.value == "password" ? (innerType.value = "text") : (innerType.value = "password");
}

// 清除图像点击
const clearIconClick = () => {
    if (disabled) return;
    // 传空值给父级
    emit("update:modelValue", undefined);
    // 点击后重新聚焦
    inputRef.value.focus();
}

// ---原生方法---
// 框值相应
const handleInput = e => {
    emit("update:modelValue", e.target.value);
    emit("input",e);
}


// 原生change
const change = e => {
    emit("change", e);
}
// 原生focus
const focus = e => {
    emit("focus", e);
}
// 原生blur
const blur = e => {
    emit("blur", e);
}

</script>
<template>
    <div :class="containerClass" :style="containerStyle">
        <!-- 左图 -->
        <i @click="leftIconClick" v-if="leftIcon" :class="leftIconClass"></i>
        <!-- 输入库 -->
        <input ref="inputRef" @change="change" @blur="blur" @focus="focus" @input="handleInput" :disabled="disabled" :style="inputStyle" :type="innerType"
            :value="modelValue" :placeholder="placeholder" />
        <!-- 右框 -->
        <i @click="rightIconClick" v-if="rightIcon && !showPwd && !clearable" :class="rightIconClass"></i>
        <!-- 密码图 -->
        <i @click="pwdIconClick" v-if="showPwd && !clearable"
            :class="[innerType == 'password' ? 'c-icon-no_eye' : 'c-icon-eye', `c-input-icon`, 'right-icon']"></i>
        <!-- 清除图 -->
        <i @click="clearIconClick" v-if="clearable"
            :class="[modelValue && 'c-icon-clear', `c-input-icon`, 'right-icon']"></i>
    </div>
</template>
<style lang='scss' scoped>
.c-input-container {
    width: 100%;
    height: 35px;
    position: relative;

    input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        outline: transparent;
        border: 1px solid $input-border-color;
        padding: 0 10px;
        border-radius: 4px;
        color: black;
        font-size: $font-size-base;

        &:focus {
            outline: $primary solid 1px;
            transition: all 0.8s ease;
        }
    }

    .c-input-icon {
        position: absolute;
        cursor: pointer;
        color: gray;
    }

    .left-icon {
        top: 50%;
        transform: translateY(-45%);
        left: 15px;

        &:hover {
            color: $primary;
        }
    }

    .right-icon {
        top: 50%;
        transform: translateY(-45%);
        right: 15px;

        &:hover {
            color: $primary;
        }
    }




    // 输入提示
    input::placeholder {
        color: $input-placeholder-color;
        font-size: $font-size-base;
    }

    input::-webkit-input-placeholder {
        color: $input-placeholder-color;
        font-size: $font-size-base;
    }

    input:-ms-input-placeholder {
        color: $input-placeholder-color;
        font-size: $font-size-base;
    }

    input::-moz-placeholder {
        color: $input-placeholder-color;
        font-size: $font-size-base;
    }

    input::-webkit-input-placeholder {
        color: $input-placeholder-color;
        font-size: $font-size-base;
    }

}

.c-input-container-disabled {
    opacity: 0.6;

    input,
    .c-input-icon {
        cursor: not-allowed;
    }

    .c-input-icon:hover {
        color: inherit;
    }
}
</style>