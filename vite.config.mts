/// <reference types="vitest" />
import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { htmlTemplate } from "./plugins/html_template";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [
    vue(),
    htmlTemplate({
      APP_VERSION: `${process.env.npm_package_version}`,
    }),
  ],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        prompt: resolve(__dirname, "prompt.html"),
      },
    },
    outDir: resolve(__dirname, "dist"),
    chunkSizeWarningLimit: 5000000,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  test: {
    dir: "./src/tests",
    globals: true,
    environment: "jsdom",
    coverage: {
      exclude: [
        "docs",
        "plugins",
        "scripts",
        "src/tests",
        "vite.config.ts",
        ".*.*",
        "**/*.d.ts",
        "**/*.vue",
      ],
    },
  },
});
