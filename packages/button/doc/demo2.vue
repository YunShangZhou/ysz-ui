<script setup></script>
<template>
    <c-gap :inline="false">
        <c-gap>
            <c-button plain>默认按钮</c-button>
            <c-button plain type="success">成功按钮</c-button>
            <c-button plain type="warning">警告按钮</c-button>
            <c-button plain type="danger">危险按钮</c-button>
            <c-button plain type="primary">主体按钮</c-button>
            <c-button plain type="info">信息按钮</c-button>
        </c-gap>
        <c-gap>
            <c-button plain type="success">
                <i class="c-icon-success"></i>
            </c-button>
            <c-button plain type="warning">
                <i class="c-icon-error"></i>
            </c-button>
            <c-button plain type="danger">
                <i class="c-icon-heart"></i>
            </c-button>
            <c-button plain type="primary">
                <i class="c-icon-star"></i>
            </c-button>
            <c-button plain type="info">
                <i class="c-icon-info"></i>
            </c-button>
        </c-gap>
    </c-gap>
</template>