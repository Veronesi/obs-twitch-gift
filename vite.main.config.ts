import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Only externalize optional native modules; ws is a dependency and will be in node_modules at runtime
    rollupOptions: {
      external: ["bufferutil", "utf-8-validate"],
    },
  },
});
