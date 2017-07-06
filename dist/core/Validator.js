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

//# sourceMappingURL=data:application/json;base64,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QUNiLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNkLENBQUM7UUFBQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7WUFDckQsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU0seUJBQUssR0FBWixVQUFjLElBQVMsRUFBRyxNQUFnQztRQUFoQyx1QkFBQSxFQUFBLHdCQUFnQztRQUN4RCxFQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssU0FBVSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUN2RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFSCxnQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksOEJBQVMiLCJmaWxlIjoiY29yZS9WYWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JFcnJvciB9IGZyb20gJy4vVmFsaWRhdG9yRXJyb3InXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIHZhbGlkYXRvckVycm9yczogVmFsaWRhdG9yRXJyb3JbXVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRvckVycm9ycyA9IFtdXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzVmFsaWRhdG9yRXJyb3JzICgpIHtcclxuICAgIHJldHVybiAodGhpcy52YWxpZGF0b3JFcnJvcnMubGVuZ3RoID4gMClcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b051bWJlciAocGFyYW06IGFueSwgcmVhc29uOiBzdHJpbmcgPSAnUEFSQU1fSU5WQUxJRCcpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBOdW1iZXIocGFyYW0pXHJcbiAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckVycm9ycy5wdXNoKG5ldyBWYWxpZGF0b3JFcnJvcihyZWFzb24pKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvTnVtYmVyQXJyYXkgKHBhcmFtOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nID0gJ1BBUkFNX0lOVkFMSUQnKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgbnVtQXJyOiBudW1iZXIgW10gPSBbXVxyXG4gICAgaWYgKHBhcmFtICYmIHBhcmFtLmluZGV4T2YoJ1snKSA9PT0gMCAmJiBwYXJhbS5sYXN0SW5kZXhPZignXScpID09PSBwYXJhbS5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGNvbnN0IHN0ckFycjogc3RyaW5nIFtdID0gcGFyYW0uc3Vic3RyaW5nKDEsIHBhcmFtLmxlbmd0aCAtIDEpLnNwbGl0KCcsJylcclxuICAgICAgZm9yIChjb25zdCBzdHIgb2Ygc3RyQXJyKSB7XHJcbiAgICAgICAgY29uc3QgbnVtOiBudW1iZXIgPSBOdW1iZXIoc3RyKVxyXG4gICAgICAgIGlmIChzdHIgIT09ICcnICYmICFpc05hTihudW0pKSB7XHJcbiAgICAgICAgICBudW1BcnIucHVzaChudW0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKHJlYXNvbikpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JFcnJvcnMucHVzaChuZXcgVmFsaWRhdG9yRXJyb3IocmVhc29uKSlcclxuICAgIH1cclxuICAgIHJldHVybiBudW1BcnJcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0ciAocGFyYW06IGFueSwgcmVhc29uOiBzdHJpbmcgPSAnUEFSQU1fSU5WQUxJRCcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHBhcmFtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JFcnJvcnMucHVzaChuZXcgVmFsaWRhdG9yRXJyb3IocmVhc29uKSlcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9Cb29sZWFuIChwYXJhbTogc3RyaW5nLCByZWFzb246IHN0cmluZyA9ICdQQVJBTV9JTlZBTElEJyk6IGJvb2xlYW4gfCBzdHJpbmcge1xyXG4gICAgaWYgKHBhcmFtID09PSAndHJ1ZScpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAocGFyYW0gPT09ICdmYWxzZScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JFcnJvcnMucHVzaChuZXcgVmFsaWRhdG9yRXJyb3IocmVhc29uKSlcclxuICAgICAgcmV0dXJuIHBhcmFtXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXNzZXQgKGNvbmQ6IGFueSAsIHJlYXNvbjogc3RyaW5nID0gJ1BBUkFNX0lOVkFMSUQnKTogYW55IHtcclxuICAgIGlmICggIWNvbmQgfHwgY29uZCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckVycm9ycy5wdXNoKG5ldyBWYWxpZGF0b3JFcnJvcihyZWFzb24pKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmRcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
