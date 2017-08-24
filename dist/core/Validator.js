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
        else {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
            return param;
        }
    };
    Validator.prototype.asset = function (param, reason) {
        if (reason === void 0) { reason = 'PARAM_INVALID'; }
        if (!param || param === undefined) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(reason));
        }
        return param;
    };
    return Validator;
}());
exports.Validator = Validator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUNiLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVNLHlCQUFLLEdBQVosVUFBYyxLQUFVLEVBQUcsTUFBZ0M7UUFBaEMsdUJBQUEsRUFBQSx3QkFBZ0M7UUFDekQsRUFBRSxDQUFDLENBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLFNBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDdkQsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQS9EQSxBQStEQyxJQUFBO0FBL0RZLDhCQUFTIiwiZmlsZSI6ImNvcmUvVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yRXJyb3IgfSBmcm9tICcuL1ZhbGlkYXRvckVycm9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3JFcnJvcnM6IFZhbGlkYXRvckVycm9yW11cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy52YWxpZGF0b3JFcnJvcnMgPSBbXVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1ZhbGlkYXRvckVycm9ycyAoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMudmFsaWRhdG9yRXJyb3JzLmxlbmd0aCA+IDApXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9OdW1iZXIgKHBhcmFtOiBhbnksIHJlYXNvbjogc3RyaW5nID0gJ1BBUkFNX0lOVkFMSUQnKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gTnVtYmVyKHBhcmFtKVxyXG4gICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JFcnJvcnMucHVzaChuZXcgVmFsaWRhdG9yRXJyb3IocmVhc29uKSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b051bWJlckFycmF5IChwYXJhbTogc3RyaW5nLCByZWFzb246IHN0cmluZyA9ICdQQVJBTV9JTlZBTElEJyk6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IG51bUFycjogbnVtYmVyIFtdID0gW11cclxuICAgIGlmIChwYXJhbSAmJiBwYXJhbS5pbmRleE9mKCdbJykgPT09IDAgJiYgcGFyYW0ubGFzdEluZGV4T2YoJ10nKSA9PT0gcGFyYW0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjb25zdCBzdHJBcnI6IHN0cmluZyBbXSA9IHBhcmFtLnN1YnN0cmluZygxLCBwYXJhbS5sZW5ndGggLSAxKS5zcGxpdCgnLCcpXHJcbiAgICAgIGZvciAoY29uc3Qgc3RyIG9mIHN0ckFycikge1xyXG4gICAgICAgIGNvbnN0IG51bTogbnVtYmVyID0gTnVtYmVyKHN0cilcclxuICAgICAgICBpZiAoc3RyICE9PSAnJyAmJiAhaXNOYU4obnVtKSkge1xyXG4gICAgICAgICAgbnVtQXJyLnB1c2gobnVtKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnZhbGlkYXRvckVycm9ycy5wdXNoKG5ldyBWYWxpZGF0b3JFcnJvcihyZWFzb24pKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKHJlYXNvbikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVtQXJyXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TdHIgKHBhcmFtOiBhbnksIHJlYXNvbjogc3RyaW5nID0gJ1BBUkFNX0lOVkFMSUQnKTogc3RyaW5nIHtcclxuICAgIGlmIChwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKHJlYXNvbikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxyXG4gIH1cclxuICBwdWJsaWMgdG9Cb29sZWFuIChwYXJhbTogc3RyaW5nLCByZWFzb246IHN0cmluZyA9ICdQQVJBTV9JTlZBTElEJyk6IGJvb2xlYW4gfCBzdHJpbmcge1xyXG4gICAgaWYgKHBhcmFtID09PSAndHJ1ZScpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAocGFyYW0gPT09ICdmYWxzZScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckVycm9ycy5wdXNoKG5ldyBWYWxpZGF0b3JFcnJvcihyZWFzb24pKVxyXG4gICAgICByZXR1cm4gcGFyYW1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3NldCAocGFyYW06IGFueSAsIHJlYXNvbjogc3RyaW5nID0gJ1BBUkFNX0lOVkFMSUQnKTogYW55IHtcclxuICAgIGlmICggIXBhcmFtIHx8IHBhcmFtID09PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKHJlYXNvbikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
