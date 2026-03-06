import * as fs from "fs";

export interface HistoryEntry {
    run: number;
    timestamp: string;
    score: number;
}

export class QualityHistory {
    private static filePath = "quality-history.json";

    static record(score: number) {
        let history: HistoryEntry[] = [];
        if (fs.existsSync(this.filePath)) {
            history = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        }
        
        const newEntry: HistoryEntry = {
            run: history.length + 1,
            timestamp: new Date().toISOString(),
            score: score
        };

        history.push(newEntry);
        fs.writeFileSync(this.filePath, JSON.stringify(history, null, 2));
        console.log(`\x1b[33m📈 Histórico atualizado: Run #${newEntry.run} | Score: ${score}\x1b[0m`);
    }
}
