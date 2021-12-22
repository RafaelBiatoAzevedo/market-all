import express from 'express';
const rescue = require('express-rescue');

const routerTables = express.Router();

const {
  createTablesController,
  getTablesAllController,
  getTableByIdController,
} = require('../controllers/tableControllers');

const { tablesErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerTables.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getTablesAllController(req, res))
);

routerTables.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getTableByIdController(req, res))
);

routerTables.post(
  '/create',
  rescue(authorization),
  rescue((req: any, res: any) => createTablesController(req, res))
);

routerTables.use(tokenErrors, tablesErrors);

module.exports = routerTables;
