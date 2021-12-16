import express from 'express';
const rescue = require('express-rescue');

const routerDevices = express.Router();

const {
  createDeviceController,
  getDevicesAllController,
} = require('../controllers/deviceControllers');

const { devicesErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerDevices.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getDevicesAllController(req, res))
);

routerDevices.post(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => createDeviceController(req, res))
);

routerDevices.use(tokenErrors, devicesErrors);

module.exports = routerDevices;
