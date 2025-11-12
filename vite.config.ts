import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/codeverse/',
  plugins: [react()],
  // Environment variables are automatically available via import.meta.env
  // Variables prefixed with VITE_ are exposed to the client
  // Access them using: import.meta.env.VITE_SUPABASE_URL
})
