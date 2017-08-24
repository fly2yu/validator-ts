# Validator-Ts

[![](https://img.shields.io/travis/ipv4sec/validator-ts.svg?branch=master&style=flat-square)](https://travis-ci.org/ipv4sec/validator-ts)
[![](https://img.shields.io/github/tag/ipv4sec/validator-ts.svg?style=flat-square)](https://travis-ci.org/ipv4sec/validator-ts)


### Use

```bash
npm install ipv4sec/validator-ts --save
```

```bash
npm install ipv4sec/validator-ts#v2.0.0 --save
```

```typescript
import { Validator } from 'validator-ts'
let validator: Validator = new Validator();
let id: number = validator.toNumber(request.params['id'] , 'PARAM_INVALID');
if ( validator.hasValidatorErrors() ) {
  console.log(validator.validatorErrors)
}
```

Return
```json
[ { 'reason': 'PARAM_INVALID', 'message': 'Bad Request' },
  { 'reason': 'CUSTOM_PARAM_INVALID', 'message': 'Bad Request' } ]
```

### lint

`sh ./bin/tslint.sh` or  `gulp tslint`

### test

`sh ./bin/test.sh` or  `npm test`


### build

`sh ./bin/build.sh` or  `gulp build` or  `gulp watch-build`