import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  format: ["cjs"],
  outDir: "dist",
  target: "node20",
  splitting: false,
  clean: true,
  sourcemap: true,
});
