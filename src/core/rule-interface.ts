export interface QualityRule { name: string; validate(data: any): { valid: boolean; message: string }; }
