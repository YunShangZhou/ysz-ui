// yszui/index.js
import { button, table } from 'ysz-ui'
const yszUI = {
  install: function (Vue) {
    Vue.use(button)
    Vue.use(table)
  }
}
export default yszUI