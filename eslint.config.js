import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const sharedRules = {
  "no-console": ["error", { allow: ["warn", "error"] }],
  eqeqeq: ["error", "always"],
  "no-var": "error",
  "prefer-const": "error",
  "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
};

export default tseslint.config(
  { ignores: ["dist", "dist-ssr", "coverage", "node_modules", "scripts/stubs"] },

  // Browser-side React source.
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    extends: [js.configs.recommended, react.configs.flat.recommended, react.configs.flat["jsx-runtime"]],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "18.2" } },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      ...sharedRules,
    },
  },

  // Type-aware rules for TypeScript only.
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // Build tooling runs in Node.
  {
    files: ["scripts/**/*.{ts,js}", "vite.config.ts", "eslint.config.js"],
    languageOptions: { globals: globals.node },
    rules: { "no-console": "off" },
  },

  prettier,
);
