import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // <--- CHANGEZ CECI (Mettez juste un slash)
  plugins: [react()],
})