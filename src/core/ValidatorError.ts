export class ValidatorError {
  private reason: string
  private field: string
  constructor (field: string , reason: string ) {
    this.field = field
    this.reason = reason
  }
}
export enum validatorErrorResaon {
  ParamError = 'PARAM_INVALID'
}
