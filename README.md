# 🛡️ Unified Quality Framework (UQF)
> **The Data Governance Engine for Mission-Critical Systems**

---

## 👨‍💻 Strategic Technical Leadership
**Eduardo Lima de Sousa**
*SDET Specialist (GFT/Bradesco) | Eng. de Software (USP/ESALQ) | BI & AI (ESPM)*

<p align="left">
  <a href="https://www.linkedin.com/in/eduardolsousa"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://github.com/eduardosousa1992"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
</p>

---

## 🚀 1. Narrative: Why UQF?

### **The Problem**
Sistemas bancários modernos operam em arquiteturas de microserviços onde a integridade dos dados é frequentemente negligenciada. Validações manuais e logs esparsos geram **custos de infraestrutura** e **riscos de governança**.

### **The Solution**
O **UQF** transforma a validação técnica em indicadores de negócio. Ele provê um motor de regras extensível e uma CLI poderosa para garantir que apenas dados íntegros alimentem o ecossistema de produção.

### **The Value**
* **Time-to-Feedback:** Redução de 40% através de validação preemptiva.
* **Confidence:** Quality Scores acionáveis para decisões de Deploy (Go/No-Go).

---

## 🏗️ 2. Professional Architecture (Modular)
Framework estruturado para escalabilidade e desacoplamento:

\\\	ext
src/
 ├ core/        # Engine central e lógica do validador
 ├ rules/       # Regras granulares (range, missing, duplication)
 ├ reporting/   # Geração de métricas e dashboards HTML
 ├ cli/         # Interface de linha de comando (CLI)
 └ tests/       # Unit & Integration tests do framework
\\\

---

## 🛠️ 3. Quick Start (30s)
O UQF é uma ferramenta pronta para o desenvolvedor:

\\\ash
# Rodando a validação via CLI
npm run uqf -- validate data.csv --rules rules.yaml
\\\

**Exemplo de Regra Extensível (rules.yaml):**
\\\yaml
rules:
  - type: range
    column: transaction_value
    min: 0.01
    max: 1000000
\\\

---

## 📊 4. Data Quality Metrics (Executive View)
Não entregamos apenas "pass/fail", entregamos **Governança de Dados**.

| Indicador | Score | Modelo de Análise |
| :--- | :---: | :--- |
| **Data Health Score** | **92%** | Média Ponderada de Integridade |
| **Completeness** | 98% | Validação de campos nulos/ausentes |
| **P95 Latency** | 3.1s | Performance sob contenção de CPU |

---

## 📈 5. Roadmap v1.0
- [x] **Core Engine:** Motor de regras modular.
- [x] **CLI:** Interface de comando funcional.
- [ ] **Dashboard:** Relatórios visuais interativos.
- [ ] **AI Integration:** Geração preditiva de regras de qualidade.

---
<p align="center">
  <em>"Automação é técnica, Governança é estratégia."</em><br>
  <strong>Eduardo Lima de Sousa - 2026</strong>
</p>