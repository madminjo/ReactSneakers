import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/ReactSneakers/',   // проект открывается по подкаталогу
  build: { outDir: 'docs' }  // собирать прямо в /docs
})
