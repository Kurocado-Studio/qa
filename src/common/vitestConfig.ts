import path from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { ViteUserConfig } from 'vitest/config';

export interface VitestConfig extends ViteUserConfig {}

export const vitestConfig: VitestConfig = {
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      // @ts-ignore since 'c8' custom
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    environment: 'node',
    globals: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './app'),
    },
  },
};
