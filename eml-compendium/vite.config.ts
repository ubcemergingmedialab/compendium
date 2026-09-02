import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Set base to '/' for development, '/compendium/' for production
  // This matches the GitHub repository name: ubcemergingmedialab/compendium
  base: command === 'build' ? '/compendium/' : '/',
}))
