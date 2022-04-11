import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: "./src/pdf.js",
    output: {
      name: "pdf",
      file: "./lib/pdf.js",
      format: "umd",
      sourcemap: true
    },
    plugins: [
      nodeResolve({ browser: true }),
      commonjs()
    ]
  },
  {
    input: "./src/svg.js",
    output: {
      name: "svg",
      file: "./lib/svg.js",
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      nodeResolve({ browser: true })
    ],
  }
];