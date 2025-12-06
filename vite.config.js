import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/demo-avocat/', // Le nom de votre repo entre slashs
  plugins: [react()],
})

