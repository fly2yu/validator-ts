"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorError_1 = require("./ValidatorError");
var Validator = (function () {
    function Validator() {
        this.validatorErrors = [];
    }
    Validator.prototype.hasValidatorErrors = function () {
        return (this.validatorErrors.length > 0);
    };
    Validator.prototype.toNumber = function (param, reason) {
        if (reason === void 0) { reason = 'PARAM_INVALID'; }
        var result = Number(param);
        if (isNaN(result)) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
        }
        return result;
    };
    Validator.prototype.toNumberArray = function (param, reason) {
        if (reason === void 0) { reason = 'PARAM_INVALID'; }
        var numArr = [];
        if (param && param.indexOf('[') === 0 && param.lastIndexOf(']') === param.length - 1) {
            var strArr = param.substring(1, param.length - 1).split(',');
            for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
                var str = strArr_1[_i];
                var num = Number(str);
                if (str !== '' && !isNaN(num)) {
                    numArr.push(num);
                }
                else {
                    this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
                    break;
                }
            }
        }
        else {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
        }
        return numArr;
    };
    Validator.prototype.toStr = function (param, reason) {
        if (reason === void 0) { reason = 'PARAM_INVALID'; }
        if (param === undefined) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
        }
        return String(param);
    };
    Validator.prototype.toBoolean = function (param, reason) {
        if (reason === void 0) { reason = 'PARAM_INVALID'; }
        if (param === 'true') {
            return true;
        }
        else if (param === 'false') {
            return false;
        }
        {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
            return param;
        }
    };
    Validator.prototype.asset = function (cond, reason) {
        if (reason === void 0) { reason = 'PARAM_INVALID'; }
        if (!cond || cond === undefined) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
        }
        return cond;
    };
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map