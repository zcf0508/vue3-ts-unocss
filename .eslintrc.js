module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "vuejs-accessibility"],
  extends: [
    "plugin:vue/vue3-essential", 
    "plugin:security/recommended", 
    "plugin:vuejs-accessibility/recommended", 
  ],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    "vue/multi-word-component-names": [0],
    quotes: ["error", "double"],
  },
};
