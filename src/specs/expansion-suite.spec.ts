import { test, expect } from '@playwright/test';
import { GitHubProfilePage } from '../pages/GitHubActions';

test.describe('Suíte de Expansão - Resiliência Máxima', () => {
    
    test('Cenário 01: Deve atualizar a Bio do perfil (Validação de Estado)', async ({ page }) => {
        const profile = new GitHubProfilePage(page);
        await profile.navigateToSettings();
        
        const uniqueBio = `SDET Leader | USP & ESPM | ${Date.now()}`;
        await profile.updateBio(uniqueBio);
        
        // Em vez de esperar o toast, validamos o valor persistido no input
        // Isso é 100% determinístico
        await page.reload(); 
        const bioValue = await profile.getBioValue();
        expect(bioValue).toBe(uniqueBio);
        
        console.log('[SUCESSO] Integridade de dados confirmada após reload.');
    });

    // Mantemos os cenários 02, 03 e 04 que já estão estáveis
    test('Cenário 02: Deve acessar área de criação de repositórios', async ({ page }) => {
        await page.goto('/new');
        await expect(page.getByRole('heading', { name: 'Create a new repository' })).toBeVisible();
    });

    test('Cenário 03: Deve validar área de chaves SSH', async ({ page }) => {
        await page.goto('/settings/keys');
        await expect(page.getByRole('heading', { name: 'SSH keys', exact: true })).toBeVisible();
    });

    test('Cenário 04: Deve realizar busca global', async ({ page }) => {
        await page.goto('/');
        await page.keyboard.press('Slash');
        await page.getByRole('combobox', { name: /search/i }).fill('playwright');
        await page.keyboard.press('Enter');
        await expect(page).toHaveURL(/.*q=playwright/);
    });
});
