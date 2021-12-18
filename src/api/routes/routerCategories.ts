import express from 'express';
const rescue = require('express-rescue');

const routerCategories = express.Router();

const {
  createCategoryController,
  getCategoriesAllController,
  getCategoryByIdController,
} = require('../controllers/categoryControllers');

const { categoriesErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerCategories.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getCategoriesAllController(req, res))
);

routerCategories.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getCategoryByIdController(req, res))
);

routerCategories.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createCategoryController(req, res))
);

routerCategories.use(tokenErrors, categoriesErrors);

module.exports = routerCategories;
