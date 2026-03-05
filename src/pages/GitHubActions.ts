import { Page } from '@playwright/test';

export class GitHubProfilePage {
    constructor(private page: Page) {}
    async navigateToSettings() { await this.page.goto('/settings/profile', { waitUntil: 'load' }); }
    async updateBio(bio: string) {
        await this.page.fill('#user_profile_bio', bio);
        await this.page.click('button:has-text("Update profile")');
    }
    async getBioValue() {
        return await this.page.inputValue('#user_profile_bio');
    }
}
