import react from '@vitejs/plugin-react';
import { get } from 'lodash-es';
import path from 'node:path';

import { type VitestConfig, vitestConfig } from '~/common/vitestConfig';

export interface RemixVitestConfig extends VitestConfig {}

export const remixVitestConfig: RemixVitestConfig = {
  ...vitestConfig,
  plugins: [react()],
  test: {
    ...get(vitestConfig, ['test'], {}),
    css: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src/remix/setup.ts')],
  },
};
