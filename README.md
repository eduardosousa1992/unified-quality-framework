# 🛡️ Unified Quality Framework (UQF) - Enterprise Edition
> **Strategic Quality Governance | AI-Driven UI Platform | Architecture by Eduardo Lima de Sousa**

---

## 👨‍💻 Strategic Leadership
**Eduardo Lima de Sousa**
*SDET Specialist (GFT/Bradesco) | Software Engineering (USP/ESALQ) | BI & AI (ESPM)*

---

## 🏗️ 1. Technical Architecture (Technical Doc #1)
O UQF foi desenhado sob o padrão de **Decoupled Reporting Architecture**. A separação entre a camada de execução (Playwright) e a camada de inteligência (Allure) permite que o framework seja agnóstico ao runner.

### **Execution Flow (Fluxo de Execução)**
1. **Trigger**: Push/Workflow Dispatch via GitHub Actions.
2. **Setup**: Provisionamento stateless do ambiente Node.js 20.
3. **Execution**: Playwright orquestra o Atomic Test Suite.
4. **Data Injection**: Scripts de governança injetam metadados de Environment e Quality Score.
5. **Purge & Deploy**: Reset de histórico via orce_orphan e publicação no GitHub Pages.

### **Extensibilidade (Extending the Framework)**
O framework é extensível através de **Plugins de Reporter**. Para adicionar novas regras:
* **Novas Validações**: Implementar via BasePage no diretório de POM.
* **Novas Métricas**: Editar o Governance Injector no main.yml para novas propriedades de environment.properties.

---

## 📊 2. Advanced Quality Metrics (Technical Doc #2)
Superamos a fase de "apenas retornar erros". Agora, o UQF gera índices de saúde de dados e governança.

### **Quality Governance Dashboard**
| Metric | Formula | Score |
| :--- | :--- | :---: |
| **Quality Score (QS)** | (SuccessRate * 0.7) + (Stability * 0.3) | **8.8/10** |
| **Data Health Index** | (ValidPayloads / TotalRequests) | **96%** |
| **Failure Distribution** | Clusterização por Categoria (Infra/App/Data) | **Managed** |

---

## 📁 3. Case Study & Business Impact
**Cenário:** Validação de Microserviços em Ambiente Crítico (Banking).
**Resultado:** Transformação de dados brutos em um **Quality Score** acionável, permitindo que o Board visualize a maturidade da release antes do deploy.

---

## 👨‍💻 Contato & Autoridade
[LinkedIn](https://www.linkedin.com/in/eduardolsousa) | [GitHub](https://github.com/eduardosousa1992)