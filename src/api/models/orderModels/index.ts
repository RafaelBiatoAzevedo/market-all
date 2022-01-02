const createOrder = require('./createOrder');
const getOrderById = require('./getOrderById');
const getOrdersAll = require('./getOrdersAll');
const getOrdersByCompanyId = require('./getOrdersByCompanyId');
const getOrdersByCashierId = require('./getOrdersByCashierId');
const updateOrder = require('./updateOrder');
const getOrderByTicketId = require('./getOrderByTicketId');

module.exports = {
  createOrder,
  getOrderById,
  getOrdersAll,
  getOrdersByCompanyId,
  getOrdersByCashierId,
  updateOrder,
  getOrderByTicketId,
};
