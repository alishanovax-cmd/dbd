import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use /dbd/ only for production (GitHub Pages). Dev runs at /
  base: command === 'build' ? '/dbd/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    open: true,
  },
}))
