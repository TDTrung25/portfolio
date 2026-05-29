import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site is served under /<repo>/.
// If you rename the GitHub repo, change `base` to match (keep the slashes).
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
