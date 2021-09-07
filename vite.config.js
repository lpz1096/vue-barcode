/*
 * @Author: aze
 * @Date: 2021-09-06 10:18:51
 * @LastEditors: lpz1096
 * @LastEditTime: 2021-09-06 19:48:23
 * @Description:vite.config.js
 */
import vue from "@vitejs/plugin-vue";
import path from 'path'
module.exports = {
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'),
      name: 'Vue3Barcode',
    },
    emptyOutDir: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}