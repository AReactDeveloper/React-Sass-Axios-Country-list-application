import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base : 'https://areactdeveloper.github.io/React-Sass-Axios-Country-list-application/',
  plugins: [react()],
  build:{
    outDir:'dist'
  }
})
