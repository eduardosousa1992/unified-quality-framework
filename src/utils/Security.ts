import { authenticator } from 'otplib';

export class Security {
    static generate2FAToken(secret: string): string {
        if (!secret) throw new Error('Secret Key do 2FA não configurada.');
        const token = authenticator.generate(secret);
        console.log('[AUTH-LOG] Token 2FA gerado: ' + token);
        return token;
    }
}
