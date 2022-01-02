const createOrderController = require('./createOrderController');
const getOrdersAllController = require('./getOrdersAllController');
const getOrderByIdController = require('./getOrderByIdController');
const getOrdersByCompanyIdController = require('./getOrdersByCompanyIdController');
const getOrdersByCashierIdController = require('./getOrdersByCashierIdController');
const updateOrderController = require('./updateOrderController');
const getOrderByTicketIdController = require('./getOrderByTicketIdController');

module.exports = {
  createOrderController,
  getOrdersAllController,
  getOrderByIdController,
  getOrdersByCompanyIdController,
  getOrdersByCashierIdController,
  updateOrderController,
  getOrderByTicketIdController,
};
