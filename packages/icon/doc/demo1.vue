<script>
export default {
    name: '',
}
</script>
<script setup>
import { reactive, getCurrentInstance, createElementVNode } from "vue";
import iconJson from "../../../src/assets/iconfont/iconfont.json";
const { glyphs } = iconJson;
const { proxy } = getCurrentInstance();

const rec = reactive({
    demoList: [...glyphs.slice(0, 5)],
})

const copyIconName = name => {
    const inputEle = document.createElement("input")
    inputEle.value = name;
    document.body.appendChild(inputEle);
    inputEle.select();
    document.execCommand("copy");
    proxy.$message({text:"复制成功",type:"success",delay:1500});
    document.body.removeChild(inputEle);
}
</script>
<template>
    <div class="icon-demo1-container">
        <div v-for="(item, index) in rec.demoList" :key="index" @click="copyIconName(item.font_class)" class="icon-box">
            <i :class="`c-icon-${item.font_class}`"></i>
            <span>{{ item.font_class }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.icon-demo1-container {
    display: flex;
    flex-wrap: wrap;

    .icon-box {
        width: 136px;
        height: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        span,
        i {
            text-align: center;
        }

        i {
            font-size: 40px;
        }

        &:hover {
            background-color: $primary;
            transition: all 0.5s ease;
            cursor: pointer;

            span,
            i {
                color: white;
            }
        }
    }
}
</style>