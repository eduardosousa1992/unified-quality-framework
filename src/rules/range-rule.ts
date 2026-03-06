import { QualityRule } from "../core/rule-interface";

export class CustomRangeRule implements QualityRule {
    name = "CustomRangeRule";
    constructor(private column: string, private min: number, private max: number) {}

    validate(data: any) {
        const value = data[this.column];
        const isValid = value >= this.min && value <= this.max;
        return {
            valid: isValid,
            message: isValid ? "" : `Valor ${value} na coluna ${this.column} fora do range [${this.min}, ${this.max}]`
        };
    }
}