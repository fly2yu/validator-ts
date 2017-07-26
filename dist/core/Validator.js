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
        var result = Number(param);
        if (isNaN(result)) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(param, reason || ValidatorError_1.validatorErrorResaon.ParamError));
        }
        return result;
    };
    Validator.prototype.toNumberArray = function (param, reason) {
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
                    this.validatorErrors.push(new ValidatorError_1.ValidatorError(param, reason || ValidatorError_1.validatorErrorResaon.ParamError));
                    break;
                }
            }
        }
        else {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(param, reason || ValidatorError_1.validatorErrorResaon.ParamError));
        }
        return numArr;
    };
    Validator.prototype.toStr = function (param, reason) {
        if (param === undefined) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(param, reason || ValidatorError_1.validatorErrorResaon.ParamError));
        }
        return String(param);
    };
    Validator.prototype.toBoolean = function (param, reason) {
        if (param === 'true') {
            return true;
        }
        else if (param === 'false') {
            return false;
        }
        else {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(param, reason || ValidatorError_1.validatorErrorResaon.ParamError));
            return param;
        }
    };
    Validator.prototype.asset = function (param, reason) {
        if (!param || param === undefined) {
            this.validatorErrors.push(new ValidatorError_1.ValidatorError(param, reason || ValidatorError_1.validatorErrorResaon.ParamError));
        }
        return param;
    };
    return Validator;
}());
exports.Validator = Validator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL1ZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF3RTtBQUV4RTtJQUlFO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVNLHNDQUFrQixHQUF6QjtRQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQWlCLEtBQVUsRUFBRSxNQUFlO1FBQzFDLElBQU0sTUFBTSxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBRSxLQUFLLEVBQUMsTUFBTSxJQUFJLHFDQUFvQixDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUE7UUFDbEcsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUE7SUFDZixDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBc0IsS0FBYSxFQUFFLE1BQWU7UUFDbEQsSUFBTSxNQUFNLEdBQWMsRUFBRSxDQUFBO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFNLE1BQU0sR0FBYyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6RSxHQUFHLENBQUMsQ0FBYyxVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU07Z0JBQW5CLElBQU0sR0FBRyxlQUFBO2dCQUNaLElBQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDL0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLEtBQUssRUFBQyxNQUFNLElBQUkscUNBQW9CLENBQUMsVUFBVSxDQUFFLENBQUMsQ0FBQTtvQkFDL0YsS0FBSyxDQUFBO2dCQUNQLENBQUM7YUFDRjtRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBRSxLQUFLLEVBQUMsTUFBTSxJQUFJLHFDQUFvQixDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUE7UUFDbEcsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUE7SUFDZixDQUFDO0lBRU0seUJBQUssR0FBWixVQUFjLEtBQVUsRUFBRSxNQUFlO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBRSxLQUFLLEVBQUMsTUFBTSxJQUFJLHFDQUFvQixDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUE7UUFDbEcsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUNNLDZCQUFTLEdBQWhCLFVBQWtCLEtBQWEsRUFBRSxNQUFlO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFjLENBQUUsS0FBSyxFQUFHLE1BQU0sSUFBSSxxQ0FBb0IsQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFBO1lBQ2xHLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVNLHlCQUFLLEdBQVosVUFBYyxLQUFVLEVBQUcsTUFBZTtRQUN4QyxFQUFFLENBQUMsQ0FBRSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssU0FBVSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFjLENBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSSxxQ0FBb0IsQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFBO1FBQ25HLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVILGdCQUFDO0FBQUQsQ0EvREEsQUErREMsSUFBQTtBQS9EWSw4QkFBUyIsImZpbGUiOiJjb3JlL1ZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvckVycm9yICwgdmFsaWRhdG9yRXJyb3JSZXNhb24gfSBmcm9tICcuL1ZhbGlkYXRvckVycm9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3JFcnJvcnM6IFZhbGlkYXRvckVycm9yW11cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy52YWxpZGF0b3JFcnJvcnMgPSBbXVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1ZhbGlkYXRvckVycm9ycyAoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMudmFsaWRhdG9yRXJyb3JzLmxlbmd0aCA+IDApXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9OdW1iZXIgKHBhcmFtOiBhbnksIHJlYXNvbj86IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlciA9IE51bWJlcihwYXJhbSlcclxuICAgIGlmIChpc05hTihyZXN1bHQpKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKCBwYXJhbSxyZWFzb24gfHwgdmFsaWRhdG9yRXJyb3JSZXNhb24uUGFyYW1FcnJvciApKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvTnVtYmVyQXJyYXkgKHBhcmFtOiBzdHJpbmcsIHJlYXNvbj86IHN0cmluZyApOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCBudW1BcnI6IG51bWJlciBbXSA9IFtdXHJcbiAgICBpZiAocGFyYW0gJiYgcGFyYW0uaW5kZXhPZignWycpID09PSAwICYmIHBhcmFtLmxhc3RJbmRleE9mKCddJykgPT09IHBhcmFtLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY29uc3Qgc3RyQXJyOiBzdHJpbmcgW10gPSBwYXJhbS5zdWJzdHJpbmcoMSwgcGFyYW0ubGVuZ3RoIC0gMSkuc3BsaXQoJywnKVxyXG4gICAgICBmb3IgKGNvbnN0IHN0ciBvZiBzdHJBcnIpIHtcclxuICAgICAgICBjb25zdCBudW06IG51bWJlciA9IE51bWJlcihzdHIpXHJcbiAgICAgICAgaWYgKHN0ciAhPT0gJycgJiYgIWlzTmFOKG51bSkpIHtcclxuICAgICAgICAgIG51bUFyci5wdXNoKG51bSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy52YWxpZGF0b3JFcnJvcnMucHVzaChuZXcgVmFsaWRhdG9yRXJyb3IocGFyYW0scmVhc29uIHx8IHZhbGlkYXRvckVycm9yUmVzYW9uLlBhcmFtRXJyb3IgKSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckVycm9ycy5wdXNoKG5ldyBWYWxpZGF0b3JFcnJvciggcGFyYW0scmVhc29uIHx8IHZhbGlkYXRvckVycm9yUmVzYW9uLlBhcmFtRXJyb3IgKSlcclxuICAgIH1cclxuICAgIHJldHVybiBudW1BcnJcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0ciAocGFyYW06IGFueSwgcmVhc29uPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKCBwYXJhbSxyZWFzb24gfHwgdmFsaWRhdG9yRXJyb3JSZXNhb24uUGFyYW1FcnJvciApKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcclxuICB9XHJcbiAgcHVibGljIHRvQm9vbGVhbiAocGFyYW06IHN0cmluZywgcmVhc29uPzogc3RyaW5nKTogYm9vbGVhbiB8IHN0cmluZyB7XHJcbiAgICBpZiAocGFyYW0gPT09ICd0cnVlJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKCBwYXJhbSAsIHJlYXNvbiB8fCB2YWxpZGF0b3JFcnJvclJlc2Fvbi5QYXJhbUVycm9yICkpXHJcbiAgICAgIHJldHVybiBwYXJhbVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzc2V0IChwYXJhbTogYW55ICwgcmVhc29uPzogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICggIXBhcmFtIHx8IHBhcmFtID09PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yRXJyb3JzLnB1c2gobmV3IFZhbGlkYXRvckVycm9yKCBwYXJhbSAscmVhc29uIHx8IHZhbGlkYXRvckVycm9yUmVzYW9uLlBhcmFtRXJyb3IgKSlcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbVxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
