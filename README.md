## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

Install dependencies
```bash
$ npm install
```

Install pre-commit hooks
```bash
$ npm run prepare
```

## Compile and run the project

```bash
# development
$ npm run start
# development sped up
$ npm run start -- -b swc

# watch mode
$ npm run start:dev
# watch mode sped up
$ npm run start:dev -- -b swc

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Development

### Create a new resource

```bash
# with tests
$ nest g resource users

# without tests
$ nest g resource users --no-spec
```