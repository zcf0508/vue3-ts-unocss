import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'tests/e2e',
  webServer: {
    command: 'npm run build && npm run serve',
    port: 4173,
  },
};
export default config;
