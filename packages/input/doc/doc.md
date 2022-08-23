<script setup>
   import demo1 from './demo1.vue'
   import demo2 from './demo2.vue'
   import demo3 from './demo3.vue'
   import demo4 from './demo4.vue'
   import demo5 from './demo5.vue'
   import demo6 from './demo6.vue'
   import demo7 from './demo7.vue'
   import Attributes from './Attributes.vue'
   import Events from './Events.vue'


</script>


# input 输入框
 基于原生输入框，美化了样式，扩展小部分 功能。

# 基本使用

<preview-box>
<demo1 />
<preview  comName='input' demoName='demo1' />
</preview-box>


# 宽高设定
<preview-box>
<demo7 />
<preview  comName='input' demoName='demo7' />
</preview-box>

# 禁止输入

<preview-box>
<demo2 />
<preview  comName='input' demoName='demo2' />
</preview-box>

# 图标引入

## 前/后缀引入图标

<preview-box>
<demo3 />
<preview  comName='input' demoName='demo3' />
</preview-box>

## 图标加入钩子函数
<preview-box>
<demo4 />
<preview  comName='input' demoName='demo4' />
</preview-box>

# 密码显隐
<preview-box>
<demo5 />
<preview  comName='input' demoName='demo5' />
</preview-box>

# 清除输入值
<preview-box>
<demo6 />
<preview  comName='input' demoName='demo6' />
</preview-box>


# Attributes 参数
<Attributes />

# Events 事件
<Events />


