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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0L3Rlc3QudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWdDO0FBQ2hDLGtDQUFvQztBQUVwQyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRTtRQUN4QyxJQUFJLFNBQVMsR0FBYyxJQUFJLGlCQUFTLEVBQUUsQ0FBQTtRQUMxQyxJQUFJLEdBQUcsR0FBVyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUcsQ0FBQyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUcsRUFBRSxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMseUNBQXlDLEVBQUU7UUFDNUMsSUFBSSxTQUFTLEdBQWMsSUFBSSxpQkFBUyxFQUFFLENBQUE7UUFDMUMsSUFBSSxRQUFRLEdBQWEsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFBO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ3JDLElBQUksU0FBUyxHQUFjLElBQUksaUJBQVMsRUFBRSxDQUFBO1FBQzFDLElBQUksR0FBRyxHQUFXLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFBRyxDQUFDLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRyxRQUFRLENBQUMsQ0FBQTtJQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTtRQUN2QyxJQUFJLFNBQVMsR0FBYyxJQUFJLGlCQUFTLEVBQUUsQ0FBQTtRQUMxQyxJQUFJLFNBQVMsR0FBcUIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFHLElBQUksQ0FBQyxDQUFBO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHFDQUFxQyxFQUFFO1FBQ3hDLElBQUksU0FBUyxHQUFjLElBQUksaUJBQVMsRUFBRSxDQUFBO1FBQzFDLElBQUksVUFBVSxHQUFxQixTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQy9ELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUcsQ0FBQyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUcsS0FBSyxDQUFDLENBQUE7SUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDM0MsSUFBSSxTQUFTLEdBQWMsSUFBSSxpQkFBUyxFQUFFLENBQUE7UUFDMUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoidGVzdC90ZXN0LnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFzc2VydCBmcm9tICdhc3NlcnQnXHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uL2luZGV4J1xyXG5cclxuZGVzY3JpYmUoJ1ZhbGlkYXRvcicsICgpID0+IHtcclxuICBpdCgnVGVzdCBWYWxpZGF0b3IgdG9OdW1iZXIgRnJvbSBOdW1iZXInLCAoKSA9PiB7XHJcbiAgICBsZXQgdmFsaWRhdG9yOiBWYWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcclxuICAgIGxldCBudW06IG51bWJlciA9IHZhbGlkYXRvci50b051bWJlcig2NilcclxuICAgIGFzc2VydC5lcXVhbCh2YWxpZGF0b3IuaGFzVmFsaWRhdG9yRXJyb3JzKCkgLCAwKVxyXG4gICAgYXNzZXJ0LmVxdWFsKG51bSAsIDY2KVxyXG4gIH0pXHJcbiAgaXQoJ1Rlc3QgVmFsaWRhdG9yIHRvTnVtYmVyQXJyYXkgRnJvbSBBcnJheScsICgpID0+IHtcclxuICAgIGxldCB2YWxpZGF0b3I6IFZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxyXG4gICAgbGV0IG51bUFycmF5OiBudW1iZXJbXSA9IHZhbGlkYXRvci50b051bWJlckFycmF5KCdbMSwyLDMsNF0nKVxyXG4gICAgYXNzZXJ0LmVxdWFsKHZhbGlkYXRvci5oYXNWYWxpZGF0b3JFcnJvcnMoKSAsIDApXHJcbiAgICBhc3NlcnQuZXF1YWwobnVtQXJyYXlbMF0gLCAxKVxyXG4gICAgYXNzZXJ0LmVxdWFsKG51bUFycmF5WzFdICwgMilcclxuICAgIGFzc2VydC5lcXVhbChudW1BcnJheVsyXSAsIDMpXHJcbiAgICBhc3NlcnQuZXF1YWwobnVtQXJyYXlbM10gLCA0KVxyXG4gIH0pXHJcbiAgaXQoJ1Rlc3QgVmFsaWRhdG9yIHRvU3RyIEZyb20gU3RyaW5nJywgKCkgPT4ge1xyXG4gICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXHJcbiAgICBsZXQgc3RyOiBzdHJpbmcgPSB2YWxpZGF0b3IudG9TdHIoJ3N0cmluZycpXHJcbiAgICBhc3NlcnQuZXF1YWwodmFsaWRhdG9yLmhhc1ZhbGlkYXRvckVycm9ycygpICwgMClcclxuICAgIGFzc2VydC5lcXVhbChzdHIgLCAnc3RyaW5nJylcclxuICB9KVxyXG4gIGl0KCdUZXN0IFZhbGlkYXRvciB0b0Jvb2xlYW4gRnJvbSBUcnVlJywgKCkgPT4ge1xyXG4gICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXHJcbiAgICBsZXQgdHJ1ZVZhbHVlOiBib29sZWFuIHwgc3RyaW5nID0gdmFsaWRhdG9yLnRvQm9vbGVhbigndHJ1ZScpXHJcbiAgICBhc3NlcnQuZXF1YWwodmFsaWRhdG9yLmhhc1ZhbGlkYXRvckVycm9ycygpICwgMClcclxuICAgIGFzc2VydC5lcXVhbCh0cnVlVmFsdWUgLCB0cnVlKVxyXG4gIH0pXHJcbiAgaXQoJ1Rlc3QgVmFsaWRhdG9yIHRvQm9vbGVhbiBGcm9tIEZhbHNlJywgKCkgPT4ge1xyXG4gICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXHJcbiAgICBsZXQgZmFsc2VWYWx1ZTogYm9vbGVhbiB8IHN0cmluZyA9IHZhbGlkYXRvci50b0Jvb2xlYW4oJ2ZhbHNlJylcclxuICAgIGFzc2VydC5lcXVhbCh2YWxpZGF0b3IuaGFzVmFsaWRhdG9yRXJyb3JzKCkgLCAwKVxyXG4gICAgYXNzZXJ0LmVxdWFsKGZhbHNlVmFsdWUgLCBmYWxzZSlcclxuICB9KVxyXG4gIGl0KCdUZXN0IFZhbGlkYXRvciBhc3NldCBGcm9tIE5vdFVuZGVmaW5lZCcsICgpID0+IHtcclxuICAgIGxldCB2YWxpZGF0b3I6IFZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxyXG4gICAgdmFsaWRhdG9yLmFzc2V0KCdOb3RVbmRlZmluZWQnKVxyXG4gICAgYXNzZXJ0LmVxdWFsKHZhbGlkYXRvci5oYXNWYWxpZGF0b3JFcnJvcnMoKSAsIDApXHJcbiAgfSlcclxufSlcclxuIl19
