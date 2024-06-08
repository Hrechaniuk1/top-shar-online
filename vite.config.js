import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactPages from 'vite-plugin-react-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins:  [react(), reactPages()],
  'build': {sourcemap: true},
  
})
