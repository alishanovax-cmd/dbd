import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (dbdcheats.net) serves from site root — not /dbd/
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    open: true,
  },
})
