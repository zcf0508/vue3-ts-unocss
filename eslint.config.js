// @ts-check
/// <reference path="./eslint-typegen.d.ts" />

import antfu from '@antfu/eslint-config';
import typegen from 'eslint-typegen';
import pluginSecurity from 'eslint-plugin-security';
import pluginVuejsi11y from 'eslint-plugin-vuejs-accessibility';
import pluginPrettierVue from 'eslint-plugin-prettier-vue';
import vueParse from 'vue-eslint-parser';
import pluginVueHookOptimizer from 'eslint-plugin-vue-hook-optimizer';

export default typegen(antfu({
  typescript: true,
  vue: {
    overrides: {
      'vue/multi-word-component-names': [0],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/html-self-closing': [0, {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],
    },
  },
}, [
  {
    ignores: ['public/**/*', 'README.md'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParse,
    },
    plugins: {
      'prettier-vue': pluginPrettierVue,
    },
    settings: {
      'prettier-vue': {
        SFCBlocks: {
          template: false,
          script: false,
          style: true,
        },
      },
    },
    rules: pluginPrettierVue.configs.recommended.rules,
  },
  {
    plugins: {
      'vue-hook-optimizer': pluginVueHookOptimizer,
    },
    rules: {
      'vue-hook-optimizer/not-used': ['warn', {
        framework: 'vue',
      }],
      'vue-hook-optimizer/loop-call': ['warn', {
        framework: 'vue',
      }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParse,
    },
    plugins: {
      'vuejs-accessibility': pluginVuejsi11y,
    },
    // rules: pluginVuejsi11y.configs.recommended.rules,
  },
  pluginSecurity.configs.recommended,
  {
    rules: {
      'curly': ['error', 'all'],
      'style/brace-style': 'error',
      'style/multiline-ternary': ['error', 'always'],
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
      ],
      'no-console': ['warn'],
      'style/semi': ['error', 'always'],
      'style/indent': ['error', 2, { SwitchCase: 1 }],
      'style/max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreRegExpLiterals: true,
        },
      ],
      'comma-dangle': ['error', 'always-multiline'],
      'style/quotes': ['error', 'single'],
    },
  },
]));
