import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/

// Get backend URL from env or use default for development
const getProxyTarget = () => {
  if (process.env.VITE_BACKEND_URL) {
    return process.env.VITE_BACKEND_URL;
  }
  // Default development target
  return 'https://luc-m8t9.onrender.com';
};

export default defineConfig({
  plugins: [react(),  tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: getProxyTarget(),
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
