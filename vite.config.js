import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React_mini_projects/',

  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },

  build: {
    outDir: 'build',
  },

  plugins: [react()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.js',
  },
})