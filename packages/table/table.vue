<!--
 * @Author: Yun 912453237@qq.com
 * @Date: 2022-08-05 15:06:50
 * @LastEditors: Yun 912453237@qq.com
 * @LastEditTime: 2022-08-06 20:45:22
 * @FilePath: \vuepress-learn-jsf:\test-baseui\packages\ctable\table.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Yun 912453237@qq.com, All Rights Reserved. 
-->
<script>
export default {
    name: "cTable",
}
</script>
<script setup>

// 父级取值
import { computed } from '@vue/reactivity';
const { showHeader,tableStyle, headStyle, rowStyle, dataSource, size , extraClass} = defineProps({
    extraClass:{
        type: Array,
        default: [],
    },
    showHeader:{
        type: Boolean,
        default: true
    },
    tableStyle: {
        type: Object,
        default: {
            'width': '100%'
        }
    },
    headStyle: {
        type: Object,
    },
    rowStyle: {
        type: Object,
    },
    dataSource: {
        type: Object,
        default: {
            fields: [{
                field: 'defaultTitle', title: "默认标题"
            },
            { field: 'defaultTitle2', title: "默认标题2" },
            ],
            datas: [
                { defaultTitle: "默认内容", defaultTitle2: "默认内容2", }
            ]
        }
    },
    size: {
        type: String,
        default: "md",
    }
})

const classes = computed(() => {
    const sizeTypes = ["sm", "md", "lg", "xl"];
    const arr = [`c-table`];
    sizeTypes.includes(size) ? arr.push(`c-table-${size}`) : arr.push(`c-table-${size}`);
    extraClass.length > 0 && [...arr,...extraClass];
    return arr;
})
</script>

<template>
    <div :class="classes">
        <table :style="tableStyle">
            <thead v-show="showHeader">
                <tr>
                    <th v-for="(filedItem, fieldIndex) in dataSource.fields" :key="fieldIndex" :style="headStyle">{{
                            filedItem.title
                    }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dataSource.datas" :key="index">
                    <td v-for="(filedItem, fieldIndex) in dataSource.fields" :style="rowStyle" :key="fieldIndex">{{
                            item[filedItem.field]
                    }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.c-table {
    table {
        border-collapse: separate;
        border-spacing: 0;
    }

    table {
        border-collapse: separate;

        thead {
            tr {
                th {
                    padding: 12px 14px;
                    border-right: transparent;
                    border: 1px solid #f0f0f0;
                    background-color:darken(#fafafa,1%);
                    color: $table-th-color;
                    font-size: $font-size-base;
                    text-align: left;
                    line-height: 1.5;
                }

                th:last-child {
                    border-right: 1px solid #f0f0f0;
                }
            }
        }

        tbody {
            tr {
                td {
                    padding: 12px 14px;
                    border: 1px solid #f0f0f0;
                    color: $table-th-color;
                    font-size: $font-size-base;
                    text-align: left;
                    line-height: 1.5;

                    border-top: transparent;
                    border-right: transparent;
                }

                td:last-child {
                    border-right: 1px solid #f0f0f0;
                }

                &:hover {
                    background-color: darken(#fafafa,2%);
                }
            }


        }
    }

}


// 表格字号大小样式
@each $key,
$val in $sizeList {
    .c-table-#{$key} {
        table {
            thead {
                tr {
                    th {
                        font-size: $val;
                    }
                }
            }

            tbody {
                tr {
                    td {
                        font-size: $val;
                    }
                }
            }
        }

    }
}
</style>