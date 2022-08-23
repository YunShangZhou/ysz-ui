<script>
export default {
    name: 'cTreeChild',
}
</script>
<script setup>
import { emit } from 'process';
import { onMounted, reactive, ref } from 'vue';
import { createWebHistory } from 'vue-router';


/**
 * 功能点:
 * 1. 接收一串数组类型的数据，数据结构固定([{label:"xxx",children:[] }]);
 * 2. 可控制全展开，或 全关闭
 * 扩展点:
 * 1. 可指定某一个节点展开
 * 2. 带有选项
 * 3. 根节点可以反选
 * 
 * 难题:
 * 1. 因为子项是由递归渲染的，每个组件之间的active是独立的,导致有多个激活层。
*/
const { dataSource, activeIndex, isAllOpen, isAllChecked, openSelection, checkedSelection, disabledSelection, multiple } = defineProps({
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
    }
})

// 子传父
const emits = defineEmits(["handleNodeClick", "change", "handleCheckboxClick"])

let { innerDataSource } = reactive({
    innerDataSource: dataSource,

})

// 选项盒子类集合
const checkboxClass = (item) => {
    return ["tree-item-checkbox",
        item.isChecked ? (item.isDisabled ? "tree-item-checkbox-acitve-disabled" : "tree-item-checkbox-acitve") : "",
        item.isDisabled ? "tree-item-checkbox-disabled" : ""]
}

/**
 * 点击收展
 * */
function handleItemClick(item, index) {
    if (item.isDisabled) return;
    // 收展布尔
    if (typeof item.isOpen != 'undefined') {
        item.isOpen = !item.isOpen;
    }

    // 每次点击都会传值
    emits("change", { item, index });
}

// 点击后给父级传值
function handleChangeClick({ item, index }) {
    // 父级传值
    emits("handleNodeClick", { item, index });
    emits("change", { item, index });
}


// 选项盒子点击钩子
function handleCheckboxClick(item) {
    if (item.isDisabled) return;
    let operation = item.isChecked ? "splice" : "push"; // 操作符
    item.isChecked = !item.isChecked;
    emits("handleCheckboxClick", { item, operation })
}


function handleChangeCheckboxClick({ item, operation }) {
    emits("handleCheckboxClick", { item, operation })
}

console.log("multiple",multiple)
</script>
<template>
    <li class="tree-child-container" @click.stop="handleItemClick(item, index)" v-for="(item, index) in innerDataSource"
        :key="index">
        <div class="tree-item"
            :class="{ 'tree-item-active': (activeIndex == item.label + '-' + index), 'tree-item-disabled': item.isDisabled }">
            <!-- 没有子项不显示箭头 -->
            <span v-if="!(typeof item.children == 'undefined' || item.children.length == 0)">
                <i class="c-icon-arrow-right" v-show="!item.isOpen"></i>
                <i class="c-icon-arrow-down" v-show="item.isOpen"></i>
            </span>

            <!-- 选项框 -->
            
            <label v-show="multiple" :class="checkboxClass(item)" @click.stop="handleCheckboxClick(item)">
            </label>

            <!-- 当前标签 -->
            <span class="item-label">{{ item.label }}</span>
        </div>

        <transition name="tree-children-fade">
            <ul v-show="item.children && item.children.length != 0 && item.isOpen">
                <c-tree-child :isAllOpen="isAllOpen" :openSelection="openSelection" :multiple="multiple"
                    @change="handleChangeClick" @handleNodeClick="handleChangeClick"
                    @handleCheckboxClick="handleChangeCheckboxClick" :dataSource="item.children"
                    :activeIndex="activeIndex"></c-tree-child>
            </ul>
        </transition>
    </li>
</template>
<style lang='scss' scoped>
.tree-children-fade-enter-from,
.tree-children-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.2s ease;
}

.tree-children-fade-enter-to,
.tree-children-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease;
}

.tree-child-container {
    list-style: none;
    width: 50%;

    .tree-item {
        cursor: pointer;
        display: flex;
        align-items: center;

        label+span {
            margin-left: 5px;
        }

        .item-label {
            width: 100%;

            &:hover {
                background-color: #f0f0f0;
            }
        }


    }

    .tree-item-active {
        .item-label {
            background-color: #f0f0f0;
        }
    }


    .tree-item-disabled {
        cursor: not-allowed;
        opacity: 0.8;

        .item-label {
            &:hover {
                background-color: white;
            }
        }
    }

    .tree-item-checkbox {
        width: 15px;
        height: 13px;
        border: 1px solid $checkbox-border-color;
        position: relative;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &-disabled {
            background-color: $disabled-bg-color;
            cursor: not-allowed;

        }

        &-acitve {
            background-color: $primary;
        }

        &-acitve-disabled {
            background-color: $disabled-bg-color;
            cursor: not-allowed;
        }

    }

    .tree-item-checkbox-acitve::after {
        display: inline-block;
        position: absolute;
        content: "";
        width: 3px;
        height: 7px;
        border: 2px solid white;
        border-left: transparent;
        border-top: transparent;
        transform: rotate(45deg);
        left: 35%;
        top: 12%;
    }

    .tree-item-checkbox-acitve-disabled::after {
        display: inline-block;
        position: absolute;
        content: "";
        width: 3px;
        height: 7px;
        border: 2px solid $disabled-font-color;
        border-left: transparent;
        border-top: transparent;
        transform: rotate(45deg);
        left: 35%;
        top: 12%;
    }


    ul {
        margin: 0;
    }
}
</style>