

<script>
export default {
  name: "cCol"
}
</script>
<script setup>
import { ref } from 'vue'
const { span, offset } = defineProps({
  span: {
    type: Number,
    default: 24
  },
  offset: Number
})
/**
 * 接收的宽度范围，符合以下要求:
 * - 小于24
 * - 是整数
*/
const width = ref(isValidProp(span));
const marginLeft = ref(isValidProp(offset));

// 是否是有效属性
function isValidProp(prop) {
  const int = parseInt(prop);
  if (int > 0 && int <= 24) {
    return 100 * int/24 + "%";
  }
  return "";
} 
</script>
<template>
  <div class="ysz-col-default">
    <slot></slot>
  </div>
</template>



<style lang="scss" scoped>
.ysz-col-default {
  width: v-bind(width);
  float: left;
  margin-left: v-bind(marginLeft)
}
</style>