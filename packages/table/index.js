/*
 * @Author: Yun 912453237@qq.com
 * @Date: 2022-08-05 15:06:57
 * @LastEditors: Yun 912453237@qq.com
 * @LastEditTime: 2022-08-05 15:37:40
 * @FilePath: \vuepress-learn-jsf:\test-baseui\packages\ctable\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Yun 912453237@qq.com, All Rights Reserved. 
 */
import cTable from './table.vue';
cTable.install = app => {
  app.component(cTable.name, cTable)
} 
export default cTable