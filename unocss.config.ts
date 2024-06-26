import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      // 其他选项
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetAttributify({
      prefix: 'w:',
      prefixedOnly: false,
    }),
  ],
});
