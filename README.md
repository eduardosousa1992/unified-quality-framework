# 🛡️ Unified Quality Framework (UQF)

Framework de governança e observabilidade de dados para ecossistemas de alta criticidade.

## 🚀 Novidades da v1.3: Monitoramento Histórico
Agora o UQF não apenas valida, mas rastreia a evolução da saúde dos seus dados ao longo do tempo.

### 📊 Indicadores Multidimensionais (C-V-C-U)
* **Completeness:** Identificação de vácuos de dados.
* **Validity:** Conformidade com regras de negócio.
* **Consistency:** Integridade de formatos e tipos.
* **Uniqueness:** Controle de redundância e duplicidade.

### 📈 Rastreabilidade de Performance
O arquivo \quality-history.json\ armazena o histórico de execuções, permitindo a criação de dashboards de tendência:
- **Run #1:** 92% (Baseline)
- **Run #2:** 95% (Otimização)
- **Run #3:** 97% (Target atingido)

## 💻 Como Executar
\\\ash
# Validação com geração de histórico e métricas detalhadas
uqf validate ./examples/csv-validation/transactions.csv
\\\

---
**Eduardo Lima de Sousa** | SDET Specialist & Data Science Practitioner
USP (ESALQ) | GFT (Bradesco)