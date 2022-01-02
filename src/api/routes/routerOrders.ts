import express from 'express';
const rescue = require('express-rescue');

const routerOrders = express.Router();

const {
  createOrderController,
  getOrdersAllController,
  getOrderByIdController,
  updateOrderController,
  getOrderByTicketIdController,
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

routerOrders.get(
  '/tickets/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getOrderByTicketIdController(req, res))
);

routerOrders.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createOrderController(req, res))
);

routerOrders.put(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => updateOrderController(req, res))
);

routerOrders.use(tokenErrors, ordersErrors);

module.exports = routerOrders;
