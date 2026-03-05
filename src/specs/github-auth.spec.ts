import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Validação de Sessão Stateless - GitHub', () => {
    test('Deve validar o acesso via Runtime Engine', async ({ page }) => {
        await page.goto('/', { waitUntil: 'load' });

        // ESTRATÉGIA DE GOVERNANÇA: Uso de Role (Acessibilidade) em vez de Classe CSS
        const userMenu = page.getByRole('button', { name: /user navigation/i });
        
        // Adiciono um log para auditoria em caso de falha no Docker
        console.log(`[AUDITORIA] URL Atual: ${page.url()}`);
        
        await expect(userMenu).toBeVisible({ timeout: 15000 });
        
        console.log('[SUCESSO] Sessão Base64 hidratada e validada no Engine!');
    });
});
