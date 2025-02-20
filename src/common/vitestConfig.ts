import type { ViteUserConfig } from 'vitest/config';

export interface VitestConfig extends ViteUserConfig {}

export const vitestConfig: VitestConfig = {
  plugins: [],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    environment: 'node',
    globals: true,
  },
};
