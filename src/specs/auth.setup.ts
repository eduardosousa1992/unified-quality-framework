import { test as setup, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

setup('Autenticação e Captura de Sessão', async ({ page }) => {
  setup.setTimeout(180000); 

  await page.goto('https://github.com/login');
  
  console.log('\n[INFO] Iniciando preenchimento simulado (Visível)...');
  
  // Simulação de digitação para garantir visibilidade e bypass de segurança
  await page.locator('input[name="login"]').pressSequentially(process.env.GH_USER || '', { delay: 100 });
  await page.locator('input[name="password"]').pressSequentially(process.env.GH_PASS || '', { delay: 100 });
  await page.click('input[type="submit"]');

  console.log('\n[!] --- AGUARDANDO LOGIN MANUAL / 2FA NO NAVEGADOR ---');
  
  // ESTRATÉGIA DE ALTA DISPONIBILIDADE: Esperamos por qualquer sinal de Dashboard logada
  await Promise.race([
    page.waitForSelector('.AppHeader-user', { state: 'visible', timeout: 150000 }),
    page.waitForSelector('[aria-label="Open user navigation menu"]', { state: 'visible', timeout: 150000 }),
    page.waitForURL('**/dashboard', { timeout: 150000 })
  ]);
  
  // Estabilização de cookies para garantir integridade do JSON
  await page.waitForTimeout(5000);

  await page.context().storageState({ path: 'playwright/.auth/user.json' });
  console.log('\n[SUCESSO] --- SESSÃO CAPTURADA E SALVA COM SUCESSO! ---');
});
