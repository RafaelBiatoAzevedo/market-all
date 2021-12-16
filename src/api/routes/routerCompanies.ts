import express from 'express';
const rescue = require('express-rescue');

const routerCompanies = express.Router();

const {
  createCompanyController,
  getCompaniesAllController,
  getCompanyByIdController,
} = require('../controllers/companyControllers');

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

routerCompanies.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createCompanyController(req, res))
);

routerCompanies.use(tokenErrors, companiesErrors);

module.exports = routerCompanies;
