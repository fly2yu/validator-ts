"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var validator = new index_1.Validator();
var id = validator.toNumber(1, 'PARAM_INVALID');
var errorNo1 = validator.toBoolean('error', 'PARAM_INVALID');
var errorNo2 = validator.toNumberArray('error', 'PARAM_ERRORN2_INVALID');
if (validator.hasValidatorErrors()) {
    console.log(validator.validatorErrors);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQW9DO0FBQ3BDLElBQUksU0FBUyxHQUFjLElBQUksaUJBQVMsRUFBRSxDQUFBO0FBQzFDLElBQUksRUFBRSxHQUFXLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFHLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFHLGVBQWUsQ0FBQyxDQUFBO0FBQzdELElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFHLHVCQUF1QixDQUFDLENBQUE7QUFDekUsRUFBRSxDQUFDLENBQUUsU0FBUyxDQUFDLGtCQUFrQixFQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLENBQUMiLCJmaWxlIjoiZXhhbXBsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uL2luZGV4J1xubGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG5sZXQgaWQ6IG51bWJlciA9IHZhbGlkYXRvci50b051bWJlcigxICwgJ1BBUkFNX0lOVkFMSUQnKVxubGV0IGVycm9yTm8xID0gdmFsaWRhdG9yLnRvQm9vbGVhbignZXJyb3InICwgJ1BBUkFNX0lOVkFMSUQnKVxubGV0IGVycm9yTm8yID0gdmFsaWRhdG9yLnRvTnVtYmVyQXJyYXkoJ2Vycm9yJyAsICdQQVJBTV9FUlJPUk4yX0lOVkFMSUQnKVxuaWYgKCB2YWxpZGF0b3IuaGFzVmFsaWRhdG9yRXJyb3JzKCkgKSB7XG4gIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0b3JFcnJvcnMpXG59XG4iXX0=