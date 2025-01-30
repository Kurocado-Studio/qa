import path from 'node:path';
import type { ViteUserConfig } from 'vitest/config';

export interface VitestConfig extends ViteUserConfig {}

export const vitestConfig: VitestConfig = {
  test: {
    coverage: {
      // @ts-expect-error since its 'c8' custom
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    environment: 'node',
    globals: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
};
