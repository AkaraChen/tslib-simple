import { defineConfig } from "rollup";
import ts from "@rollup/plugin-typescript";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    dir: "./dist",
  },
  plugins: [
    ts({ declaration: true, outDir: "./dist", exclude: "**/*.{test,spec}.ts" }),
  ],
});
