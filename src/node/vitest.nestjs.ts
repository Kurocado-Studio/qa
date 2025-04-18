import { get } from 'lodash-es';
import swc from 'unplugin-swc';

import { type VitestConfig, vitestConfig } from '../common/vitestConfig';

export interface VitestNestjs extends VitestConfig {}

export const vitestNestjs: VitestNestjs = {
  ...vitestConfig,
  plugins: [
    ...get(vitestConfig, ['plugins'], []),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
  test: {
    ...get(vitestConfig, ['test'], {}),
    coverage: {
      ...get(vitestConfig, ['test', 'coverage'], {}),
      // @ts-ignore type-mismatch
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['test/**/*.{ts,tsx}', '**/*.d.ts'],
    },
    tsconfig: './tsconfig.json',
    environment: 'node',
    setupFiles: ['./setup.node.ts'],
  },
};
