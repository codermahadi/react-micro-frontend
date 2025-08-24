import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo_list',
      filename: 'remoteEntry.js',
      exposes: {
        './TodoList': './src/components/TodoList'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    cors: {
      origin: [
        'http://localhost:5000', // container app
        'http://localhost:5003'  // ui-components app
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
