import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const hasSession = !!process.env.SESSION_BASE64;

// LÓGICA ESTRATÉGICA: Filtramos os projetos para evitar o boot do setup desnecessário
const activeProjects = [
  {
    name: 'chromium',
    use: { 
      ...devices['Desktop Chrome'],
      viewport: { width: 1280, height: 720 },
      storageState: 'playwright/.auth/user.json', 
    },
  },
];

// Só adicionamos o setup se não houver sessão injetada
if (!hasSession) {
  activeProjects.unshift({
    name: 'setup',
    testMatch: /auth.setup.ts/,
  } as any);
  // Adicionamos a dependência apenas se o setup for necessário
  activeProjects[1]['dependencies'] = ['setup'];
}

export default defineConfig({
  testDir: './src/specs',
  fullyParallel: true,
  // Limitação de Workers para evitar thrashing de CPU no Docker
  workers: 3, 
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  globalSetup: require.resolve('./src/utils/GlobalSetup'),
  use: {
    baseURL: 'https://github.com',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: activeProjects,
});
