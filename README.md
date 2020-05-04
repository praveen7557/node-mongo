# RESTful API Node Server Boilerplate

A boilerplate/starter project for quickly building production-ready RESTful APIs using Node.js, Express, and Mongoose.

It comes with many built-in features, such as authentication using JWT, request validation, etc. For more details about the features, check the list below.

## Features

- **ES9**: latest ECMAScript features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/praveen7557/node-mongo.git
cd node-mongo
```

Install dependencies:

```bash
yarn install
```

Environment varibales:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

### Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

## Inspirations

- [hagopj13/node-express-mongoose-boilerplate](https://github.com/hagopj13/node-express-mongoose-boilerplate)
