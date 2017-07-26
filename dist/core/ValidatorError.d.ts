export declare class ValidatorError {
    private reason;
    private field;
    constructor(field: string, reason: string);
}
export declare enum validatorErrorResaon {
    ParamError = "PARAM_INVALID",
}
