import { ValidatorError , validatorErrorResaon } from './ValidatorError'

export class Validator {

  public validatorErrors: ValidatorError[]

  constructor () {
    this.validatorErrors = []
  }

  public hasValidatorErrors () {
    return (this.validatorErrors.length > 0)
  }

  public toNumber (param: any, reason?: string): number {
    const result: number = Number(param)
    if (isNaN(result)) {
      this.validatorErrors.push(new ValidatorError( param,reason || validatorErrorResaon.ParamError ))
    }
    return result
  }

  public toNumberArray (param: string, reason?: string ): number[] {
    const numArr: number [] = []
    if (param && param.indexOf('[') === 0 && param.lastIndexOf(']') === param.length - 1) {
      const strArr: string [] = param.substring(1, param.length - 1).split(',')
      for (const str of strArr) {
        const num: number = Number(str)
        if (str !== '' && !isNaN(num)) {
          numArr.push(num)
        } else {
          this.validatorErrors.push(new ValidatorError(param,reason || validatorErrorResaon.ParamError ))
          break
        }
      }
    } else {
      this.validatorErrors.push(new ValidatorError( param,reason || validatorErrorResaon.ParamError ))
    }
    return numArr
  }

  public toStr (param: any, reason?: string): string {
    if (param === undefined) {
      this.validatorErrors.push(new ValidatorError( param,reason || validatorErrorResaon.ParamError ))
    }
    return String(param)
  }
  public toBoolean (param: string, reason?: string): boolean | string {
    if (param === 'true') {
      return true
    } else if (param === 'false') {
      return false
    } else {
      this.validatorErrors.push(new ValidatorError( param , reason || validatorErrorResaon.ParamError ))
      return param
    }
  }

  public asset (param: any , reason?: string): any {
    if ( !param || param === undefined ) {
      this.validatorErrors.push(new ValidatorError( param ,reason || validatorErrorResaon.ParamError ))
    }
    return param
  }

}
