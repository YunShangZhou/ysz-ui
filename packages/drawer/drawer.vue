<template>
  <transition name="drawer-fade">
    <div class="c-drawer-popup" v-if="modelValue" @click="closeOfModal($event)"></div>
  </transition>
  <transition :name="animateName">
    <div :class="['c-drawer-contain', customClass]" v-if="modelValue" :style="styles">
      <div class="c-drawer-contain-box">
        <div class="c-drawer-contain-box-header" :style="{ 'padding': showClose ? '0 20px 0 45px' : '0 20px 0 20px' }"
          v-if="showHeader">
          <slot name="header" v-if="$slot['header']"></slot>
          <i class="c-icon-close" v-if="showClose" @click="close"></i>
          <span v-if="!$slot['header']">{{ title }}</span>
          <div class="c-drawer-header-btn" v-if="!$slot['header']">
            <c-button size="small" :style="{ 'margin-right': confirmShow ? '10px' : '0' }" v-if="cancelShow"
              @click="cancelBtn">{{ cancelText }}</c-button>
            <c-button size="small" type="primary" v-if="confirmShow" @click="confirmBtn">{{ confirmText }}</c-button>
          </div>
        </div>
        <div class="c-drawer-contain-box-content"
          :style="{ 'height': showHeader ? (showFooter ? 'calc(100% - 110px)' : 'calc(100% - 55px)') : showFooter ? 'calc(100% - 55px)' : '100%' }">
          <slot name="content"></slot>
        </div>
        <div class="c-drawer-contain-box-footer" v-if="showFooter">
          <slot name="footer" v-if="$slot['footer']"></slot>
          <span v-else>我是底部的默认内容</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "cDrawer"
}
</script>
<script setup>
import { computed, watchEffect, useSlots } from 'vue'
const emit = defineEmits(['update:modelValue', 'close', 'confirm', 'cancel'])
const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: "标题"
  },
  width: {
    type: String,
    default: "30%"
  },
  height: {
    type: String,
    default: "40%"
  },
  direction: {
    type: String,
    default: 'left'
  },
  closeOnModal: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: "确定"
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmShow: {
    type: Boolean,
    default: true
  },
  cancelShow: {
    type: Boolean,
    default: true
  },
  customClass: String
})
const $slot = useSlots()
const styles = computed(() => {
  return [
    props.direction == "left" ? { "top": 0, "left": 0, "width": props.width, "height": "100%" } :
      props.direction == "top" ? { "top": 0, "left": 0, "width": "100%", "height": props.height } :
        props.direction == "right" ? { "top": 0, "right": 0, "width": props.width, "height": "100%" } :
          props.direction == "bottom" ? { "bottom": 0, "left": 0, "width": "100%", "height": props.height } : {}
  ]
})
const animateName = computed(() => {
  return props.direction == "left" ? "slide-left" :
    props.direction == "top" ? "slide-top" :
      props.direction == "right" ? "slide-right" :
        props.direction == "bottom" ? "slide-bottom" : ""
})
const close = () => {
  emit('update:modelValue', false)
  emit('close')
}
const confirmBtn = () => {
  emit('confirm')
}
const cancelBtn = () => {
  emit('cancel')
}
watchEffect(() => {
  if (props.modelValue) {
    if (typeof document !== 'undefined') {
      document.body.style = "overflow:hidden"
    }
  } else {
    if (typeof document !== 'undefined') {
      document.body.style = "overflow:initial"
    }
  }
})
const closeOfModal = (e) => {
  if (props.closeOnModal) {
    if (e.target.className == 'c-drawer-popup') {
      emit('update:modelValue', false)
      emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity .2s ease;
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
  transition: opacity .5s ease;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .3s ease;
  transform: translateX(0)
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: all .3s ease;
  transform: translateY(0)
}

.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(-100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .3s ease;
  transform: translateX(0)
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: all .3s ease;
  transform: translateY(0)
}

.slide-bottom-enter-from,
.slide-bottom-leave-to {
  transform: translateY(100%);
}

.c-drawer-popup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 8880;
}

.c-drawer-contain {
  width: 30%;
  height: 100%;
  position: fixed;
  z-index: 8881;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(7, 7, 7, 0.1);

  .c-drawer-contain-box {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .c-drawer-contain-box-header {
      width: 100%;
      height: 55px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      padding: 0 20px 0 45px;
      box-sizing: border-box;
      align-items: center;
      font-size: 16px;
      color: #505050;
      position: relative;

      i {
        margin-right: 10px;
        font-size: 17px;
        cursor: pointer;
        position: absolute;
        left: 20px;
        top: 20px;
      }

      span {
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .c-drawer-header-btn {
        position: absolute;
        right: 20px;
      }
    }

    .c-drawer-contain-box-content {
      width: 100%;
      height: calc(100% - 110px);
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
      color: #505050;
      font-size: 14px;
    }

    .c-drawer-contain-box-footer {
      width: 100%;
      height: 55px;
      display: flex;
      align-items: center;
      border-top: 1px solid #f0f0f0;
      color: #505050;
      font-size: 14px;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}

.c-drawer-contain-box-content::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

.c-drawer-contain-box-content::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #adadad;
}

.c-drawer-contain-box-content::-webkit-scrollbar-track {
  border-radius: 0px;
  background: rgb(221, 221, 221);
}
</style>