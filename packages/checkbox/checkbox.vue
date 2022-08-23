<template>
  <div :class="checkBoxClass()">
    <label v-for="(item, index) in checkDataSource" :key="index" :class="labelClass(item)"
      @click="checkChange(item, index)" :style="labelStyle(item)">
      <span class="c-checkbox-selectbox" :style="selectBoxStyle(item)"></span>
      <span :style="selectBoxSpanStyle(item)">{{
          item[labelField]
      }}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: "cCheckbox"
}
</script>
<script setup>
import { ref } from 'vue';

// 父级传值
const emit = defineEmits(['update:modelValue', 'change'])

// props
const { modelValue, size, dataSource, labelField, valueField, inline, extraColor, extraClass } = defineProps({
  modelValue: {
    type: Array,
    default: () => {
      return []
    }
  },
  size: {
    type: String,
    default: 'default'
  },
  dataSource: {
    type: Array,
    default: () => {
      return []
    }
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  inline: {
    type: Boolean,
    default: true
  },
  extraColor: String,
  extraClass: String
})

// 拿到数据源
const checkDataSource = ref(dataSource || [])

// 为每个项添加checked属性,初始化 勾选状态
checkDataSource.value.forEach((item) => {
  item.checked = false
  // 如果响应数组有值，则将有值的选项激活
  modelValue.forEach((item1) => {
    if (item[valueField] === item1) {
      item.checked = true
    }
  })
})


// 选项反选
const checkChange = (item, index) => {
  let checkData = []
  
  // 不禁用时,反选
  if (!item.disabled) {
    item.checked = !item.checked
  }

  // 每次反选都将新的勾选数组传给父级
  checkDataSource.value.forEach((item, index) => {
    if (item.checked) {
      checkData.push(item[valueField])
    }
  })
  emit('update:modelValue', checkData)
  emit('change', { "value": checkData, "index": index })
}

// 选项容器类
const checkBoxClass = () => {
  return ([`c-checkbox-${size}`, extraClass]);
}

// 标签集合类
const labelClass = item => {
  return ["c-checkbox-label", { 'c-checkbox-label-active': item.checked },
    item.checked ? item.disabled ? 'c-checkbox-label-active-disabled' : '' : item.disabled ? 'c-checkbox-label-disabled' : ''];
}

// 标签集合样式
const labelStyle = () => {
  return ({ 'display': inline ? 'inline-block' : 'table', 'margin-bottom': inline ? '0' : size == 'small' ? '8px' : size == 'mini' ? '6px' : '10px' })
}

// 选项盒子样式
const selectBoxStyle = item => {
  return ({ 'border-color': extraColor == '' ? '' : item.disabled ? '' : item.checked ? extraColor : '', 'background': extraColor == '' ? '' : item.disabled ? '' : item.checked ? extraColor : '' })
}

// 选项盒子行样式
const selectBoxSpanStyle = item => {
  return ({ 'color': extraColor == '' ? '' : item.disabled ? '' : item.checked ? extraColor : '' });
}
</script>

<style lang="scss" scoped>
.c-checkbox-default {
  width: auto;
  height: auto;
  overflow: hidden;

  .c-checkbox-label {
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 20px;
    user-select: none;

    span {
      float: left;
      color: #505050;
      font-size: 14px;
    }

    .c-checkbox-selectbox {
      width: 14px;
      height: 14px;
      border-radius: 4px;
      display: inline-block;
      border: 1px solid $disabled-border-color;
      margin: 3.2px 8px 0 0;
      background: #fff;
      position: relative;
      float: left;
      font-size: 14px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;

      &::after {
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 3px;
        height: 7.5px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;
        position: absolute;
        left: 4px;
        transition: transform 0.15s ease-in;
      }
    }
  }

  .c-checkbox-label-active {
    span {
      color: $primary
    }

    .c-checkbox-selectbox {
      border: 1px solid $primary;
      background: $primary;

      &::after {
        border-color: #fff;
      }
    }
  }

  .c-checkbox-label-active-disabled {
    cursor: no-drop;

    span {
      color: $disabled-font-color;
    }

    .c-checkbox-selectbox {
      border: 1px solid $disabled-border-color;
      background: $disabled-bg-color;

      &::after {
        border-color: #999999;
      }
    }
  }

  .c-checkbox-label-disabled {
    cursor: no-drop;

    span {
      color: $disabled-font-color;
    }

    .c-checkbox-selectbox {
      border: 1px solid $disabled-border-color;
      background: $disabled-bg-color;

      &::after {
        border-color: $disabled-bg-color;
      }
    }
  }
}

// small

.c-checkbox-small {
  width: auto;
  height: auto;
  overflow: hidden;

  .c-checkbox-label {
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 13px;
    margin-right: 15px;
    user-select: none;

    span {
      float: left;
      color: #505050;
      font-size: 13px;
    }

    .c-checkbox-selectbox {
      width: 13px;
      height: 13px;
      border-radius: 3px;
      display: inline-block;
      border: 1px solid $disabled-border-color;
      margin: 3.5px 8px 0 0;
      background: #fff;
      position: relative;
      float: left;
      font-size: 13px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;

      &::after {
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 2.5px;
        height: 6.5px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;
        position: absolute;
        left: 3px;
        transition: transform 0.15s ease-in;
      }
    }
  }

  .c-checkbox-label-active {
    span {
      color: $primary
    }

    .c-checkbox-selectbox {
      border: 1px solid $primary;
      background: $primary;

      &::after {
        border-color: #fff;
      }
    }
  }

  .c-checkbox-label-active-disabled {
    cursor: no-drop;

    span {
      color: $disabled-font-color;
    }

    .c-checkbox-selectbox {
      border: 1px solid $disabled-border-color;
      background: $disabled-bg-color;

      &::after {
        border-color: #999999;
      }
    }
  }

  .c-checkbox-label-disabled {
    cursor: no-drop;

    span {
      color: $disabled-font-color;
    }

    .c-checkbox-selectbox {
      border: 1px solid $disabled-border-color;
      background: $disabled-bg-color;

      &::after {
        border-color: $disabled-bg-color;
      }
    }
  }
}

// mini

.c-checkbox-mini {
  width: auto;
  height: auto;
  overflow: hidden;

  .c-checkbox-label {
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 14px;
    user-select: none;

    span {
      float: left;
      color: #505050;
      font-size: 12px;
    }

    .c-checkbox-selectbox {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      display: inline-block;
      border: 1px solid $disabled-border-color;
      margin: 4.3px 8px 0 0;
      background: #fff;
      position: relative;
      float: left;
      font-size: 12px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;

      &::after {
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 2px;
        height: 6px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;
        position: absolute;
        left: 3px;
        transition: transform 0.15s ease-in;
      }
    }
  }

  .c-checkbox-label-active {
    span {
      color: $primary
    }

    .c-checkbox-selectbox {
      border: 1px solid $primary;
      background: $primary;

      &::after {
        border-color: #fff;
      }
    }
  }

  .c-checkbox-label-active-disabled {
    cursor: no-drop;

    span {
      color: $disabled-font-color;
    }

    .c-checkbox-selectbox {
      border: 1px solid $disabled-border-color;
      background: $disabled-bg-color;

      &::after {
        border-color: #999999;
      }
    }
  }

  .c-checkbox-label-disabled {
    cursor: no-drop;

    span {
      color: $disabled-font-color;
    }

    .c-checkbox-selectbox {
      border: 1px solid $disabled-border-color;
      background: $disabled-bg-color;

      &::after {
        border-color: $disabled-bg-color;
      }
    }
  }
}
</style>