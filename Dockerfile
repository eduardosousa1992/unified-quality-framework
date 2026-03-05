# Sincronização obrigatória com a versão do framework local
FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN mkdir -p playwright/.auth test-results

# Comando focado na execução dos testes autenticados via Base64
CMD ["npx", "playwright", "test", "--project=chromium"]
