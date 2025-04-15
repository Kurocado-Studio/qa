import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import 'fast-text-encoding';
import { expect } from 'vitest';
// the extension is needed as Vitest (through Node) does not automatically resolve on other ESModules
import 'vitest-axe/extend-expect.js';
import * as matchers from 'vitest-axe/matchers.js';

expect.extend(matchers);
