import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build works both on a custom
// domain and under a GitHub Pages subpath (es. user.github.io/sito-dtech/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
