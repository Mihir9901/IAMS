import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',   // ensures it runs on localhost
    port: 5173           // default Vite port (you can change if needed)
  }
})