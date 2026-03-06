import { generateReport } from './src/reporting/report';
import * as fs from 'fs';

const historyPath = 'quality-history.json';
let history = fs.existsSync(historyPath) ? JSON.parse(fs.readFileSync(historyPath, 'utf-8')) : [];

[92.5, 94.1, 93.8, 96.5, 98.2].forEach(s => {
    history.push({ run: history.length + 1, timestamp: new Date().toISOString(), score: s });
});

fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
generateReport();