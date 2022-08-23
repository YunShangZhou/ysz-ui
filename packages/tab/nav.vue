<script>
export default {
    name: 'cTabNav',
}
</script>
<script setup>
import { ref,computed,reactive,inject,ref,nextTick,watch,defineComponent,onUpdated,createVNode } from 'vue'

// 属性接收
const props = defineProps({
    panes: {
        type: Array,
        default: [],
    },
    currentName: String,
    active_color: String,
    color: String,
    addbale:{
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: "line",
    },
});

const tabsContext = inject("tabsContext");



</script>
<template>
    <div class="tabs-header" :class="typeClass">
        <!-- 如果有滚动，显示左箭头，并且有点击响应 -->
        <div class="tab-nav-pref" v-if="scrollable" @click="scrollPrev">
            <i class="c-icon-arrow-left"></i>
        </div>
        <!-- 添加按钮 -->
        <div class="tab-add-btn" v-if="props.addable" @click="tabContext.emits('onTabAdd')">
            <i class="c-icon-add add-icon"></i>
        </div>
        <!-- 如果有滚动，显示右箭头，并且有点击响应 -->
        <div class="tab-nav-next" v-if="scrollable" @click="scrollNext">
            <i class="c-icon-arrow-right"></i>
        </div>

        <!-- 导航栏下标滚动 -->
        <div class="tabs-nav-scroll" ref="navScroll" v-resize="navScrollResize"
            :style="{ 'margin-right': scrollable ? '30px' : '' }">
            <div class="tabs-nav" ref="navWrap" :style="{ transform: `translate3d(${-navWrap_offset}px,0px,0px)` }">
                <component :is="getLabelNode(pane)" v-resize="upDateBar" v-for="pane in props.panes" :key="pane.uid" />
            </div>
            <div
               class="active-bar"
               :style="active-bar-style"            
                v-if="props.type != 'card'"
            >
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
</style>