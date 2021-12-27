import express from 'express';
const rescue = require('express-rescue');

const routerCompanies = express.Router();

const {
  createCompanyController,
  getCompaniesAllController,
  getCompanyByIdController,
} = require('../controllers/companyControllers');

const {
  getCategoriesByCompanyIdController,
} = require('../controllers/categoryControllers');

const {
  getProductsByCompanyIdController,
} = require('../controllers/productControllers');

const {
  getTablesByCompanyIdController,
} = require('../controllers/tableControllers');

const {
  getTicketsByCompanyIdController,
} = require('../controllers/ticketControllers');

const {
  getOrdersByCompanyIdController,
} = require('../controllers/orderControllers');

const { companiesErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerCompanies.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getCompaniesAllController(req, res))
);

routerCompanies.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getCompanyByIdController(req, res))
);

routerCompanies.get(
  '/:id/categories',
  rescue(authorization),
  rescue((req: any, res: any) => getCategoriesByCompanyIdController(req, res))
);

routerCompanies.get(
  '/:id/products',
  rescue(authorization),
  rescue((req: any, res: any) => getProductsByCompanyIdController(req, res))
);

routerCompanies.get(
  '/:id/tables',
  rescue(authorization),
  rescue((req: any, res: any) => getTablesByCompanyIdController(req, res))
);

routerCompanies.get(
  '/:id/tickets',
  rescue(authorization),
  rescue((req: any, res: any) => getTicketsByCompanyIdController(req, res))
);

routerCompanies.get(
  '/:id/orders',
  rescue(authorization),
  rescue((req: any, res: any) => getOrdersByCompanyIdController(req, res))
);

routerCompanies.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createCompanyController(req, res))
);

routerCompanies.use(tokenErrors, companiesErrors);

module.exports = routerCompanies;
