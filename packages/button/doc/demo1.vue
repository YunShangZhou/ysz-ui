<script setup></script>
<template>
    <c-gap :inline="false">
        <c-gap alignItems="center">
            <c-button>默认按钮</c-button>
            <c-button type="success">成功按钮</c-button>
            <c-button type="warning">警告按钮</c-button>
            <c-button type="danger">危险按钮</c-button>
            <c-button type="primary">主体按钮</c-button>
            <c-button type="info">信息按钮</c-button>
            <c-button mode="link">默认链接</c-button>
            <c-button mode="link" type="other">其他链接</c-button>
        </c-gap>
        <c-gap>
            <c-button type="success">
                <i class="c-icon-success"></i>
            </c-button>
            <c-button type="warning">
                <i class="c-icon-error"></i>
            </c-button>
            <c-button type="danger">
                <i class="c-icon-heart"></i>
            </c-button>
            <c-button type="primary">
                <i class="c-icon-star"></i>
            </c-button>
            <c-button type="info">
                <i class="c-icon-info"></i>
            </c-button>
        </c-gap>
    </c-gap>
</template>

<style lang="scss" scoped >
</style>