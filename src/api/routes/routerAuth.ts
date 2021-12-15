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
  rescue((req: any, res: any) => controllers.signinController(req, res))
);

routerAuth.use(authErrors);

module.exports = routerAuth;
