import express from 'express';
const rescue = require('express-rescue');

const routerOrders = express.Router();

const {
  createOrderController,
  getOrdersAllController,
  getOrderByIdController,
} = require('../controllers/orderControllers');

const { ordersErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerOrders.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getOrdersAllController(req, res))
);

routerOrders.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getOrderByIdController(req, res))
);

routerOrders.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createOrderController(req, res))
);

routerOrders.use(tokenErrors, ordersErrors);

module.exports = routerOrders;
