import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'
import vue from '@vitejs/plugin-vue'

const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: aliases
  }
})
