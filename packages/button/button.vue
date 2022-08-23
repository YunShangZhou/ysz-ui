<script>
export default {
    name: "cButton"
}
</script>
<script setup>
import { computed } from "vue";

const { bgColor, color, type, mode, href, plain, disabled, size, extraClass } = defineProps({
    extraClass: {
        type: String,
        default: ""
    },
    bgColor: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "default"
    },
    plain: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
    },
    mode: {
        type: String,
        default: "button"
    },
    href: {
        type: String,
        default: "javascript: void(0);"
    },
    target: {
        type: String,
        default: "_self"
    },
})

// 主题类型数组
const typeArr = ["success", "warning", "info", "danger","error", "primary", "other"]
// 字号数组
const sizeArr = ["sm", "md", "ml", "lg", "xl"];

// 按钮类集合
const buttonClass = computed(() => {
    let classArr = ['c-button', extraClass];
    let computedType = typeArr.includes(type) ? `c-button-${type}` : 'c-button-default';
    // 如果朴素风格开启
    plain && type && (computedType = `c-button-plain-${type}`);
    classArr.push(computedType)

    // 如果禁用功能开启
    disabled && classArr.push("c-button-disabled")
    // 如果传入size
    sizeArr.includes(size) && classArr.push(`c-button-${size}`)
    return classArr
});

// a链接类集合
const linkClass = computed(() => {
    let classArr = ['c-link', extraClass];
    let computedType = typeArr.includes(type) ? `c-link-${type}` : 'c-link-default';
    classArr.push(computedType);

    // 如果禁用功能开启
    disabled && classArr.push("c-link-disabled")
    // 如果传入size
    sizeArr.includes(size) && classArr.push(`c-link-${size}`);

    console.log(classArr);
    return classArr
});

</script>

<template>
    <div class="button-container">
        <button v-if="mode == 'button'" :class="buttonClass">
            <slot></slot>
        </button>
        <a v-else :href="href" :target="target" :class="linkClass">
            <slot></slot>
        </a>
    </div>

</template>


<style lang="scss" scoped>
button {
    outline: none;
    background-color: transparent;
    cursor: pointer;
}

.button-container {
    display: inline-block;


    // 按钮初始化
    .c-button {
        border: 0;
        padding: 12px 24px;
        outline: none;
        background: none;
        line-height: 1;
        font-size: $font-size-md;
        color: #f0f0f0;
        border-radius: 5px;
    }

    // a链接初始化
    .c-link {
        text-decoration: none;
    }

    // 默认的a链接样式
    .c-link-default {
        color: $primary;
    }

    // 默认朴素风格下的边框,字体颜色
    .c-button-default,
    .c-button-plain-default {
        color: black;
        border: 1px solid rgb(185, 183, 183);
    }

    // 默认朴素风格下的字体颜色
    .c-button-plain-default:hover {
        color: rgb(195, 192, 192) !important;
    }

    // 不同主题的颜色渲染
    @each $key,
    $val in $colorList {

        // 渲染不同主题的背景色
        .c-button-#{$key} {
            background-color: $val;

            &:hover {
                opacity: 0.8;
            }
        }

        // a链接的字体颜色
        .c-link-#{$key} {
            color: $val;

            &:hover {
                opacity: 0.8;
            }
        }

        // 这里需要渲染朴素风格的字体颜色，激活颜色
        .c-button-plain-#{$key} {
            color: $val;
            border: 1px solid $val;

            &:hover,
            .active {
                background-color: $val;
                color: white;
            }
        }

    }

    // 链接颜色加深

    // 不同朴素风格的颜色渲染
    @each $key,
    $val in $plain-colorList {

        // 渲染不同朴素风格的背景色
        .c-button-#{$key} {
            background-color: $val;
        }
    }

    // 朴素风格的禁用同时注意修改不透明度。
    .c-button-disabled.c-button,
    .c-link-disabled.c-link {
        cursor: not-allowed;
        opacity: 0.6;

        &:hover {
            opacity: 0.6;
        }
    }


    @each $key,
    $val in $sizeList {

        .c-button-#{$key},
        .c-link-#{$key} {
            font-size: $val;
        }
    }
}
</style>