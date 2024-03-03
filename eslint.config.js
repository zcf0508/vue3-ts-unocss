import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: true,
  vue: {
    rules: {
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
}, {
  rules: {
    'curly': ['error', 'all'],
    'style/brace-style': 'error',
    'style/multiline-ternary': ['error', 'always'],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
    'no-console': ['warn'],
    'style/semi': ['error', 'always'],
    'style/indent': ['error', 2, { SwitchCase: 1 }],
    'max-len': [
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
});
