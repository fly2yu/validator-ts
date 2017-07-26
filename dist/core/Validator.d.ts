import { ValidatorError } from './ValidatorError';
export declare class Validator {
    validatorErrors: ValidatorError[];
    constructor();
    hasValidatorErrors(): boolean;
    toNumber(param: any, reason?: string): number;
    toNumberArray(param: string, reason?: string): number[];
    toStr(param: any, reason?: string): string;
    toBoolean(param: string, reason?: string): boolean | string;
    asset(param: any, reason?: string): any;
}
