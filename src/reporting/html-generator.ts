import * as fs from "fs";

export class HtmlReporter {
    generate(score: number, issues: any[]) {
        const html = `
        <html>
            <head>
                <title>UQF Quality Report</title>
                <style>
                    body { font-family: sans-serif; padding: 40px; background: #f4f7f6; }
                    .card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .score { font-size: 48px; color: #2ecc71; font-weight: bold; }
                    .issue { color: #e74c3c; padding: 5px 0; border-bottom: 1px solid #eee; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>🛡️ Unified Quality Framework Report</h1>
                    <p>Data Health Score</p>
                    <div class="score">${score}%</div>
                    <hr>
                    <h3>Detalhamento de Inconsistências</h3>
                    ${issues.map((i: any) => `<div class="issue">❌ ${i.message}</div>`).join("")}
                </div>
            </body>
        </html>`;
        
        if (!fs.existsSync("./reports")) fs.mkdirSync("./reports");
        fs.writeFileSync("./reports/quality-report.html", html);
        console.log("✅ Relatório HTML gerado em: ./reports/quality-report.html");
    }
}