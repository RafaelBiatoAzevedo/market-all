import express from 'express';
const rescue = require('express-rescue');

const routerProducts = express.Router();

const {
  createProductController,
  getProductsAllController,
  getProductByIdController,
  getProductBySkuController,
} = require('../controllers/productControllers');

const { productsErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerProducts.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getProductsAllController(req, res))
);

routerProducts.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getProductByIdController(req, res))
);

routerProducts.get(
  '/sku/:sku',
  rescue(authorization),
  rescue((req: any, res: any) => getProductBySkuController(req, res))
);

routerProducts.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createProductController(req, res))
);

routerProducts.use(tokenErrors, productsErrors);

module.exports = routerProducts;
