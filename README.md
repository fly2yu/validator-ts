# Validator

Request Validator For Nodejs By TypeScript


### Use

```shell
npm install ipv4sec/validator-ts --save
```


```
import { Validator } from 'validator-ts'
let validator: Validator = new Validator();
let id: number = validator.toNumber(request.params['id'] , 'PARAM_INVALID');
if ( validator.hasValidatorErrors() ) {
  console.log(validator.validatorErrors)
}
```