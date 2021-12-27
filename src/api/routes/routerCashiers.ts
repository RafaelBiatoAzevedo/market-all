import express from 'express';
const rescue = require('express-rescue');

const routerCashiers = express.Router();

const {
  getCashiersAllController,
  getCashierByIdController,
  createCashierController,
  closeCashierController,
  blockCashierController,
  createWithdrawController,
  createDepositController,
  createPaymentController,
  cancelPaymentController,
} = require('../controllers/cashierControllers');

const { tokenErrors, cashiersErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerCashiers.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getCashiersAllController(req, res))
);

routerCashiers.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getCashierByIdController(req, res))
);

routerCashiers.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createCashierController(req, res))
);

routerCashiers.post(
  '/:id/withdraw',
  rescue(authorization),
  rescue((req: any, res: any) => createWithdrawController(req, res))
);

routerCashiers.post(
  '/:id/deposit',
  rescue(authorization),
  rescue((req: any, res: any) => createDepositController(req, res))
);

routerCashiers.post(
  '/:id/payment',
  rescue(authorization),
  rescue((req: any, res: any) => createPaymentController(req, res))
);

routerCashiers.patch(
  '/:cashierId/payment/:id/cancel',
  rescue(authorization),
  rescue((req: any, res: any) => cancelPaymentController(req, res))
);

routerCashiers.patch(
  '/:id/close',
  rescue(authorization),
  rescue((req: any, res: any) => closeCashierController(req, res))
);

routerCashiers.patch(
  '/:id/block',
  rescue(authorization),
  rescue((req: any, res: any) => blockCashierController(req, res))
);

routerCashiers.use(tokenErrors, cashiersErrors);

module.exports = routerCashiers;
