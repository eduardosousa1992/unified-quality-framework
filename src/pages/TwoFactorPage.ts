import { Page } from '@playwright/test';

/**
 * @class TwoFactorPage
 * @description Classe responsável por gerenciar a interação com o desafio MFA.
 * Como líder técnico, priorizo a resiliência: esta classe aguarda o estado
 * correto do DOM antes de injetar o token gerado dinamicamente.
 * @author Eduardo Lima de Sousa
 */
export class TwoFactorPage {
    // Seletor específico do campo de token do GitHub.
    private readonly otpInput = 'input#otp';
    private readonly verifyBtn = 'button[type="submit"]';

    constructor(private page: Page) {}

    /**
     * @description Insere o token gerado pela nossa classe Security e valida o acesso.
     * @param token Código de 6 dígitos (TOTP).
     */
    async verifyToken(token: string) {
        // Aguardo a visibilidade do campo para evitar 'flakiness' (instabilidade).
        await this.page.waitForSelector(this.otpInput, { state: 'visible' });
        
        // Injeto o token de forma programática.
        await this.page.fill(this.otpInput, token);
        
        // Disparo a verificação final para concluir o acesso ao sistema.
        await this.page.click(this.verifyBtn);
    }
}
