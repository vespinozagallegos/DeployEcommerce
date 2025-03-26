import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"; // Usar import
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default {
  ...compat.extends("next/core-web-vitals", "next/typescript")[0], // Asegurar que sea un objeto
  plugins: {
    "@typescript-eslint": typescriptEslintPlugin, // Se agrega el plugin como objeto
    "@next/next": nextPlugin
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
  },
};
