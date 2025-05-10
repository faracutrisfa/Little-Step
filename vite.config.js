import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://103.196.154.75:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  optimizeDeps: {
    include: ["keen-slider/react"], 
  },
});
