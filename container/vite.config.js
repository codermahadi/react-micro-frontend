import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        todo_list: "http://localhost:5001/assets/remoteEntry.js",
        todo_form: "http://localhost:5002/assets/remoteEntry.js",
        ui_components: "http://localhost:5003/assets/remoteEntry.js"
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    cors: {
      origin: [
        'http://localhost:5001', // todo-list app
        'http://localhost:5002', // todo-form app
        'http://localhost:5003'  // ui-components app
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }
  }
})
