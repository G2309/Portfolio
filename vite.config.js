import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://G2309.github.io/Portfolio',
  server: {
    proxy: {
      '/api': {
        target: 'https://rlp-proxy.herokuapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
