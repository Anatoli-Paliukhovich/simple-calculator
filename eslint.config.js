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
      indent: ["error", 2],
      "no-console": "error",
    },
  },
]);
