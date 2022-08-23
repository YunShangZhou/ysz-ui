<script setup>
   import demo1 from './demo1.vue'
   import demo2 from './demo2.vue'
   import demo3 from './demo3.vue'
   import demo4 from './demo4.vue'
   import demo5 from './demo5.vue'
   import Attributes from "./Attributes.vue";
</script>

# tip 消息提示
  用于提示 **接收消息** 的 **数量**。

# 基础使用

<preview-box>
<demo1 />
<preview  comName='tip' demoName='demo1' />
</preview-box>

# 上限设置
你可以设置`最高上限`,以达到`99+`的效果。

<preview-box>
<demo2 />
<preview  comName='tip' demoName='demo2' />
</preview-box>


# 颜色主题切换
多种颜色主题供选择
<preview-box>
<demo3 />
<preview   comName='tip' demoName='demo3' />
</preview-box>

# 位置调整
可调整 **提示** 的距离，使其可在父级的**任意位置**。
<preview-box>
<demo4 />
<preview  comName='tip' demoName='demo4' />
</preview-box>

# 数字省略
可以是**数字显示**, 也可以只显示一个 **点**

<preview-box>
<demo5 />
<preview  comName='tip' demoName='demo5' />
</preview-box>


# Attributes 参数
<Attributes />

