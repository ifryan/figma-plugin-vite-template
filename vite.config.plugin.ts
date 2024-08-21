import path from "path"
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => ({
  plugins: [viteSingleFile(),
  ],
  build: {
    minify: mode === 'production',
    sourcemap: mode !== 'production' ? 'inline' : false,
    target: 'es2017',
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    // 配置 Terser 去除 console 语句
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true // 去除所有 console.* 语句
      }
    } : {},
    rollupOptions: {
      input: path.resolve('src/code.ts'),
      output: {
        entryFileNames: 'code.js',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
