<script>
export default {
    name: '',
}
</script>
<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import iconJson from "../../../src/assets/iconfont/iconfont.json";
const { glyphs } = iconJson;
const { proxy } = getCurrentInstance();
const searchValue = ref(""); // 索引值

const { demoList } = reactive({
    demoList: [...glyphs],
})

const fontClassList = ref(demoList.map(item => item.font_class));
// 框内值
const handleInput = e => {
    console.log(e.target.value);
    let searchResult = fontClassList.value.filter(str => str.includes(e.target.value));
    if (searchResult == undefined) return ;
    if (e.target.value != "") {
        console.log(searchResult);
        fontClassList.value = [...searchResult];
    } else {
        fontClassList.value = demoList.map(item => item.font_class)
    }
}

// 复制图标名
const copyIconName = name => {
    const area = document.createElement("textarea");
    area.innerText = name;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    proxy.$message({ text: "复制成功", type: "success", delay: 3000 });
    document.body.removeChild(area);
}

</script>
<template>
    <div>
        <c-input v-model="searchValue" @input="handleInput"></c-input>
        <div class="icon-container">
            <div v-for="(item, index) in fontClassList" :key="index" @click="copyIconName(item.font_class)"
                class="icon-box">
                <i :class="`c-icon-${item}`"></i>
                <span>{{ item }}</span>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.icon-container {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    .icon-box {
        width: 136px;
        height: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 5px 0;
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