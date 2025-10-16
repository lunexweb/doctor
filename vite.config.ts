import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Explicitly exclude favicon files from build (only in production)
  publicDir: "public",
  build: {
    rollupOptions: {
      external: (id) => {
        // Only exclude favicon files during build, not in development
        if (process.env.NODE_ENV === 'production') {
          return /favicon|\.ico$|apple-touch-icon/i.test(id);
        }
        return false;
      },
    },
  },
});
