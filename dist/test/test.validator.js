"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_1 = require("../index");
describe('Validator', function () {
    it('Test Validator toNumber From Number', function () {
        var validator = new index_1.Validator();
        var num = validator.toNumber(66);
        assert.equal(validator.hasValidatorErrors(), 0);
        assert.equal(num, 66);
    });
    it('Test Validator toNumberArray From Array', function () {
        var validator = new index_1.Validator();
        var numArray = validator.toNumberArray('[1,2,3,4]');
        assert.equal(validator.hasValidatorErrors(), 0);
        assert.equal(numArray[0], 1);
        assert.equal(numArray[1], 2);
        assert.equal(numArray[2], 3);
        assert.equal(numArray[3], 4);
    });
    it('Test Validator toStr From String', function () {
        var validator = new index_1.Validator();
        var str = validator.toStr('string');
        assert.equal(validator.hasValidatorErrors(), 0);
        assert.equal(str, 'string');
    });
    it('Test Validator toBoolean From True', function () {
        var validator = new index_1.Validator();
        var trueValue = validator.toBoolean('true');
        assert.equal(validator.hasValidatorErrors(), 0);
        assert.equal(trueValue, true);
    });
    it('Test Validator toBoolean From False', function () {
        var validator = new index_1.Validator();
        var falseValue = validator.toBoolean('false');
        assert.equal(validator.hasValidatorErrors(), 0);
        assert.equal(falseValue, false);
    });
    it('Test Validator asset From NotUndefined', function () {
        var validator = new index_1.Validator();
        validator.asset('NotUndefined');
        assert.equal(validator.hasValidatorErrors(), 0);
    });
});
//# sourceMappingURL=test.validator.js.map