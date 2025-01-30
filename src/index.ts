export {
  type RemixVitestConfig,
  remixVitestConfig,
} from './remix/remixVitestConfig';

export { renderComponent, auditComponentA11y } from './remix/utils';

export * from '@testing-library/react';

export type * from '@testing-library/react';

export { type VitestConfig, vitestConfig } from './common/vitestConfig';

export { defineConfig as defineVitestConfig } from 'vitest/config';
