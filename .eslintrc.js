module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended", 
    "plugin:security/recommended", 
    "plugin:vuejs-accessibility/recommended", 
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: ["vue", "@typescript-eslint", "vuejs-accessibility"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12,
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"],
  },
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
