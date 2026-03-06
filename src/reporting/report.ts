import * as fs from 'fs';
import * as path from 'path';

export function generateReport() {
    const historyPath = path.resolve(process.cwd(), 'quality-history.json');
    if (!fs.existsSync(historyPath)) return;

    const history = JSON.parse(fs.readFileSync(historyPath, 'utf-8'));
    const labels = JSON.stringify(history.map((h: any) => `Run #${h.run}`));
    const scores = JSON.stringify(history.map((h: any) => h.score));
    const lastScore = history[history.length - 1].score;

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>UQF Dashboard</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
            body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 40px; text-align: center; }
            .card { background: #1e293b; padding: 24px; border-radius: 12px; max-width: 800px; margin: auto; }
            .metric { font-size: 3.5rem; color: #22c55e; font-weight: bold; }
            .chart-box { height: 400px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🛡️ UQF Evolution</h1>
            <div class="metric">${lastScore}%</div>
            <div class="chart-box"><canvas id="trendChart"></canvas></div>
        </div>
        <script>
            new Chart(document.getElementById('trendChart'), {
                type: 'line',
                data: {
                    labels: ${labels},
                    datasets: [{
                        label: 'Score',
                        data: ${scores},
                        borderColor: '#38bdf8',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        </script>
    </body>
    </html>`;
    fs.writeFileSync('quality-report.html', html);
    console.log("✅ Relatório gerado!");
}