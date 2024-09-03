import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile";


export default defineConfig(({ mode }) => ({
  plugins: [react(), viteSingleFile()],
  // root: path.resolve("src/ui"),
  build: {
    minify: mode === 'production' ? 'terser' : false,
    cssMinify: mode === "production",
    sourcemap: mode !== "production" ? "inline" : false,
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    // 配置 Terser 去除 console 语句
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      input: path.resolve(__dirname, "./index.html"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
