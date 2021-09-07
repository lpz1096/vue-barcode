/*
 * @Author: lpz1096
 * @Date: 2021-09-04 18:12:13
 * @LastEditors: lpz1096
 * @LastEditTime: 2021-09-06 20:11:03
 */
import vue3Barcode from './vue3-barcode.vue'
vue3Barcode.install = (app) => {
  app.component(vue3Barcode.name, vue3Barcode)
}
export default vue3Barcode