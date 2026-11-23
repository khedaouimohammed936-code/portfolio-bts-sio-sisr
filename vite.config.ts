import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// VITE_BASE lets GitHub Pages serve the site from /<repo>/ instead of /
// (Freebuff Sites and local development keep the default "/").
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss(), cloudflare()],
  server: { port: 5173, strictPort: false },
})
