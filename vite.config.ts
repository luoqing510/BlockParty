import { fileURLToPath, URL } from 'node:url'

import inject from "@rollup/plugin-inject"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), vueJsx(), inject({
    $: "jquery",
    jQuery: "jquery",
    "windows.jQuery": "jquery"
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
