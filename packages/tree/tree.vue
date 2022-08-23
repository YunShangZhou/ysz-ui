<script>
export default {
    name: 'cTree',
}
</script>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import cTreeChild from "./treeChild.vue";
const { dataSource, activeIndex, isAllOpen, isAllChecked, openSelection, checkedSelection, disabledSelection, multiple, extraClass } = defineProps({
    activeIndex: {
        type: String,
        default: ""
    },
    dataSource: {
        type: Array,
        default: [],
    },
    isAllOpen: {
        type: Boolean,
        default: false
    },
    isAllChecked: {
        type: Boolean,
        default: false
    },
    disabledSelection: {
        type: Array,
        default: []
    },
    openSelection: {
        type: Array,
        default: []
    },
    checkedSelection: {
        type: Array,
        default: []
    },
    multiple: {
        type: Boolean,
        default: false
    },
    extraClass: {
        type: String,
        default: ""
    }
})

const rootActiveIndex = ref(""); // 根节点 激活项
let { innerDataSource, innerCheckedSelection } = reactive({
    innerDataSource: changedDataSource(dataSource),
    innerCheckedSelection: checkedSelection,
})
const emits = defineEmits(["handleCheck", 'handleClick', "change"]); // 子串父


// 接收子级 传值，更新激活项
const change = ({ item, index }) => {
    rootActiveIndex.value = item.label + "-" + index;
}

// 接收子级 传值, 传给用户
const handleNodeClick = item => {
    emits("handleClick", item);
    emits("change", item);
}

// 勾选盒子
const handleCheckboxClick = ({ item, operation }) => {
    // 如果存在则不加入,且其子项全部推入数组
    if (operation == "push" && !innerCheckedSelection.includes(item.label)) {
        innerCheckedSelection.push(item.label);

        // 有子项时，所有子项勾选，并推入数组。
        if (item.children && item.children.length != 0) {
            childrenLoop(item.children, childItem => {
                childItem.isChecked = true;
                innerCheckedSelection.push(childItem.label);
            })
        }


    } else {
        // 如果不存在则不删减
        innerCheckedSelection = innerCheckedSelection.reduce((pre, cur) => {
            cur != item.label && pre.push(cur);
            return pre;
        }, []);

        // 有子项时，所有子项取消勾选，并从数组中移除。
        if (item.children && item.children.length != 0) {
            childrenLoop(item.children, childItem => {
                childItem.isChecked = false;

                // 存在子项，则跳过不推入。否则推入。
                innerCheckedSelection = innerCheckedSelection.reduce((pre, cur) => {
                    cur != childItem.label && pre.push(cur);
                    return pre;
                }, []);
            })


        }
    }




    emits("handleCheck", innerCheckedSelection)
}

// 子项初始化---对dataSource作调整，增加收展、选项、禁用属性
function changedDataSource(data) {
    return childrenLoop(data, item => {
        // 子项初始化(不改变已存在值)
        typeof item.isOpen == 'undefined' && (item.isOpen = false);
        typeof item.isChecked == 'undefined' && (item.isChecked = false);
        typeof item.isDisabled == 'undefined' && (item.isDisabled = false);
        typeof item.value == 'undefined' && (item.value = "");

        // 若存有标签值，则修改
        openSelection.includes(item.label) && (item.isOpen = true);
        checkedSelection.includes(item.label) && (item.isChecked = true);
        disabledSelection.includes(item.label) && (item.isDisabled = true);


        // 以下优先级最高，因此放在最后
        // 全部展开
        if (isAllOpen) {
            item.isOpen = true;
        }

        // 全部勾选
        if (isAllChecked) {
            item.isChecked = true;
        }
    });
}


// 一个递归的api，递归它的所有子项，而具体操作，由fn决定
function childrenLoop(data, func) {
    return data.map(item => {
        func(item);
        // 子项是否还有子项，且长度不为0。若满足2条规则，则递归
        if (item.children && item.children.length != 0) {
            childrenLoop(item.children, func);
        }
        return item;
    })
}

</script>
<template>
    <!-- 为解决递归导致的属性不共享，创建此祖先节点 -->
    <!-- 第一层tree-child添加 @change方法 ， 接收 子孙传上来的值，再以父传子的方式，由上往下一一层级传入activeIndex,以达到属性共享 -->
    <div :class="['tree-container', extraClass]">
        <c-tree-child :activeIndex="rootActiveIndex" :dataSource="innerDataSource" :isAllOpen="isAllOpen"
            :isAllChecked="isAllChecked" :openSelection="openSelection" :checkedSelection="checkedSelection"
            :disabledSelection="disabledSelection" :multiple="multiple" @change="change"
            @handleCheckboxClick="handleCheckboxClick" @handleNodeClick="handleNodeClick">
        </c-tree-child>
    </div>
</template>
<style lang='scss' scoped>
</style>