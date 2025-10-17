import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Vitest testing environment globals
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
  },
]);
