// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// resolve __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  { ignores: ["dist"] },
  ...compat.extends("eslint-config-airbnb", "plugin:react/recommended"),
];
