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
    "plugin:vue/vue3-recommended", 
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
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3,
      },      
      "multiline": {
        "max": 1,
      },
    }],
    "vue/html-self-closing": [0],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": [],
    }],
    "vue/html-self-closing": [0],
  },
};
