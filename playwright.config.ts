import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 30000,
    use: {
      baseURL: 'https://reqres.in',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    },
};

export default config;
