/* eslint-disable import/no-default-export */
import { type Options, defineConfig } from 'tsup';

const tsupOptions: Options = {
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/remix/setup.remix.ts'],
  external: ['react'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  splitting: true,
  target: 'esnext',
  treeshake: true,
};

export default defineConfig((options: Options) => ({
  ...tsupOptions,
  ...options,
}));
