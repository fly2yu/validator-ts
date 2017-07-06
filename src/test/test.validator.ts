import * as assert from 'assert'
import { Validator } from '../index'

describe('Validator', () => {
  it('Test Validator toNumber From Number', () => {
    let validator: Validator = new Validator()
    let num: number = validator.toNumber(66)
    assert.equal(validator.hasValidatorErrors() , 0)
    assert.equal(num , 66)
  })
  it('Test Validator toNumberArray From Array', () => {
    let validator: Validator = new Validator()
    let numArray: number[] = validator.toNumberArray('[1,2,3,4]')
    assert.equal(validator.hasValidatorErrors() , 0)
    assert.equal(numArray[0] , 1)
    assert.equal(numArray[1] , 2)
    assert.equal(numArray[2] , 3)
    assert.equal(numArray[3] , 4)
  })
  it('Test Validator toStr From String', () => {
    let validator: Validator = new Validator()
    let str: string = validator.toStr('string')
    assert.equal(validator.hasValidatorErrors() , 0)
    assert.equal(str , 'string')
  })
  it('Test Validator toBoolean From True', () => {
    let validator: Validator = new Validator()
    let trueValue: boolean | string = validator.toBoolean('true')
    assert.equal(validator.hasValidatorErrors() , 0)
    assert.equal(trueValue , true)
  })
  it('Test Validator toBoolean From False', () => {
    let validator: Validator = new Validator()
    let falseValue: boolean | string = validator.toBoolean('false')
    assert.equal(validator.hasValidatorErrors() , 0)
    assert.equal(falseValue , false)
  })
  it('Test Validator asset From NotUndefined', () => {
    let validator: Validator = new Validator()
    validator.asset('NotUndefined')
    assert.equal(validator.hasValidatorErrors() , 0)
  })
})
