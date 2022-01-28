import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression"; //gzip
import WindiCSS from "vite-plugin-windicss";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let plugins = [
    vue(),
    // 兼容IE11
    /* legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }), */
    viteCompression({
      threshold: 102400, //超过10k进行压缩
    }),
    WindiCSS(),
    visualizer(),
  ];

  if (command === "serve") {
    // 开发环境下
  }

  return {
    plugins,
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
