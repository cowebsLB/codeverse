import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determine base path based on environment
  // - Vercel: Use '/' (detected via VERCEL env var or VITE_BASE_PATH)
  // - GitHub Pages: Use '/codeverse/' for production builds
  // - Localhost: Use '/' for dev
  const isVercel = process.env.VERCEL || process.env.VITE_BASE_PATH === '/'
  const basePath = isVercel 
    ? '/' 
    : (process.env.VITE_BASE_PATH || (command === 'build' ? '/codeverse/' : '/'))
  
  return {
    base: basePath,
    plugins: [react()],
    // Environment variables are automatically available via import.meta.env
    // Variables prefixed with VITE_ are exposed to the client
    // Access them using: import.meta.env.VITE_SUPABASE_URL
  }
})
