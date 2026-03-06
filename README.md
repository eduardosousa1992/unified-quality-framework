# 🛡️ Unified Quality Framework (UQF)
> **Enterprise Quality Governance | AI-Driven Automation | Strategic SDET Engineering**

---

## 👨‍💻 Strategic Technical Leadership
**Eduardo Lima de Sousa** *Especialista em Engenharia de Software (USP/ESALQ)* *Gestão de Digital Business, BI & AI (ESPM)* **SDET @ GFT Technologies (Alocado no Bradesco há 4 anos)**

<p align="left">
  <a href="https://www.linkedin.com/in/eduardolsousa"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://github.com/eduardosousa1992"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
  <a href="tel:+5511952723015"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Contact"></a>
</p>

---

## 🚀 1. Executive Summary & Narrative (Manager Feedback #1)

### **Qual problema o UQF resolve?**
Em ecossistemas financeiros de alta criticidade (Banking), a automação de testes tradicional gera ruído analítico devido ao acúmulo de falhas de infraestrutura e falsos-positivos. O UQF resolve a **falta de clareza na comunicação de riscos**, segregando o que é "ruído técnico" do que é "risco de negócio".

### **Para quem?**
* **Boards Executivos**: Que necessitam de indicadores de confiança (Success Rate) para decisões de Go/No-Go.
* **Engenharia de Software**: Que precisa de diagnóstico profundo (Traces/Logs) sem a poluição de execuções históricas.

### **Inovação Técnica**
O framework utiliza um **Stateless Purge Protocol** no pipeline de CI/CD, garantindo que o dashboard executivo seja 100% fidedigno à versão atual do software, eliminando a dívida de dados de execuções quebradas.

---

## 🏗️ 2. System Architecture & Dual-Path Strategy

O UQF opera sob uma arquitetura de **Segregação de Artefatos**:
1. **Executive Path (Allure)**: Camada de governança focada em métricas de alto nível e estabilidade.
2. **Technical Path (Playwright HTML)**: Camada de engenharia com vídeos, screenshots e traces de execução.

### **Technical Stack**
* **Engine**: Playwright (Multi-browser support)
* **Language**: TypeScript (Strict Typings)
* **Infrastructure**: GitHub Actions com **Atomic Deployment**
* **Governance**: ADR (Architecture Decision Records) para documentação de decisões técnicas.

---

## 📊 3. Quality Metrics & Performance Analysis (Manager Feedback #2)

Aplicamos modelagem matemática para distinguir performance nominal de performance sob variabilidade.

| Métrica de Qualidade | Status Atual (Nominal) | Alvo (Target) | Modelo de Análise |
| :--- | :---: | :---: | :--- |
| **Success Rate** | **84%** | > 95% | Binomial Confidence Interval |
| **Avg. Test Runtime** | **3.1s** | < 5.0s | P95 Latency Distribution |
| **Execution Stability** | **92%** | > 95% | Mean Time Between Failures (MTBF) |

---

## 📁 4. Case Study: Microservices Reliability (Manager Feedback #3)

**Cenário:** Validação de jornada crítica de onboarding em uma malha de microserviços.  
**Desafio:** Garantir a integridade de payloads JSON complexos e estabilidade da UI sob condições de rede instáveis.  
**Solução:** Implementação de 120 testes automatizados com interceptação de rede e validação de contratos de API.  
**Resultado:** Redução de **40% no Lead Time de QA** e mitigação proativa de bugs em ambientes de integração (Shift-left).

---

## 🛠️ 5. Execution & Planning
- [x] **Setup & Core Engine**: Playwright + TS Integration.
- [x] **Executive Governance**: Allure Reporting with Physical Purge Protocol.
- [ ] **AI-Driven Visual Regression**: Implementação de validação visual com Nano Banana.
- [ ] **Chaos Engineering**: Simulação de latência de rede em ambiente de QA.

---
<p align="center">
  <em>"Qualidade não é um ato, é um hábito de engenharia sustentado por governança."</em><br>
  <strong>Eduardo Lima de Sousa - 2026</strong>
</p>