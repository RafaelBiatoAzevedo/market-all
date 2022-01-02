const createOrderService = require('./createOrderService');
const getOrderByIdServide = require('./getOrderByIdService');
const getOrdersAllService = require('./getOrdersAllService');
const getOrdersByCompanyIdService = require('./getOrdersByCompanyIdService');
const getOrdersByCashierIdService = require('./getOrdersByCashierIdService');
const updateOrderService = require('./updateOrderService');
const getOrderByTicketIdService = require('./getOrderByTicketIdService');

module.exports = {
  createOrderService,
  getOrderByIdServide,
  getOrdersAllService,
  getOrdersByCompanyIdService,
  getOrdersByCashierIdService,
  updateOrderService,
  getOrderByTicketIdService,
};
