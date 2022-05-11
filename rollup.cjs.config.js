import fs from "fs";
import { builtinModules as builtin } from "module";
import json from "@rollup/plugin-json";

const pkg = JSON.parse(fs.readFileSync("./package.json"));

export default {
  input: "./main.js",
  output: {
    file: "dist/main.cjs",
    format: "cjs",
  },
  external: [...Object.keys(pkg.dependencies), ...builtin],
  plugins: [json()],
};
