import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        // Utilizamos 'load' para maior estabilidade em Docker
        await this.page.goto('/login', { waitUntil: 'load' });
    }

    async fillCredentials(user: string, pass: string) {
        await this.page.fill('input[name="login"]', user);
        await this.page.fill('input[name="password"]', pass);
        await this.page.click('input[type="submit"]');
    }
}
