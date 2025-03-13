import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: ['src/cardswipe.js'],
      formats: ['es']
    },
  },
})