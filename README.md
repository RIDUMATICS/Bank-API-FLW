# Bank API FLW

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [typescript](https://www.npmjs.com/package/typescript)
  * TypeScript is a language for application-scale JavaScript.
* [ts-node](https://www.npmjs.com/package/ts-node)
  * TypeScript execution and REPL for node.js, with source map and native ESM support.
* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)

## Setup
- Clone or fork repo 🤷‍♂

  ```bash
    - git clone https://github.com/RIDUMATICS/Bank-API-FLW.git
    - cd Bank-API-FLW
    - nvm use
    - npm install
  ```

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.

- Run `npm run dev` to start the server and watch for changes

### API ENDPOINTS

| URI                                          | HTTP Method | Description                    |
| -------------------------------------------- | ----------- | ------------------------------ |
| <code>/api/v1/accounts</code>.               | `POST`      | Create Account.                |
| <code>/api/v1/accounts</code>.               | `GET`       | Get All Accounts               |
| <code>/api/v1/accounts/:accountId</code>.    | `GET`       | Get Account By ID              |

### Documentation
- [https://documenter.getpostman.com/view/6765162/2s9Y5ctLEn](https://documenter.getpostman.com/view/6765162/2s9Y5ctLEn)

### LIVE URL
- [https://documenter.getpostman.com/view/6765162/2s9Y5ctLEn](https://documenter.getpostman.com/view/6765162/2s9Y5ctLEn)
## Misc😏

If for some reason you find this repo useful, please give me a star🙏

