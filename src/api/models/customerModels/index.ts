const createCustomer = require('./createCustomer');
const getCustomersAll = require('./getCustomersAll');
const getCustomerById = require('./getCustomerById');
const getCustomerByName = require('./getCustomerByName');
const getCustomerByDocument = require('./getCustomerByDocument');
const getCustomerByPhone = require('./getCustomerByPhone');
const getCustomerByEmail = require('./getCustomerByEmail');

module.exports = {
  createCustomer,
  getCustomersAll,
  getCustomerById,
  getCustomerByName,
  getCustomerByDocument,
  getCustomerByPhone,
  getCustomerByEmail,
};
