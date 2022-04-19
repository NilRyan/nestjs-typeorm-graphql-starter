# NestJS GraphQL Starter

## Description
A NestJS GraphQL starter with JWT Auth and PostgreSQL with TypeORM

## Features
- Authentication / Authorization

## Prerequisites
Make sure to have [Node](https://github.com/nvm-sh/nvm)  and [Docker](https://docs.docker.com/get-docker/) installed. 


## Installation


```bash
npm install
```

## Running the app


```bash
# development
$ docker-compose up // Spins a Postgres instance
$ npm run start

# watch mode
$ docker-compose up // Spins a Postgres instance
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```