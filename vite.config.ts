import * as path from 'path';
import { PluginOption, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import legacy from "@vitejs/plugin-legacy";
import viteCompression from 'vite-plugin-compression'; //gzip
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import UnoCSS from 'unocss/vite';
import Inspect from 'vite-plugin-inspect';
import { CodeInspectorPlugin } from 'code-inspector-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  return {
    define: {
      __VUE_OPTIONS_API__: false, // 不使用 Options Api 减小压缩体积
    },
    plugins: [
      vue(),
      // 兼容IE11
      /* legacy({
          targets: ["ie >= 11"],
          additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }), */
      AutoImport({
        /* options */
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dirs: ['src/hooks', 'src/store', 'src/utils', 'src/api'],
        dts: 'src/auto-import.d.ts',
      }),
      Components({
        /* options */
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
        dts: 'src/components.d.ts',
        resolvers: [],
      }),
      UnoCSS(),
      ...(command === 'serve' ? [
        visualizer(),
        Inspect(),
        CodeInspectorPlugin({
          bundler: 'vite',
          showSwitch: true,
        }),
      ]: [
        viteCompression({
          threshold: 102400, //超过10k进行压缩
        }),
      ]),
    ],
    build: {
      minify: 'terser',
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
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      include: ['tests/unit/*.spec.ts'],
      globals: true,
      environment: 'happy-dom',
      deps: {
        inline: ['@vue', '@vueuse'],
      },
    },
  };
});
