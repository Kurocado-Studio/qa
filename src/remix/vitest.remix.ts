import { get } from 'lodash-es';

import { type VitestConfig, vitestConfig } from '../common/vitestConfig';

export interface VitestRemix extends VitestConfig {}

export const vitestRemix: VitestRemix = {
  ...vitestConfig,
  plugins: get(vitestConfig, ['plugins'], []),
  test: {
    ...get(vitestConfig, ['test'], {}),
    css: true,
    environment: 'jsdom',
    setupFiles: ['./setup.remix.ts'],
  },
};
