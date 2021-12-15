import express from 'express';
import bodyParse from 'body-parser';
const rescue = require('express-rescue');
const responseError = require('./middlewares/errors/responseError');

const app = express();
const routes = require('./routes');

app.use(bodyParse.json());

app.use('/auth', routes.routerAuth);

app.use(responseError);

module.exports = app;
