const createCashierController = require('./createCashierController');
const createWithdrawController = require('./createWithdrawController');
const createDepositController = require('./createDepositController');
const createPaymentController = require('./createPaymentController');
const getCashiersAllController = require('./getCashiersAllController');
const getCashierByIdController = require('./getCashierByIdController');
const blockCashierController = require('./blockCashierController');
const closeCashierController = require('./closeCashierController');
const cancelPaymentController = require('./cancelPaymentController');

module.exports = {
  createCashierController,
  createWithdrawController,
  createDepositController,
  createPaymentController,
  getCashiersAllController,
  getCashierByIdController,
  blockCashierController,
  closeCashierController,
  cancelPaymentController,
};
