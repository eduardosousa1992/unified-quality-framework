<p align="center">
  <img src="https://img.shields.io/badge/Architecture-Modular%20SDET-gold?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Quality--Engine-v1.3.0-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CI--CD-GitHub%20Actions-brightgreen?style=for-the-badge" />
</p>

# 🛡️ Unified Quality Framework (UQF)
> **Engine de Governança e Observabilidade de Dados para Ecossistemas de Alta Criticidade.**

O **UQF** não é apenas um validador de scripts; é um ecossistema estruturado para garantir a integridade de dados e contratos em ambientes financeiros. Desenvolvido com foco em **Shift-Left Testing** e **Data Observability**, o framework abstrai complexidades técnicas em indicadores de performance executiva.

---

## 🏗️ 1. Arquitetura Sistêmica (USP/ESALQ Standard)
A fundação do projeto segue princípios de **Clean Architecture** e **Extensibilidade**, garantindo que o custo de manutenção seja inversamente proporcional à sua escala.

| Camada | Responsabilidade | Tecnologia |
| :--- | :--- | :--- |
| **CLI Layer** | Interface robusta para orquestração via terminal. | Node.js / TypeScript |
| **Core Engine** | Processamento assíncrono e gestão de regras. | TypeScript |
| **Reporting Hub** | Geração de evidências (HTML) e métricas analíticas. | Handlebars / JSON |
| **History Logic** | Persistência de séries temporais para análise de tendências. | FS Persistence |

## 📊 2. Governança e Métricas Multidimensionais (CVCU)
O framework avalia a saúde dos dados através de quatro pilares ortogonais, permitindo diagnósticos precisos de causa-raiz:

1. **Completeness (C):** Identificação de vácuos e ausência de dados críticos.
2. **Validity (V):** Conformidade estrita com contratos de API e regras de negócio.
3. **Consistency (C):** Integridade de formatos, tipos e padrões estruturais.
4. **Uniqueness (U):** Controle de redundância e detecção de duplicidade.


## 📈 3. Observabilidade e Histórico de Desempenho
Diferente de ferramentas estáticas, o UQF rastreia a evolução da qualidade em cada execução (\quality-history.json\). Isso permite identificar a **taxa de degradação** ou o **sucesso de otimizações** em pipelines de dados.

\\\	ext
Run #1: 92.0% (Baseline)
Run #2: 95.5% (Evolução Técnica)
Run #3: 97.2% (Target de Governança atingido)
\\\

## 🚀 4. Guia de Operação
O framework foi desenhado para ser **Plug-and-Play**.

### **Instalação**
\\\ash
npm install && npm run build
\\\

### **Validação de Datasets (CSV/JSON)**
\\\ash
uqf validate ./examples/csv-validation/transactions.csv
\\\

## 🛠️ 5. Diferenciais de Engenharia
* **Plugin-Based:** Adicione novas regras de validação via interface \QualityRule\.
* **CI/CD Native:** Portões de qualidade (Quality Gates) integrados ao GitHub Actions.
* **Executive Dashboard:** Relatórios visuais prontos para auditoria e stakeholders.

---

## 👨‍💻 Autor e Liderança Técnica
**Eduardo Lima de Sousa**
*Software Engineer | SDET Specialist @ GFT (Bradesco Cliente)*
*Especialista em Software Engineering (USP) e Gestão de Business Intelligence (ESPM)*

<p left="left">
  <a href="https://www.linkedin.com/in/eduardolsousa"><img src="https://img.shields.io/badge/LinkedIn-Professional-blue?style=flat-square&logo=linkedin" /></a>
  <a href="https://github.com/eduardosousa1992"><img src="https://img.shields.io/badge/GitHub-Portfolio-black?style=flat-square&logo=github" /></a>
</p>

---
<p align="center"><sub>"Conectando Qualidade, Dados e Segurança ao Impacto de Negócio."</sub></p>