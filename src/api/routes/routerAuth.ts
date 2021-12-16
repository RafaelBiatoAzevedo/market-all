import express from 'express';
const rescue = require('express-rescue');

const routerAuth = express.Router();
const customerControllers = require('../controllers/customerControllers');
const authErrors = require('../middlewares/errors/authErrors');

routerAuth.post(
  '/signup',
  rescue((req: any, res: any) => customerControllers.signupController(req, res))
);

routerAuth.post(
  '/signin',
  rescue((req: any, res: any) => customerControllers.signinController(req, res))
);

routerAuth.use(authErrors);

module.exports = routerAuth;
