import express from 'express';
import bodyParse from 'body-parser';
const cors = require('cors');
const rescue = require('express-rescue');
const { responseError } = require('./middlewares/errors');

const app = express();
const routes = require('./routes');

app.use(cors());
app.use(bodyParse.json());

app.use('/auth', routes.routerAuth);
app.use('/devices', routes.routerDevices);
app.use('/companies', routes.routerCompanies);
app.use('/cashiers', routes.routerCashiers);

app.use(responseError);

module.exports = app;
