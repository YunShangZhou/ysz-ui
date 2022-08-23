<script>
export default {
  name: 'cGap',
}
</script>
<script setup>
import { ref, useSlots, h, render, onMounted } from 'vue';

// props
const { inline, vertical, horizontal, alignItems, boxClass, itemClass } = defineProps({
  inline: {
    type: Boolean,
    default: true,
  },
  vertical: {
    type: [String, Number],
    default: 0,
  },
  horizontal: {
    type: [String, Number],
    default: 0,
  },
  alignItems: {
    type: String,
    default: "flex-start"
  },
  boxClass: {
    type: String,
    default: ""
  },
  itemClass: {
    type: String,
    default: ""
  }

})

const slot = useSlots(); // 实例化插槽
const slotBox = ref([]); // 插槽盒子
const gapRef = ref(null);

onMounted(() => {
  // 默认插槽的每个子元素添加 水平/垂直 的外边距设置。并推入插槽盒子中 
  Promise.resolve(
    slot.default().forEach(item => {
      slotBox.value.push(h("div", {
        className: `class-gap-item ${itemClass}`,
        style: gapItemStyle()
      }, item))
    })
  )
    .then(() => {
      // 插槽渲染
      const slotRender = h("div", {
        className: `class-gap-box ${boxClass}`,
        style: gapBoxStyle()
      }, slotBox.value)
      render(slotRender, gapRef.value);
    }
    )

})

// 间隙盒子样式
function gapBoxStyle() {
  if (inline) {
    return ({
      "display": "inline-flex",
      "flex-wrap": "wrap",
      "justify-content": "flex-start",
      "align-items": alignItems,
      "width": horizontal ? "fit-content" : "100%",
    })
  }
  return ({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": alignItems,
    "align-items": "space-between",
    "height": vertical ? "fit-content" : "100%",
  })
}

// 间隙子项样式
function gapItemStyle() {
  if (inline) {
    return { margin: `${vertical}px ${horizontal || 10}px`, width: "fit-content" };
  }
  return { margin: `${vertical || 10}px ${horizontal}px`, width: "fit-content" };

}


</script>
<template>
  <div class="c-gap-container" ref="gapRef">
  </div>
</template>
<style lang='scss' scoped>
</style>