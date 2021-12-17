import express from 'express';
const rescue = require('express-rescue');

const routerCompanies = express.Router();

const {
  getCashiersAllController,
  getCashierByIdController,
  openCashierController,
  closeCashierController,
  blockCashierController,
} = require('../controllers/cashiersControllers');

const { cashiersErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerCompanies.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getCashiersAllController(req, res))
);

routerCompanies.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getCashierByIdController(req, res))
);

routerCompanies.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => openCashierController(req, res))
);

routerCompanies.patch(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => closeCashierController(req, res))
);

routerCompanies.patch(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => blockCashierController(req, res))
);

routerCompanies.use(tokenErrors, cashiersErrors);

module.exports = routerCashiers;
