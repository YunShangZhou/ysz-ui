<script setup></script>
<template>
    <div class="button-demo5-container">
        <c-button mode="link" href="https://www.baidu.com">跳转至百度(新窗口)</c-button>
        <c-button mode="link" href="https://yunshangzhou.github.io/js-book/" type="other" target="_self">个人博客(在当前窗口)
        </c-button>
    </div>
</template>

<style lang="scss" scoped >
.button-demo5-container {
    div + div{
        margin-left: 10px;
    }
}
</style>