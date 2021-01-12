# simple-node-js-rest-server

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application made with the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Configure Environment variables file

Create `.env` file in the root of your project. You have to replace the following env variables with **your own values**:

```
NODE_ENV="development"

DATABASE_URL="mongodb://user:password@domain.mlab.com:port/url_path"
PORT=5000
```

## Running Locally

Make sure you have the minimun **12** version of [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/NazarGorokhivskiy/simple-node-js-rest-server.git

$ cd simple-node-js-rest-server
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/)
