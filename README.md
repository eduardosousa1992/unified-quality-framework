<p align="center">
  <img src="https://img.shields.io/badge/Status-Scale--Ready-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Quality--Score-94%25-blue?style=for-the-badge" />
</p>

<h1 align="center">🛡️ Unified Quality Framework (UQF)</h1>

---

## 🛑 Problem
A validação de grandes volumes de dados em pipelines de CI/CD costuma ser manual, fragmentada e sem indicadores claros de saúde (Data Health), gerando riscos operacionais em ambientes críticos como o setor bancário.

## ✅ Solution
O **UQF** provê um motor de regras extensível que automatiza a governança de dados, gerando um **Quality Score** analítico e relatórios de prontidão para deploy.

## 🏗️ Architecture
Estrutura modular baseada em **Clean Engineering**:
- **Core Engine:** Orquestração de validações.
- **Rules System:** Regras atômicas e extensíveis.
- **Reporting:** Geração de métricas (JSON/HTML).
- **CLI:** Interface de automação para desenvolvedores.

## 💻 Quick Start & Example
Instale e valide em segundos:

\\\	ypescript
import { validate } from "uqf";

const rules = { column: "salary", min: 1000 };
const report = validate(dataset, rules);
console.log(report.score); // Output: 94%
\\\

**Uso via CLI:**
\\\ash
uqf validate data.csv --rules rules.yaml
\\\

---

## 👨‍💻 Technical Leadership
**Eduardo Lima de Sousa**
<p align="left">
  <a href="https://www.linkedin.com/in/eduardolsousa"><img src="https://img.shields.io/badge/LinkedIn-Click-blue?style=flat-square&logo=linkedin" /></a>
  <a href="https://github.com/eduardosousa1992"><img src="https://img.shields.io/badge/GitHub-Profile-black?style=flat-square&logo=github" /></a>
</p>
## 📊 2. Example Output (Reporting)
O framework automatiza a geração de evidências para auditoria e governança:

### **Relatório HTML**
Ao executar a validação, o UQF gera um dashboard em ./reports/quality-report.html contendo:
* **Data Health Score:** Índice percentual de integridade.
* **Failure Distribution:** Detalhamento de erros por regra e coluna.
* **Audit Trail:** Logs formatados para conformidade.
## 📊 2. Example Output (Reporting)
O framework automatiza a geração de evidências para auditoria e governança:

### **Relatório HTML**
Ao executar a validação, o UQF gera um dashboard em ./reports/quality-report.html contendo:
* **Data Health Score:** Índice percentual de integridade.
* **Failure Distribution:** Detalhamento de erros por regra e coluna.
* **Audit Trail:** Logs formatados para conformidade.