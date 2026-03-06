export interface QualityMetrics {
    completeness: number;
    validity: number;
    consistency: number;
    overallScore: number;
}

export class MetricsEngine {
    calculate(totalRows: number, failures: any[]): QualityMetrics {
        // Cálculo de Validade: (Linhas Totais - Falhas) / Linhas Totais
        const invalidCount = failures.length;
        const validity = totalRows > 0 ? ((totalRows - invalidCount) / totalRows) * 100 : 0;
        
        // Simulação de métricas para governança (serão expandidas conforme novas regras)
        const completeness = 100; // Placeholder para regra de campos nulos
        const consistency = 100;  // Placeholder para regra de formato/tipo
        
        // Score Geral: Média ponderada das dimensões de qualidade
        const overallScore = (validity + completeness + consistency) / 3;

        return {
            completeness,
            validity,
            consistency: Math.round(consistency),
            overallScore: Math.round(overallScore)
        };
    }
}
