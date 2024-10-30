import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        browser: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": "error",
      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "space-infix-ops": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "object-curly-spacing": ["error", "always"],
      "no-trailing-spaces": "error",
      "no-debugger": "warn",
      "no-extra-boolean-cast": "error",
      "no-unused-expressions": "error",
      "no-shadow": "warn",
      "consistent-return": "error",
      "no-empty": "error",
      "no-new": "error",
      "no-useless-concat": "error",
      "no-unneeded-ternary": "error",
    },
  },
]);
