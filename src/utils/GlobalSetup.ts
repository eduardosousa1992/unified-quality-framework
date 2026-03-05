import { FullConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function globalSetup(config: FullConfig) {
  const storagePath = path.join(__dirname, '../../playwright/.auth/user.json');
  const sessionBase64 = process.env.SESSION_BASE64;

  // Garanto a existência do diretório
  if (!fs.existsSync(path.dirname(storagePath))) {
    fs.mkdirSync(path.dirname(storagePath), { recursive: true });
  }

  // Lógica de Injeção: Prioridade para Base64 (Ambiente Seguro/Docker)
  if (sessionBase64) {
    console.log('[INFO] Injetando sessão via Base64 detectada no ambiente.');
    const sessionJson = Buffer.from(sessionBase64, 'base64').toString('utf-8');
    fs.writeFileSync(storagePath, sessionJson);
  } else if (!fs.existsSync(storagePath)) {
    console.warn('[ALERTA] Nenhuma sessão encontrada (Base64 ou Arquivo). O teste poderá falhar.');
  }
}

export default globalSetup;
