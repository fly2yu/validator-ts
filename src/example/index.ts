import { Validator } from '../index'
let validator: Validator = new Validator()
let id: number = validator.toNumber(1 , 'PARAM_INVALID')
let errorNo1 = validator.toBoolean('error' , 'PARAM_INVALID')
let errorNo2 = validator.toNumberArray('error' , 'PARAM_ERRORN2_INVALID')
if ( validator.hasValidatorErrors() ) {
  console.log(validator.validatorErrors)
}
