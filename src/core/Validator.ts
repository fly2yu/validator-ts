import { ValidatorError } from './ValidatorError'

export class Validator {

  public validatorErrors: ValidatorError[]

  constructor () {
    this.validatorErrors = []
  }

  public hasValidatorErrors () {
    return (this.validatorErrors.length > 0)
  }

  public toNumber (param: any, reason: string = 'PARAM_INVALID'): number {
    const result: number = Number(param)
    if (isNaN(result)) {
      this.validatorErrors.push(new ValidatorError(reason))
    }
    return result
  }

  public toNumberArray (param: string, reason: string = 'PARAM_INVALID'): number[] {
    const numArr: number [] = []
    if (param && param.indexOf('[') === 0 && param.lastIndexOf(']') === param.length - 1) {
      const strArr: string [] = param.substring(1, param.length - 1).split(',')
      for (const str of strArr) {
        const num: number = Number(str)
        if (str !== '' && !isNaN(num)) {
          numArr.push(num)
        } else {
          this.validatorErrors.push(new ValidatorError(reason))
          break
        }
      }
    } else {
      this.validatorErrors.push(new ValidatorError(reason))
    }
    return numArr
  }

  public toStr (param: any, reason: string = 'PARAM_INVALID'): string {
    if (param === undefined) {
      this.validatorErrors.push(new ValidatorError(reason))
    }
    return String(param)
  }

  public toBoolean (param: string, reason: string = 'PARAM_INVALID'): boolean | string {
    if (param === 'true') {
      return true
    } else if (param === 'false') {
      return false
    } {
      this.validatorErrors.push(new ValidatorError(reason))
      return param
    }
  }

  public asset (cond: any , reason: string = 'PARAM_INVALID'): any {
    if ( !cond || cond === undefined ) {
      this.validatorErrors.push(new ValidatorError(reason))
    }
    return cond
  }

}
