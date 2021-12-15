import express from 'express';
const rescue = require('express-rescue');

const routerAuth = express.Router();
const controllers = require('../controllers');
const authErrors = require('../middlewares/errors/authErrors');

routerAuth.post(
  '/signup',
  rescue((req: any, res: any) => controllers.signupController(req, res))
);

routerAuth.post(
  '/signin',
  rescue(async (req: any, res: any) => {
    if ('rafa' !== req.body) throw Error('No insert customer');
  })
);

routerAuth.use(authErrors);

module.exports = routerAuth;
