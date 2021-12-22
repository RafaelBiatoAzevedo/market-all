import express from 'express';
const rescue = require('express-rescue');

const routerTickets = express.Router();

const {
  createTicketsController,
  getTicketsAllController,
  getTicketByIdController,
} = require('../controllers/ticketControllers');

const { ticketsErrors, tokenErrors } = require('../middlewares/errors');
const authorization = require('../middlewares/authorization');

routerTickets.get(
  '/',
  rescue(authorization),
  rescue((req: any, res: any) => getTicketsAllController(req, res))
);

routerTickets.get(
  '/:id',
  rescue(authorization),
  rescue((req: any, res: any) => getTicketByIdController(req, res))
);

routerTickets.post(
  '/create',
  rescue(authorization),
  rescue((req: any, res: any) => createTicketsController(req, res))
);

routerTickets.use(tokenErrors, ticketsErrors);

module.exports = routerTickets;
